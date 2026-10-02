import { Metadata } from "next";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "About Us | Royal Peak Arena",
  description: "Learn more about Royal Peak Arena, a mobile game development and publishing studio dedicated to creating immersive gaming experiences.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-brand-secondary">Royal Peak Arena</span></h1>
          <p className="text-xl text-brand-muted leading-relaxed">
            At Royal Peak Arena, we build mobile games with a focus on immersive gameplay, accessible experiences, and high-quality presentation.
          </p>
        </div>

        <div className="glass-effect rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-text">Our Mission</h2>
              <div className="space-y-4 text-brand-muted text-lg">
                <p>
                  We are a passionate mobile game development and publishing studio focused on bringing high-quality entertainment to your fingertips.
                </p>
                <p>
                  Our goal is to push the boundaries of mobile gaming by combining stunning visuals with intuitive controls and deeply engaging mechanics. We believe that a great game should be easy to pick up but difficult to put down.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-text/5 border border-brand-text/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-brand-text">Our Core Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-secondary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-muted">Simulation & Driving Experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-secondary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-muted">Performance & Optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-secondary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-muted">Player-first Game Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-secondary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-muted">Regular Content Updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Features />
    </div>
  );
}
