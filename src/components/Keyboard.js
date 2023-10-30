import { KeyMapEn, KeyMapRu } from '../assets/locales';
import { StorageService } from '../service/storage';
import { Component } from './Component';
import { Key } from './Key';

export class Keyboard extends Component {
  locales = new Map([
    ['en', KeyMapEn],
    ['ru', KeyMapRu],
  ]);

  keys = new Map();

  mods = new Map([
    ['ShiftLeft', false],
    ['ShiftRight', false],
    ['CapsLock', false],
    ['AltLeft', false],
  ]);

  constructor(textField, props) {
    super('ul', 'keyboard', props);
    this.textField = textField;

    KeyMapEn.forEach((_, code) => {
      const item = new Component('li', 'keyboard__item');
      const key = new Key(code, 'keyboard__key');
      this.append(item);
      item.append(key);
      this.keys.set(code, key);
    });

    this.mods = new Proxy(this.mods, {
      get: (target, prop) => target.get(prop),
      set: (target, prop, value) => {
        target.set(prop, value);
        this.getKeyNode(prop).classList[value ? 'add' : 'remove']('toggled');
        this.renderLayout();
        return true;
      },
    });

    const handlers = new Map([
      ['Backspace', () => textField.useAction('backspace')],
      ['Delete', () => textField.useAction('delete')],
      ['Tab', () => textField.useAction('tab')],
      ['Enter', () => textField.useAction('enter')],
      ['CapsLock', () => {
        this.mods.CapsLock = !this.mods.CapsLock;
      }],
      ['ShiftLeft', ({ repeat }) => {
        this.mods.ShiftLeft = repeat || !this.mods.ShiftLeft;
        if (this.mods.AltLeft) this.switchLocale();
      }],
      ['ShiftRight', ({ repeat }) => {
        this.mods.ShiftRight = repeat || !this.mods.ShiftRight;
      }],
      ['ControlLeft', () => {}],
      ['ControlRight', () => {}],
      ['AltLeft', () => {
        this.mods.AltLeft = !this.mods.AltLeft;
        if (this.mods.ShiftLeft) this.switchLocale();
      }],
      ['AltRight', () => {}],
      ['MetaLeft', () => {}],
      ['ArrowUp', () => textField.useAction('up')],
      ['ArrowLeft', () => textField.useAction('left')],
      ['ArrowDown', () => textField.useAction('down')],
      ['ArrowRight', () => textField.useAction('right')],
      ['default', (e, { value }) => {
        textField.useAction('insert', value);
        if (!e.shiftKey) [this.mods.ShiftLeft, this.mods.ShiftRight] = [false, false];
      }],
    ]);
    this.useHandler = (event, code, node) => (handlers.get(code) ?? handlers.get('default'))(event, node);

    this.renderLayout();
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => {
      const node = this.getKeyNode(e.code);
      if (!node) return;
      this.useHandler(e, e.code, node);
      node.classList.add('active');
      e.preventDefault();
    });
    window.addEventListener('keyup', (e) => {
      const node = this.getKeyNode(e.code);
      if (!node) return;
      if (['ShiftLeft', 'ShiftRight'].includes(e.code)) this.mods[e.code] = false;
      node.classList.remove('active');
      e.preventDefault();
    });

    this.keys.forEach(({ node }, code) => node.addEventListener('click', (e) => this.useHandler(e, code, node)));
  }

  renderLayout() {
    const [caps, shift] = [this.mods.CapsLock, this.mods.ShiftLeft || this.mods.ShiftRight];
    const locale = this.locales.get(StorageService.get('locale', 'en'));

    this.keys.forEach((key) => {
      const { code, node } = key;
      const newValue = locale.get(code)[shift ? 'shifted' : 'default'];
      node.value = caps ? newValue[shift ? 'toLowerCase' : 'toUpperCase']() : newValue;
    });
  }

  switchLocale() {
    StorageService.set('locale', StorageService.get('locale', 'en') === 'en' ? 'ru' : 'en');
    [this.mods.ShiftLeft, this.mods.AltLeft] = [false, false];
  }

  getKeyNode(name) {
    return this.keys.get(name)?.node;
  }
}
