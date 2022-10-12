interface SeriesDeclarated {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
  changeWhached: (score: number) => void;
}
export default SeriesDeclarated;
