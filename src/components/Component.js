export class Component {
  constructor(tag, className, props) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (props) Object.assign(node, props);
    this.node = node;
  }

  append(...components) {
    const getNode = (component) => {
      if (typeof component === 'string') return document.createTextNode(component);
      if (component instanceof Component) return component.node;
      return component;
    };
    this.node.append(...components.map((component) => getNode(component)));
  }
}
