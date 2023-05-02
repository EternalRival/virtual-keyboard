import { KeyMap } from '../assets/key-map';
import { StorageService } from '../service/storage';
import { Component } from './Component';
import { Key } from './Key';

export class Keyboard extends Component {
  keys = new Map();

  mods = {
    ShiftLeft: false,
    ShiftRight: false,
    CapsLock: false,
    AltLeft: false,
  };

  constructor(textField, props, parent) {
    super('ul', 'keyboard', props, parent);
    this.textField = textField;

    KeyMap.forEach((data, code) => {
      const item = new Component('li', 'keyboard__item', null, this.node);
      const key = new Key(code, data, 'keyboard__key', item.node);
      this.keys.set(code, key);
    });

    this.mods = new Proxy(this.mods, {
      get: (target, prop) => target[prop],
      set: (target, prop, value) => {
        Object.assign(target, { [prop]: value });
        this.getNode(prop).classList[value ? 'add' : 'remove']('toggled');
        this.renderLayout();
        return true;
      },
    });

    const handlers = {
      Backspace: () => textField.useAction('backspace'),
      Delete: () => textField.useAction('delete'),
      Tab: () => textField.useAction('tab'),
      Enter: () => textField.useAction('enter'),
      CapsLock: () => {
        this.mods.CapsLock = !this.mods.CapsLock;
      },
      ShiftLeft: ({ repeat }) => {
        this.mods.ShiftLeft = repeat || !this.mods.ShiftLeft;
        if (this.mods.AltLeft) this.switchLocale();
      },
      ShiftRight: ({ repeat }) => {
        this.mods.ShiftRight = repeat || !this.mods.ShiftRight;
      },
      ControlLeft: () => {},
      ControlRight: () => {},
      AltLeft: () => {
        this.mods.AltLeft = !this.mods.AltLeft;
        if (this.mods.ShiftLeft) this.switchLocale();
      },
      AltRight: () => {},
      MetaLeft: () => {},
      ArrowUp: () => textField.useAction('up'),
      ArrowLeft: () => textField.useAction('left'),
      ArrowDown: () => textField.useAction('down'),
      ArrowRight: () => textField.useAction('right'),
      default: (e, { value }) => {
        textField.useAction('insert', value);
        if (!e.shiftKey) {
          this.mods.ShiftLeft = false;
          this.mods.ShiftRight = false;
        }
      },
    };
    this.useHandler = (event, code, node) => (handlers[code] ?? handlers.default)(event, node);

    this.renderLayout();
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => {
      const node = this.getNode(e.code);
      if (!node) return;
      node.classList.add('active');
      this.useHandler(e, e.code, node);
      e.preventDefault();
    });
    window.addEventListener('keyup', (e) => {
      const node = this.getNode(e.code);
      if (!node) return;
      if (e.code === 'ShiftLeft') this.mods.ShiftLeft = false;
      if (e.code === 'ShiftRight') this.mods.ShiftRight = false;
      node.classList.remove('active');
      e.preventDefault();
    });

    this.keys.forEach(({ node }, code) => node.addEventListener('click', (e) => this.useHandler(e, code, node)));
  }

  renderLayout() {
    this.keys.forEach((key) => {
      key.setKey(Keyboard.locale, {
        shift: this.mods.ShiftLeft || this.mods.ShiftRight,
        caps: this.mods.CapsLock,
      });
    });
  }

  switchLocale() {
    const locale = Keyboard.locale === 'en' ? 'ru' : 'en';
    Keyboard.locale = locale;
    [this.mods.ShiftLeft, this.mods.AltLeft] = [false, false];
  }

  getNode(name) {
    return this.keys.get(name)?.node;
  }

  static set locale(locale) {
    StorageService.set('locale', locale);
  }

  static get locale() {
    return StorageService.get('locale', 'en');
  }
}
