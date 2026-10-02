"use client";

import { useState } from "react";
import { games, getCategories } from "@/data/games";
import GameCard from "./GameCard";

export default function GameGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = getCategories();

  const filteredGames = games.filter((game) => {
    const matchesCategory = activeCategory === "All" || game.category === activeCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center glass-effect p-4 md:p-6 rounded-2xl">
        <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-brand-secondary text-brand-text shadow-md shadow-brand-secondary/20"
                    : "bg-brand-text/5 text-brand-muted hover:bg-brand-text/10 hover:text-brand-text"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-72 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-brand-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border border-brand-text/10 rounded-xl leading-5 bg-brand-surface text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm transition-all"
          />
        </div>
      </div>

      {/* Grid */}
      {games.length === 0 ? (
        <div className="text-center py-20 glass-effect rounded-2xl">
          <div className="w-16 h-16 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-brand-text mb-3">Games Coming Soon</h3>
          <p className="text-brand-muted max-w-md mx-auto text-lg">
            We are working hard on exciting new mobile gaming experiences. Stay tuned for our upcoming releases!
          </p>
        </div>
      ) : filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass-effect rounded-2xl">
          <svg className="mx-auto h-12 w-12 text-brand-muted mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-brand-text mb-2">No games found</h3>
          <p className="text-brand-muted">Try adjusting your search or category filters.</p>
          <button 
            onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
            className="mt-4 text-brand-secondary hover:text-brand-text transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
