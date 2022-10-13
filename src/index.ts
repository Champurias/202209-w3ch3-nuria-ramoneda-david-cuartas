import Component from "./components/Component/Component.js";
import Header from "./components/Header/Header.js";

const appContainer: HTMLElement = document.querySelector(".app");
const header = new Header(appContainer);
header.render();

/* Const parentElement = document.querySelector(".app");
const newDiv = new Component(parentElement as HTMLElement, "maria", "ul");
newDiv.render(); */

/* const parentElement = document.querySelector(".app");
const sectionS = new Component(
  parentElement as HTMLElement,
  "series",
  "section"
); */

/* Const newSectionSeries = new SectionSeries(
  sectionS.domElement,
  "Pending series",
  "You have 4 series pending to watch"
);
newSectionSeries.render(); */

/* Series.forEach((series)) {
  const serieCard = new cardSeries(pare, series);
}
 */
