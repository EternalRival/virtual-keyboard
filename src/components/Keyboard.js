import { KeyMap } from '../assets/key-map';
import { StorageService } from '../service/storage';
import { Component } from './Component';
import { Key } from './Key';

export class Keyboard extends Component {
  keys = new Map();

  mods = { shift: false, caps: false, alt: false };

  constructor(textField, props, parent) {
    super('ul', 'keyboard', props, parent);
    this.textField = textField;

    KeyMap.forEach((data, code) => {
      const item = new Component('li', 'keyboard__item', null, this.node);
      const key = new Key(code, data, 'keyboard__key', item.node);
      this.keys.set(code, key);
    });

    this.handlers = {
      Backspace: () => textField.useAction('backspace'),
      Delete: () => textField.useAction('delete'),
      Tab: () => textField.useAction('tab'),
      Enter: () => textField.useAction('enter'),
      CapsLock: (e) => {
        this.mods.caps = !this.mods.caps;
        e.target.classList[this.mods.caps ? 'add' : 'remove']('toggled');
        this.renderLayout();
      },
      ShiftLeft: (e) => {
        this.mods.shift = !this.mods.shift;
        e.target.classList[this.mods.shift ? 'add' : 'remove']('toggled');
        // if (this.mods.alt) this.switchLocale();
        this.renderLayout();
      },
      ShiftRight: () => {},
      ControlLeft: () => {},
      ControlRight: () => {},
      AltLeft: (e) => {
        this.mods.alt = !this.mods.alt;
        e.target.classList[this.mods.alt ? 'add' : 'remove']('toggled');
      },
      AltRight: () => {},
      MetaLeft: () => {},
      ArrowUp: () => textField.useAction('up'),
      ArrowLeft: () => textField.useAction('left'),
      ArrowDown: () => textField.useAction('down'),
      ArrowRight: () => textField.useAction('right'),
      default: (e) => textField.useAction('insert', e.target.value),
    };

    this.renderLayout();
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => this.keys.get(e.code)?.keydown(e));
    window.addEventListener('keyup', (e) => this.keys.get(e.code)?.keyup(e));
    this.keys.forEach(({ node }, code) => node.addEventListener('click', this.handlers[code] ?? this.handlers.default));
  }

  renderLayout() {
    this.keys.forEach((key) => key.setKey(Keyboard.locale, this.mods));
  }

  switchLocale() {
    const locale = Keyboard.locale === 'en' ? 'ru' : 'en';
    Keyboard.locale = locale;
    [this.mods.shift, this.mods.alt] = [false, false];
    this.renderLayout();
  }

  static set locale(locale) {
    StorageService.set('locale', locale);
  }

  static get locale() {
    return StorageService.get('locale', 'en');
  }
}
