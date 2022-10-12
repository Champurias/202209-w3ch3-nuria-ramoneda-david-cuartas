import Component from "./components/Component/component.js";

const parentElement = document.querySelector(".app");

const newDiv = new Component(parentElement as HTMLElement, "maria", "ul");

newDiv.render();
