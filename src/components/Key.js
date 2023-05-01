import { Component } from './Component';

export class Key extends Component {
  constructor(keyCode, keyData, className, parent) {
    super('button', `${className} ${keyCode}`, {}, parent);
    [this.code, this.data] = [keyCode, keyData];
  }

  get value() {
    return this.node.value;
  }

  setKey(locale, { shift, caps }) {
    const newValue = this.data.locale[locale][shift ? 'shifted' : 'default'];
    this.node.value = caps ? newValue[shift ? 'toLowerCase' : 'toUpperCase']() : newValue;
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
