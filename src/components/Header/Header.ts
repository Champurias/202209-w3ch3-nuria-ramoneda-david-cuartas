import Component from "../Component/component.js";

class Header extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "main-header", "header");
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `
    <h1 class="main-title">My Seeries</h1>`;
  }
}

export default Header;
