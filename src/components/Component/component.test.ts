import Component from "./Component.js";

describe("Given a new instance of a component", () => {
  describe("When it's call with a class of 'main' and a tag of 'div'", () => {
    test("Then it will render in the DOM a div element with a classs of 'main", () => {
      const screen = document.querySelector("body");
      const className = "main";
      const tag = "div";
      const newElement = new Component(screen, className, tag);

      newElement.render();

      expect(newElement.domElement).not.toBeNull();
    });
  });
});
