import { Component } from './Component';

export class Key extends Component {
  constructor(code, className) {
    super('button', `${className} ${code}`);
    this.code = code;
  }
}
