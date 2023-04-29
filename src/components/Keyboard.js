/* eslint-disable no-console */
import { KeyMap } from '../assets/key-map';
import { StorageService } from '../service/storage';
import { Component } from './Component';
import { Key } from './Key';

export class Keyboard extends Component {
  constructor(props, parent) {
    super('ul', 'keyboard', props, parent);
    const locale = StorageService.get('locale', 'en');

    this.keys = [...KeyMap].map(([, keyData]) => {
      const item = new Component('li', 'keyboard__item', null, this.node);
      const key = new Key(keyData, locale, 'keyboard__key', item.node);
      return { item, key };
    });
  }
}
