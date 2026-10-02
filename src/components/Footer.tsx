import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface/50 border-t border-brand-text/5 mt-auto">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-secondary to-brand-accent flex items-center justify-center">
                <span className="text-brand-text font-bold text-sm">RP</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Royal Peak Arena</span>
            </Link>
            <p className="text-brand-muted max-w-sm">
              Creating immersive mobile gaming experiences. We build games that entertain, challenge, and keep players coming back.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-brand-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-brand-muted hover:text-brand-secondary transition-colors">Home</Link></li>
              <li><Link href="/games" className="text-brand-muted hover:text-brand-secondary transition-colors">Games</Link></li>
              <li><Link href="/about" className="text-brand-muted hover:text-brand-secondary transition-colors">About</Link></li>
              <li><Link href="/privacy" className="text-brand-muted hover:text-brand-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-brand-muted hover:text-brand-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brand-text mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:sirajahmad0181818@gmail.com" className="text-brand-muted hover:text-brand-secondary transition-colors truncate block">
                  sirajahmad0181818@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-text transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM14.83 10.87L17.76 9.17C18.46 8.76 18.46 7.75 17.76 7.34L14.83 5.64L10.3 10.17L14.83 10.87ZM14.83 13.13L10.3 13.83L14.83 18.36L17.76 16.66C18.46 16.25 18.46 15.24 17.76 14.83L14.83 13.13ZM5.6 12L9.12 8.48L13.25 12L9.12 15.52L5.6 12Z"/>
                  </svg>
                  Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-text/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-sm text-center md:text-left">
            &copy; {currentYear} Royal Peak Arena. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-brand-muted hover:text-brand-text text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
