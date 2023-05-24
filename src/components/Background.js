import { Component } from './Component';
import Poster from '../assets/pond-poster.jpg';
import Video from '../assets/pond.mp4';

export class Background extends Component {
  constructor() {
    super('video', 'bg-video', {
      autoplay: true,
      loop: true,
      muted: true,
      poster: Poster,
    });
    const source = new Component('source', 'bg-video__source', { src: Video, type: 'video/mp4' });
    this.append(source);
  }
}
