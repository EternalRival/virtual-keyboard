import { Component } from './Component';
import Quack from '../assets/quack.ogg';

export class Duck extends Component {
  static quack = new Audio(Quack);

  constructor(props) {
    super('span', 'duck', { textContent: '🦆', ...props });
    this.node.addEventListener('mousedown', () => Duck.sayQuack());
  }

  static sayQuack() {
    this.quack.currentTime = 0;
    return this.quack.play();
  }
}
