export type HackerNewsItem = {
  id: string | number;
  title: string;
  score: string | number;
  time: string | number;
  descendants: string | number;
  url: string;
  by: string;
  type: string;
  kids?: number[];
};
