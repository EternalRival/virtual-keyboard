import { Component } from './Component';

export class Key extends Component {
  constructor(code, className, parent) {
    super('button', `${className} ${code}`, null, parent);
    this.code = code;
  }
}
