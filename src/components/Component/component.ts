import type ComponentSignature from "./types.js";

class Component implements ComponentSignature {
  domElement: HTMLElement;

  constructor(
    private readonly parentElement: HTMLElement,
    className = "",
    tag = "div"
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render() {
    this.parentElement.appendChild(this.domElement);
  }
}
export default Component;
