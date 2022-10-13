import Component from "../Component/component.js";
import type SeriesDeclarated from "../../serie/types.js";
class SeriesCard extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly serie: SeriesDeclarated
  ) {
    super(parentElement, "li", "serie");
  }

  render() {
    super.render();

    const { name, poster, creator, year } = this.serie;
    this.domElement.innerHTML = `
      <img class="serie__poster"
      src="${poster}"
      alt="${name}"/>
      <h4 class="serie__title">${name}</h4>
      <p class="serie__info">${creator} ${year}</p>
      <ul class="score">
        <li class="score__star">
          <i class="icon--score fas fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="5/5"></i>
        </li>
      </ul>
      <i class="fas fa-times-circle icon--delete"></i>
    `;
  }
}
export default SeriesCard;
