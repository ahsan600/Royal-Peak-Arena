import Image from "next/image";
import Link from "next/link";
import { games } from "@/data/games";
import GameCard from "@/components/GameCard";
import Features from "@/components/Features";
import GooglePlayCTA from "@/components/GooglePlayCTA";

export default function Home() {
  const featuredGames = games.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-brand-bg">
          <Image
            src="/images/hero_bg.jpg"
            alt="Royal Peak Arena gaming background"
            fill
            className="object-cover opacity-15 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 via-brand-bg/80 to-brand-bg"></div>
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-secondary/30 bg-brand-surface/50 backdrop-blur-md">
            <span className="text-brand-secondary font-semibold text-sm tracking-wide uppercase">
              Premium Mobile Gaming Studio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text mb-6 tracking-tight leading-tight">
            Building Games That <br className="hidden md:block" />
            <span className="text-gradient">Take You Further</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            Royal Peak Arena creates immersive mobile gaming experiences designed to entertain, challenge, and keep players coming back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/games"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-secondary hover:bg-brand-secondary/90 text-brand-text font-bold text-lg transition-all shadow-lg shadow-brand-secondary/25 hover:shadow-brand-secondary/40 hover:-translate-y-1"
            >
              Explore Our Games
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-brand-text text-brand-text bg-transparent font-bold text-lg hover:bg-brand-text hover:text-white transition-all hover:-translate-y-1"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 bg-brand-bg">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-brand-secondary">Games</span></h2>
              <p className="text-brand-muted text-lg max-w-2xl">
                Explore our collection of mobile gaming experiences.
              </p>
            </div>
            <Link 
              href="/games"
              className="flex items-center gap-2 text-brand-secondary hover:text-brand-text font-medium transition-colors"
            >
              View all games
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {featuredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass-effect rounded-2xl border border-brand-text/5">
              <h3 className="text-2xl font-bold text-brand-text mb-3">New Games Coming Soon</h3>
              <p className="text-brand-muted max-w-md mx-auto">
                We are currently developing our next generation of mobile games. 
                Follow us on Google Play to be the first to know when they drop!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Google Play CTA Section */}
      <GooglePlayCTA />
    </>
  );
}
