import { KeyMap } from '../assets/key-map';
import { StorageService } from '../service/storage';
import { Component } from './Component';
import { Key } from './Key';

export class Keyboard extends Component {
  state = { shift: 0, caps: 0 };

  constructor(textField, props, parent) {
    super('ul', 'keyboard', props, parent);
    this.textField = textField;

    this.keys = [...KeyMap].map(([keyCode, keyData]) => {
      const item = new Component('li', 'keyboard__item', null, this.node);
      const key = new Key(keyCode, keyData, 'keyboard__key', item.node);
      return { item, key };
    });

    this.renderLayout();
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => this.getKey(e.code)?.keydown(e));
    window.addEventListener('keyup', (e) => this.getKey(e.code)?.keyup(e));

    const handlers = {
      Backspace: () => this.textField.useAction('backspace'),
      Delete: () => this.textField.useAction('delete'),
      Tab: () => this.textField.useAction('tab'),
      Enter: () => this.textField.useAction('enter'),
      CapsLock: () => {
        this.caps = !this.caps;
        this.renderLayout(this.caps);
      },
      ShiftLeft: () => {
        this.shift = !this.shift;
        this.renderLayout(this.shift);
      },
      ShiftRight: () => {},
      ControlLeft: () => {},
      ControlRight: () => {},
      AltLeft: () => {},
      AltRight: () => {},
      MetaLeft: () => {},
      ArrowUp: () => this.textField.useAction('up'),
      ArrowLeft: () => this.textField.useAction('left'),
      ArrowDown: () => this.textField.useAction('down'),
      ArrowRight: () => this.textField.useAction('right'),
      // default: (e) => this.textField.insertText(e.target.value),
      default: (e) => this.textField.useAction('insert', e.target.value),
    };
    this.keys.forEach(({ key: { code, node } }) => node.addEventListener('click', handlers[code] ?? handlers.default));
  }

  renderLayout() {
    this.keys.forEach(({ key }) => key.setKey(Keyboard.locale, this.state));
  }

  switchLocale() {
    const locale = Keyboard.locale === 'en' ? 'ru' : 'en';
    Keyboard.locale = locale;
    this.renderLayout();
  }

  getKey(keyCode) {
    return this.keys.find(({ key }) => key.code === keyCode)?.key;
  }

  static set locale(locale) {
    StorageService.set('locale', locale);
  }

  static get locale() {
    return StorageService.get('locale', 'en');
  }
}
