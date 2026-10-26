import React from 'react';
import { LayoutGrid, Sparkles, CheckCircle2 } from 'lucide-react';
import avatarAttorney from '../../assets/avatar_attorney.jpg';

const AboutSection = () => {
  return (
    <section className="cp-about-section" id="about-us">
      <div className="cp-container">
        
        {/* Section Pill Badge */}
        <div className="cp-section-badge">
          <LayoutGrid size={13} className="cp-badge-icon" />
          <span>ABOUT US</span>
        </div>

        {/* Top Split Row */}
        <div className="cp-about-top-row">
          <div className="cp-about-top-left">
            <h2 className="cp-about-title">
              Smart Solutions<br />
              Designed to <span className="cp-purple-accent">Drive<br />Your Success.</span>
            </h2>
          </div>

          <div className="cp-about-top-right">
            <p className="cp-about-intro-text">
              We empower businesses with powerful tools to streamline operations, boost productivity, and accelerate growth.
            </p>
          </div>
        </div>

        {/* Bottom Split Row */}
        <div className="cp-about-bottom-row">
          {/* Left Column: Dot Grid & Floating Testimonial */}
          <div className="cp-about-visual-col">
            {/* Dot Grid Matrix */}
            <div className="cp-dot-grid-pattern">
              {[...Array(35)].map((_, i) => (
                <span key={i} className="cp-grid-dot"></span>
              ))}
            </div>

            {/* Testimonial Quote Bubble */}
            <div className="cp-quote-pill-card">
              <img 
                src={avatarAttorney} 
                alt="Partner Attorney" 
                className="cp-quote-avatar"
              />
              <p className="cp-quote-text">
                Everything you need to manage and grow your business in one place.
              </p>
            </div>
          </div>

          {/* Right Column: Why CourtPilot? */}
          <div className="cp-about-details-col">
            <h3 className="cp-about-subheading">Why CourtPilot?</h3>
            <p className="cp-about-body-text">
              From task automation and team collaboration to advanced analytics and reporting, CourtPilot provides a complete suite of tools built for modern businesses. Focus on what matters most while we handle the rest.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
