import { Component, Keyboard } from './components';
import './style.scss';

class App {
  constructor(root) {
    this.root = root;
  }

  render() {
    const main = new Component('main', 'main');
    const section = new Component('section', 'section');
    const textField = new Component('textarea', 'text-field', { autofocus: true, rows: 5 });
    const heading = new Component('h1', 'heading', { textContent: 'Vitrual Keyboard 🦆' });
    const keyboard = new Keyboard();
    const disclaimer = new Component('p', 'disclaimer', {
      innerText:
        'The keyboard was created in the Windows 10 OS\nCombination for language switch: left ctrl[⎈] + alt[⎇] + shift[⇧]',
    });

    this.root.append(main.node);
    main.append(section);
    section.append(heading, textField, keyboard, disclaimer);
  }
}

const app = new App(document.body);
app.render();
