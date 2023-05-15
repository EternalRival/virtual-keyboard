import {
  Duck, InputField, Background, Component, Keyboard,
} from '.';

export class App {
  constructor(root) {
    this.root = root;
  }

  run() {
    const background = new Background();
    const main = new Component('main', 'main');
    const section = new Component('section', 'section');
    const textField = new InputField();
    const heading = new Component('h1', 'heading', { textContent: 'Virtual Keyboard' });

    const duck = new Component('span', 'duck', {
      textContent: '🦆',
      onmousedown: () => Duck.sayQuack(),
    });
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
