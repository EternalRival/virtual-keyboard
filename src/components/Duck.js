import { Component } from './Component';
import Quack from '../assets/quack.webm';

export class Duck extends Component {
  static quack = new Audio(Quack);

  constructor(props, parent) {
    super('span', 'duck', { textContent: '🦆', ...props }, parent);
    this.node.addEventListener('click', () => Duck.sayQuack());
  }

  static sayQuack() {
    this.quack.currentTime = 0;
    return this.quack.play();
  }
}
