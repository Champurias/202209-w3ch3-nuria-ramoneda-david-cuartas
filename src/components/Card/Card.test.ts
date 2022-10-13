describe("Given the card component Card", () => {
  describe("When it rendered", () => {
    const screen = document.createElement("div");
    test("Then it should show the title 'Madmen' insde a 'h4'", () => {
      const expectedTitle = "Madmen";

      const serieTitle = screen.querySelector(".serie__title");

      expect(serieTitle.textContent).toBe(expectedTitle);
    });
  });
});
