import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="cp-footer">
      <div className="cp-container">
        <div className="cp-footer-top">
          
          {/* Brand Info */}
          <div className="cp-footer-brand-col">
            <Link to="/" className="cp-brand">
              <div className="cp-logo-icon">
                <span className="cp-logo-letter">C</span>
              </div>
              <span className="cp-brand-name">CourtPilot</span>
            </Link>
            <p className="cp-footer-desc">
              The modern legal SaaS platform that streamlines case management, document organization, and attorney workflows — all in one place.
            </p>
            <div className="cp-footer-badge">
              <Shield size={14} className="cp-shield-icon" />
              <span>SOC2 Type II & HIPAA Compliant Security</span>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div className="cp-footer-links-col">
            <h4 className="cp-footer-col-title">Product</h4>
            <div className="cp-footer-links">
              <Link to="/features">FlowMaster (Cases)</Link>
              <Link to="/features">InsightPro (Analytics)</Link>
              <Link to="/features">TeamSync (Attorneys)</Link>
              <Link to="/pricing">Pricing Plans</Link>
              <Link to="/register">Free Trial</Link>
            </div>
          </div>

          {/* Links Column 2: Solutions */}
          <div className="cp-footer-links-col">
            <h4 className="cp-footer-col-title">Solutions</h4>
            <div className="cp-footer-links">
              <Link to="/features">Litigation Chambers</Link>
              <Link to="/features">Corporate Legal</Link>
              <Link to="/features">Solo Practitioners</Link>
              <Link to="/security">Security Architecture</Link>
              <Link to="/contact">Request Demo</Link>
            </div>
          </div>

          {/* Links Column 3: Company */}
          <div className="cp-footer-links-col">
            <h4 className="cp-footer-col-title">Company</h4>
            <div className="cp-footer-links">
              <Link to="/contact">About CourtPilot</Link>
              <Link to="/contact">Customer Support</Link>
              <Link to="/contact">Contact Sales</Link>
              <Link to="/security">Privacy Policy</Link>
              <Link to="/security">Terms of Service</Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="cp-footer-bottom">
          <p className="cp-copyright">
            © {new Date().getFullYear()} CourtPilot Technologies Inc. All rights reserved.
          </p>
          <div className="cp-legal-links">
            <span>Built for Modern Legal Practices</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
