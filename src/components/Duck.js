import Quack from '../assets/quack.ogg';

export class Duck {
  static quack = new Audio(Quack);

  static sayQuack() {
    this.quack.currentTime = 0;
    return this.quack.play();
  }
}
