import { Component } from './Component';
import Poster from '../assets/pond-poster.jpg';
import Video from '../assets/pond.mp4';

export class Background extends Component {
  constructor(parent) {
    super(
      'video',
      'bg-video',
      {
        autoplay: true,
        loop: true,
        muted: true,
        poster: Poster,
      },
      parent,
    );
    const source = new Component('source', 'bg-video__source', { src: Video, type: 'video/mp4' });
    this.append(source);
  }
}
