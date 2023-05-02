import { Component } from './Component';

export class TextField extends Component {
  constructor(className, props, parent) {
    super('textarea', className || 'text-field', { autofocus: true, ...{ rows: 4, cols: 60 }, ...props }, parent);
  }

  useAction(name, ...args) {
    this[name](...args);
    this.node.blur();
    this.node.focus();
  }

  insert(text) {
    const { selectionStart, selectionEnd, value } = this.node;
    const [start, end] = [selectionStart, selectionEnd];
    this.node.value = `${value.slice(0, start)}${text}${value.slice(end)}`;
    this.node.selectionEnd = start + text.length;
  }

  enter() {
    this.insert('\n');
  }

  tab() {
    this.insert('\t');
  }

  backspace() {
    const { selectionStart, selectionEnd, value } = this.node;
    const [start, end] = [selectionStart - (selectionStart === selectionEnd), selectionEnd];
    if (!end) return;
    this.node.value = `${value.slice(0, start)}${value.slice(end)}`;
    this.node.selectionEnd = start;
  }

  delete() {
    const { selectionStart, selectionEnd, value } = this.node;
    const [start, end] = [selectionStart, selectionEnd + (selectionStart === selectionEnd)];
    this.node.value = `${value.slice(0, start)}${value.slice(end)}`;
    this.node.selectionEnd = start;
  }

  left() {
    this.node.selectionStart -= 1;
    this.node.selectionEnd = this.node.selectionStart;
  }

  right() {
    this.node.selectionEnd += 1;
    this.node.selectionStart = this.node.selectionEnd;
  }

  up() {
    const { selectionStart, cols, value } = this.node;
    this.node.selectionEnd = Math.max(value.lastIndexOf('\n', selectionStart - 1), selectionStart - cols - 1, 0);
    this.node.selectionStart = this.node.selectionEnd;
  }

  down() {
    const { cols, selectionEnd, value } = this.node;
    this.node.selectionEnd = Math.min(value.indexOf('\n', selectionEnd + 1), selectionEnd + cols + 1, value.length);
    this.node.selectionStart = this.node.selectionEnd;
  }
}
