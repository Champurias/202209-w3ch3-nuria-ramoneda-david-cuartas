import Header from "./Header";

describe("Given a new instance of Header", () => {
  describe("When its rendered", () => {
    test("Then it will render the title all 'My Series'", () => {
      const screen = document.createElement("div");

      const expectedResult = "My Series";

      const header = new Header(screen);
      header.render();
      const title = screen.querySelector("h1");

      expect(header.domElement).not.toBeNull();
      expect(title).not.toBeNull();
      expect(title.textContent).toBe(expectedResult);
    });
  });
});
