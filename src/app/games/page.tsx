import { Metadata } from "next";
import GameGrid from "@/components/GameGrid";

export const metadata: Metadata = {
  title: "Games | Royal Peak Arena",
  description: "Explore our collection of immersive mobile games. Discover simulation, racing, adventure, and driving experiences by Royal Peak Arena.",
};

export default function GamesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-brand-secondary">Games</span></h1>
          <p className="text-xl text-brand-muted">
            Explore our diverse collection of high-quality mobile games. Discover your next favorite experience.
          </p>
        </div>
        
        <GameGrid />
      </div>
    </div>
  );
}
