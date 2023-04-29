import { Component } from './Component';

export class Key extends Component {
  constructor(keyData, locale, className, parent) {
    super('button', className, {}, parent);
    this.label = new Component('span', `${className}-text`, {}, this);
    this.data = keyData;
    this.setKey(locale);
  }

  setKey(locale, isShifted) {
    this.label.node.textContent = this.data.locale[locale][isShifted ? 'shifted' : 'value'];
  }
}
