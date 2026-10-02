"use client";

import { useState } from "react";
import Link from "next/link";

export default function PrivacyPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("sirajahmad0181818@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy <span className="text-brand-secondary">Policy</span></h1>
          <p className="text-xl text-brand-muted">
            Effective Date: October 2, 2026
          </p>
        </div>

        <div className="glass-effect rounded-3xl p-8 md:p-12 space-y-10 text-brand-muted leading-relaxed">
          
          {/* ... existing sections ... */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text">Information Collection and Use</h2>
            <p>
              The Application collects information when you download and use it. This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your device's Internet Protocol address (e.g. IP address)</li>
              <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
              <li>The time spent on the Application</li>
              <li>The operating system you use on your mobile device</li>
            </ul>
            <p>
              The Application does not gather precise information about the location of your mobile device.
            </p>
            <p>
              The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of it in the following ways:
            </p>
            <div className="space-y-6 pl-5 border-l-2 border-brand-secondary/30 mt-6">
              <div>
                <h3 className="text-brand-secondary font-semibold bg-brand-secondary/10 px-3 py-1 rounded-md inline-block mb-2">Geolocation Services:</h3>
                <p className="text-brand-text/80">The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</p>
              </div>
              <div>
                <h3 className="text-brand-secondary font-semibold bg-brand-secondary/10 px-3 py-1 rounded-md inline-block mb-2">Analytics and Improvements:</h3>
                <p className="text-brand-text/80">Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</p>
              </div>
              <div>
                <h3 className="text-brand-secondary font-semibold bg-brand-secondary/10 px-3 py-1 rounded-md inline-block mb-2">Third-Party Services:</h3>
                <p className="text-brand-text/80">Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</p>
              </div>
            </div>
            <p className="mt-4">
              The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices, and marketing promotions.
            </p>
            <p>
              For a better experience, while using the Application, the Service Provider may require you to provide certain personally identifiable information. The information requested will be retained and used as described in this privacy policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text">Third Party Access</h2>
            <p>
              Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties as described below:
            </p>
            <p>
              Please note that the Application utilizes third-party services that have their own Privacy Policy:
            </p>
            <ul className="flex flex-wrap gap-3 mt-4">
              <li>
                <a href="https://support.google.com/admob/answer/6128543?hl=en" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-text/5 border border-brand-text/10 hover:bg-brand-text/10 hover:border-brand-secondary/50 text-brand-text transition-all" target="_blank" rel="noopener noreferrer">
                  AdMob
                </a>
              </li>
              <li>
                <a href="https://unity3d.com/legal/privacy-policy" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-text/5 border border-brand-text/10 hover:bg-brand-text/10 hover:border-brand-secondary/50 text-brand-text transition-all" target="_blank" rel="noopener noreferrer">
                  Unity
                </a>
              </li>
            </ul>
            <p className="mt-4">
              The Service Provider may disclose User Provided and Automatically Collected Information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>As required by law, such as to comply with a subpoena, or similar legal process;</li>
              <li>When they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
              <li>With trusted service providers who work on their behalf, do not have an independent use of the information, and have agreed to adhere to the privacy rules.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text">Opt-Out Rights</h2>
            <p>
              You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
            </p>
          </section>

          <section className="space-y-4 bg-brand-secondary/5 border border-brand-secondary/20 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-brand-text">Data Retention Policy</h2>
            <p>
              The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. To request deletion, contact:
            </p>
            <div className="pt-2">
              <button 
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-text/10 border border-brand-text/20 text-brand-text hover:bg-brand-text/20 transition-all font-medium"
              >
                {copied ? (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    sirajahmad0181818@gmail.com
                  </>
                )}
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text">Children</h2>
            <p>
              The Service Provider does not use the Application to knowingly solicit data from or market to children <span className="text-brand-text font-semibold bg-brand-text/10 px-2 py-0.5 rounded">under the age of 13</span>. The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. If a child under 13 has provided personal information, it will be immediately deleted. Parents may contact the Service Provider for necessary actions.
            </p>
            <div className="pt-2">
              <button 
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-text/10 border border-brand-text/20 text-brand-text hover:bg-brand-text/20 transition-all font-medium"
              >
                {copied ? (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    sirajahmad0181818@gmail.com
                  </>
                )}
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text">Security</h2>
            <p>
              The Service Provider safeguards the confidentiality of your information with physical, electronic, and procedural measures.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text">Changes</h2>
            <p>
              This Privacy Policy may be updated from time to time. The Service Provider will notify you of any changes by updating this page. Continued use signifies approval of all changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text">Your Consent</h2>
            <p>
              By using the Application, you consent to the processing of your information as set forth in this Privacy Policy now and as amended.
            </p>
          </section>

          <section className="space-y-6 bg-brand-surface border border-brand-secondary/30 rounded-2xl p-8 shadow-xl shadow-brand-secondary/5 mt-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-brand-text">Contact Us</h2>
            </div>
            <p className="leading-relaxed text-lg relative z-10">
              If you have any questions regarding privacy while using the Application, contact the Service Provider via email:
            </p>
            <div className="pt-2 relative z-10">
              <button 
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-accent text-brand-text hover:scale-105 hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-300 font-bold text-lg"
              >
                {copied ? (
                  <>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Email Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    sirajahmad0181818@gmail.com
                  </>
                )}
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
