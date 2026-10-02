export default function GooglePlayCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-brand-surface/40"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8 md:p-16 text-center border border-brand-secondary/20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Play Our Games</h2>
          <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
            Discover Royal Peak Arena games on Google Play. Join our growing community of players and start your next adventure today.
          </p>
          
          <a
            href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-text text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-text/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-text/20"
          >
            <svg className="w-8 h-8 text-[#00E676]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM14.83 10.87L17.76 9.17C18.46 8.76 18.46 7.75 17.76 7.34L14.83 5.64L10.3 10.17L14.83 10.87ZM14.83 13.13L10.3 13.83L14.83 18.36L17.76 16.66C18.46 16.25 18.46 15.24 17.76 14.83L14.83 13.13ZM5.6 12L9.12 8.48L13.25 12L9.12 15.52L5.6 12Z"/>
            </svg>
            Visit Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
