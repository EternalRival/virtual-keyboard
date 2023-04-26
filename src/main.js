import './style.scss';
import Component from './components/Component';

const hello = new Component('h1', 'hello', { textContent: 'Hello!' }, document.body);

console.log(hello.el.textContent);
