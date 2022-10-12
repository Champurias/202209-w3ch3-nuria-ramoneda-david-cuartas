import type SeriesDeclarated from "./types.js";

class Serie implements SeriesDeclarated {
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public score: number,
    public emmies: number,
    public watched: boolean = false
  ) {}

  changeWhached(score: number) {
    if (score > 5) {
      score = 5;
    }

    if (score > 0 && score < 5) {
      this.watched = true;
      this.score = score;
    }
  }
}

export default Serie;
