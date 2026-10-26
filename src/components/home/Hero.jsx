import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Sparkles, Star, X } from 'lucide-react';

import toolCloud from '../../assets/tool_cloud.jpg';
import heroCubes from '../../assets/hero_cubes.jpg';
import heroPie from '../../assets/hero_piechart.jpg';

const Hero = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <section className="cp-hero-section">
      {/* Background Radial Glow */}
      <div className="cp-hero-glow-bg"></div>

      <div className="cp-container cp-hero-container">
        {/* Top Split: Left Headline & Right Pitch */}
        <div className="cp-hero-top-row">
          {/* Left Column: Badge & Title */}
          <div className="cp-hero-left">
            <div className="cp-hero-pill-badge">
              <span className="cp-badge-sparkle">✨</span>
              <span>All-in-One SaaS Platform</span>
              <span className="cp-badge-rocket">🚀</span>
            </div>

            <h1 className="cp-hero-title">
              Simplify.<br />
              Automate.<br />
              <span className="cp-purple-gradient-text">Scale Your<br />Business.</span><br />
              All in One Platform.
            </h1>
          </div>

          {/* Right Column: Description & CTAs */}
          <div className="cp-hero-right">
            <p className="cp-hero-description">
              CourtPilot helps teams automate workflows, collaborate in real-time, and make data-driven decisions — faster than ever.
            </p>

            <div className="cp-hero-cta-group">
              <Link to="/register" className="cp-btn cp-btn-white cp-btn-pill cp-hero-primary-btn">
                Start Free Trial
              </Link>
              <button 
                type="button" 
                className="cp-hero-watch-demo" 
                onClick={() => setShowDemoModal(true)}
              >
                <span>Watch Demo</span>
                <span className="cp-play-circle">
                  <Play size={13} fill="currentColor" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Split: Social Proof & 3 Floating 3D Cards */}
        <div className="cp-hero-bottom-row">
          {/* Left Social Proof */}
          <div className="cp-hero-social-proof">
            <div className="cp-avatar-stack">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80" 
                alt="Lawyer user" 
                className="cp-proof-avatar"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80" 
                alt="Attorney user" 
                className="cp-proof-avatar"
              />
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80" 
                alt="Advocate user" 
                className="cp-proof-avatar"
              />
            </div>

            <div className="cp-proof-info">
              <div className="cp-star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#FACC15" color="#FACC15" />
                ))}
              </div>
              <span className="cp-proof-count">12,540+ happy users</span>
            </div>

            <a href="#about-us" className="cp-explore-link">
              <span>Explore Platform</span>
              <ArrowRight size={14} className="cp-arrow-anim" />
            </a>
          </div>

          {/* Right Floating 3D Pastel Cards */}
          <div className="cp-hero-floating-cards">
            <div className="cp-floating-card cp-card-cloud" title="Cloud Workflow Automation">
              <img src={toolCloud} alt="3D Cloud" className="cp-floating-img" />
            </div>

            <div className="cp-floating-card cp-card-cubes" title="Modular Legal Modules">
              <img src={heroCubes} alt="3D Cubes" className="cp-floating-img" />
            </div>

            <div className="cp-floating-card cp-card-pie" title="Precision Analytics">
              <img src={heroPie} alt="3D Analytics Pie" className="cp-floating-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="cp-modal-backdrop" onClick={() => setShowDemoModal(false)}>
          <div className="cp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cp-modal-close" onClick={() => setShowDemoModal(false)}>
              <X size={20} />
            </button>
            <div className="cp-video-frame">
              <div className="cp-mock-player">
                <div className="cp-player-header">
                  <div className="cp-mac-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="cp-player-title">CourtPilot Platform Walkthrough (2 Min)</span>
                </div>
                <div className="cp-player-body">
                  <div className="cp-demo-play-btn">
                    <Play size={36} fill="#ffffff" color="#ffffff" />
                  </div>
                  <h3>Experience Court Management at Speed</h3>
                  <p>Streamline case registration, lawyer allocations, client billing, and court hearing dates.</p>
                  <Link to="/register" className="cp-btn cp-btn-white cp-btn-pill">
                    Try Interactive Demo Live
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
