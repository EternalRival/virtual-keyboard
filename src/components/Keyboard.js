/* eslint-disable no-console */
import { KeyMap } from '../assets/key-map';
import { StorageService } from '../service/storage';
import { Component } from './Component';
import { Key } from './Key';

export class Keyboard extends Component {
  constructor(textField, props, parent) {
    super('ul', 'keyboard', props, parent);
    this.textField = textField;

    this.keys = [...KeyMap].map(([keyCode, keyData]) => {
      const item = new Component('li', 'keyboard__item', null, this.node);
      const key = new Key(keyCode, keyData, 'keyboard__key', item.node);
      key.setKey(Keyboard.locale);
      return { item, key };
    });

    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => this.getKeyNode(e.code)?.keydown(e));
    window.addEventListener('keyup', (e) => this.getKeyNode(e.code)?.keyup(e));
  }

  renderLayout(isShifted) {
    this.keys.forEach(({ key }) => key.setKey(Keyboard.locale, isShifted));
  }

  switchLocale() {
    const locale = Keyboard.locale === 'en' ? 'ru' : 'en';
    Keyboard.locale = locale;
    this.renderLayout();
  }

  getKeyNode(keyCode) {
    return this.keys.find(({ key }) => key.code === keyCode)?.key;
  }

  static set locale(locale) {
    StorageService.set('locale', locale);
  }

  static get locale() {
    return StorageService.get('locale', 'en');
  }
}
