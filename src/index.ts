import Component from "./components/Component/Component.js";
import Header from "./components/Header/Header.js";

const appContainer: HTMLElement = document.querySelector(".app");
const header = new Header(appContainer);
header.render();
