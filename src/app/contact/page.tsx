"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto fallback
    const mailtoUrl = `mailto:sirajahmad0181818@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact from Website"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Show the success state immediately so the user isn't left wondering if it worked
    // (We do this first because window.location.href can throw an exception if the OS has no mail handler)
    setStatus("submitted");
    
    try {
      // Attempt to open the mailto link
      window.location.href = mailtoUrl;
    } catch (err) {
      console.error("Mailto link failed to open:", err);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sirajahmad0181818@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact <span className="text-brand-secondary">Us</span></h1>
          <p className="text-xl text-brand-muted">
            Have a question, feedback, or business inquiry? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-brand-text mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-muted mb-1">Email</h4>
                    <button onClick={handleCopyEmail} className="text-left text-brand-text hover:text-brand-secondary transition-colors break-all">
                      sirajahmad0181818@gmail.com
                    </button>
                    {copied && <span className="text-brand-secondary text-xs ml-2">Copied!</span>}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-muted mb-1">Studio</h4>
                    <p className="text-brand-text">Royal Peak Arena</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Note about form */}
            <div className="p-4 bg-brand-secondary/10 border border-brand-secondary/20 rounded-xl">
              <p className="text-sm text-brand-muted">
                <strong>Note:</strong> Submitting the form will attempt to open your default email client to send the message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 glass-effect p-8 rounded-2xl relative overflow-hidden">
            {status === "submitted" ? (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center bg-brand-surface/95 backdrop-blur-sm animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-brand-secondary/20 text-brand-secondary rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-text mb-2">Message Prepared!</h3>
                <p className="text-brand-muted mb-8 max-w-md">
                  Your email client should have opened with your message ready to send. If nothing happened (because you don't have an email app setup), you can manually email us here:
                </p>
                <button 
                  onClick={handleCopyEmail}
                  className="px-6 py-3 rounded-xl bg-brand-secondary/10 border border-brand-secondary/30 text-brand-text hover:bg-brand-secondary/20 transition-all font-medium flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <svg className="w-5 h-5 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Email Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Email Address
                    </>
                  )}
                </button>
                
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm text-brand-muted hover:text-brand-text transition-colors underline decoration-brand-muted/30 underline-offset-4"
                >
                  Write another message
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-brand-muted">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-bg/50 border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-brand-muted">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-bg/50 border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-brand-muted">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-brand-bg/50 border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-brand-muted">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-brand-bg/50 border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all resize-y"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-secondary to-brand-accent text-brand-text font-bold py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-brand-secondary/20 flex justify-center items-center gap-2"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
