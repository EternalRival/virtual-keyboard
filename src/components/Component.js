export default class Component {
  constructor(tag, className, props, parent) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (props) Object.assign(el, props);
    if (parent) parent.append(el);
    this.el = el;
  }
}
