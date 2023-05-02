import {
  Duck, TextField, Background, Component, Keyboard,
} from './components';
import './style.scss';

class App {
  constructor(root) {
    this.root = root;
  }

  run() {
    const background = new Background(document.body);
    const main = new Component('main', 'main');
    const section = new Component('section', 'section');
    const textField = new TextField();
    const heading = new Component('h1', 'heading', { textContent: 'Virtual Keyboard' });
    const duck = new Duck();
    const keyboard = new Keyboard(textField);
    const disclaimer = new Component('p', 'disclaimer', {
      innerText: 'The keyboard was created in the Windows 10 OS\nCombination for language switch: ',
    });
    const combination = new Component('span', 'combination', {
      textContent: 'left alt[⎇] + shift[⇧]',
      onclick: () => keyboard.switchLocale(),
    });

    this.root.append(background.node, main.node);
    main.append(section);
    heading.append(duck);
    disclaimer.append(combination);
    section.append(heading, textField, keyboard, disclaimer);
  }
}

const app = new App(document.body);
app.run();
