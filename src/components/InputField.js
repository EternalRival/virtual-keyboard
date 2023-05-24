import { Component } from './Component';

export class InputField extends Component {
  constructor(className, props) {
    super('textarea', className || 'text-field', { autofocus: true, ...{ rows: 4, cols: 60 }, ...props });
  }

  useAction(name, ...args) {
    this.actions.get(name)(...args);
    this.node.blur();
    this.node.focus();
  }

  actions = new Map([
    ['insert', (text) => {
      const { selectionStart, selectionEnd } = this.node;
      this.node.setRangeText(text, selectionStart, selectionEnd, 'end');
    }],
    ['enter', () => this.insert('\n')],
    ['tab', () => this.insert('\t')],
    ['backspace', () => {
      const { selectionStart, selectionEnd } = this.node;
      if (!selectionEnd) return;
      this.node.setRangeText('', selectionStart - (selectionStart === selectionEnd), selectionEnd, 'end');
    }],
    ['delete', () => {
      const { selectionStart, selectionEnd } = this.node;
      this.node.setRangeText('', selectionStart, selectionEnd + (selectionStart === selectionEnd), 'end');
    }],
    ['left', () => {
      this.node.selectionStart -= 1;
      this.node.selectionEnd = this.node.selectionStart;
    }],
    ['right', () => {
      this.node.selectionEnd += 1;
      this.node.selectionStart = this.node.selectionEnd;
    }],
    ['up', () => {
      const { selectionStart, cols, value } = this.node;
      this.node.selectionEnd = Math.max(value.lastIndexOf('\n', selectionStart - 1), selectionStart - cols - 1, 0);
      this.node.selectionStart = this.node.selectionEnd;
    }],
    ['down', () => {
      const { cols, selectionEnd, value } = this.node;
      this.node.selectionEnd = Math.min(value.indexOf('\n', selectionEnd + 1), selectionEnd + cols + 1, value.length);
      this.node.selectionStart = this.node.selectionEnd;
    }],
  ]);
}
