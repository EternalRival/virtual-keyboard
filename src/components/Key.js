import { Component } from './Component';

export class Key extends Component {
  constructor(keyCode, keyData, className, parent) {
    super('button', `${className} ${keyCode}`, {}, parent);
    [this.code, this.data] = [keyCode, keyData];
  }

  setKey(locale, isShifted) {
    this.node.value = this.data.locale[locale][isShifted ? 'shifted' : 'value'];
  }
}
