import Image from "next/image";
import type { Game } from "@/data/games";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="group rounded-2xl bg-brand-surface overflow-hidden border border-brand-text/5 hover:border-brand-secondary/30 transition-all duration-300 shadow-lg hover:shadow-brand-secondary/10 flex flex-col h-full">
      <div className="relative aspect-video w-full overflow-hidden bg-brand-bg">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-brand-secondary/90 text-white text-xs font-semibold backdrop-blur-sm">
            {game.category}
          </span>
          {game.rating && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/70 text-white text-xs font-semibold backdrop-blur-sm">
              <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {game.rating}
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          {game.icon && (
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-brand-text/10 shadow-sm bg-brand-surface">
              <Image src={game.icon} alt={`${game.title} icon`} fill className="object-cover" />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-brand-text truncate group-hover:text-brand-secondary transition-colors">
              {game.title}
            </h3>
            <p className="text-xs text-brand-muted">Royal Peak Arena</p>
          </div>
        </div>

        <p className="text-brand-muted text-sm mb-6 flex-grow line-clamp-3">
          {game.description}
        </p>

        <div className="flex items-center justify-between mt-auto gap-3">
          <a
            href={game.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-secondary to-brand-accent text-white px-4 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm shadow-md shadow-brand-secondary/10"
          >
            <svg className="w-5 h-5 text-[#00E676]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM14.83 10.87L17.76 9.17C18.46 8.76 18.46 7.75 17.76 7.34L14.83 5.64L10.3 10.17L14.83 10.87ZM14.83 13.13L10.3 13.83L14.83 18.36L17.76 16.66C18.46 16.25 18.46 15.24 17.76 14.83L14.83 13.13ZM5.6 12L9.12 8.48L13.25 12L9.12 15.52L5.6 12Z" />
            </svg>
            Play on Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
