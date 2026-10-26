import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="cp-final-cta-section">
      <div className="cp-container">
        <div className="cp-final-cta-box">
          <div className="cp-cta-glow-circle"></div>
          
          <div className="cp-final-badge">
            <Sparkles size={13} className="cp-badge-icon" />
            <span>ACCELERATE YOUR PRACTICE</span>
          </div>

          <h2 className="cp-final-title">
            Simplify. Automate.<br />
            <span className="cp-purple-gradient-text">Scale With CourtPilot.</span>
          </h2>
          
          <p className="cp-final-desc">
            Join thousands of modern attorneys and legal teams who manage their entire court caseload, team editors, and client documents seamlessly.
          </p>

          <div className="cp-final-buttons">
            <Link to="/register" className="cp-btn cp-btn-white cp-btn-pill cp-final-btn">
              <span>Start Free 14-Day Trial</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="cp-btn cp-btn-ghost cp-btn-pill">
              Schedule Live Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
