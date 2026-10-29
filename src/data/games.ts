export interface Game {
  id: string;
  title: string;
  category: string;
  description: string;
  rating: string;
  image: string;
  icon?: string;
  screenshots?: string[];
  playStoreUrl: string;
  downloads?: string;
}

export const games: Game[] = [
  {
    id: "modern-truck-simulator-offroad",
    title: "Modern Truck Simulator Offroad",
    category: "Simulation",
    description:
      "An exciting truck driving experience! Complete cargo transport missions, navigate challenging off-road routes and difficult terrain, unlock multiple vehicles, and master realistic truck physics.",
    rating: "4.8",
    image: "/images/truck_simulator_cover.jpg",
    icon: "/images/truck_simulator_icon.png",
    screenshots: [
      "/images/truck_simulator_cover.jpg",
      "/images/truck_simulator_screen1.jpg",
      "/images/truck_simulator_screen2.jpg",
      "/images/truck_simulator_screen3.jpg",
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.rpa.truck.simulator",
  },
];

export const getCategories = () => {
  return ["All", "Simulation", "Racing", "Driving", "Adventure", "Other"];
};
