import { Component } from './Component';
import { emitter } from '../service/emitter';

export class Key extends Component {
  constructor(keyCode, keyData, className, parent) {
    super('button', `${className} ${keyCode}`, {}, parent);
    [this.code, this.data] = [keyCode, keyData];
    this.node.addEventListener('click', () => emitter.emit(this.code, this));
  }

  get value() {
    return this.node.value;
  }

  setKey(locale, isShifted) {
    this.node.value = this.data.locale[locale][isShifted ? 'shifted' : 'value'];
  }

  keydown(e) {
    this.node.classList.add('active');
    this.node.click();
    e.preventDefault();
  }

  keyup(e) {
    this.node.classList.remove('active');
    e.preventDefault();
  }
}
