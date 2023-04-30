import { Component } from './Component';

export class TextField extends Component {
  constructor(className, props, parent) {
    super('textarea', className || 'text-field', { autofocus: true, ...{ rows: 5, cols: 60 }, ...props }, parent);
  }

  insertText(text) {
    const { node } = this;
    const { selectionStart, selectionEnd, value } = node;
    node.focus();
    node.value = `${value.slice(0, selectionStart)}${text}${value.slice(selectionEnd)}`;
    node.selectionEnd = selectionStart + text.length;
  }
}
