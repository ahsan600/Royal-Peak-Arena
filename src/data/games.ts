export interface Game {
  id: string;
  title: string;
  category: string;
  description: string;
  rating: string;
  image: string;
  playStoreUrl: string;
}

export const games: Game[] = [];

export const getCategories = () => {
  return ["All", "Simulation", "Racing", "Driving", "Adventure", "Other"];
};
