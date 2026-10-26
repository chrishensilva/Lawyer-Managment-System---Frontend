import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, User, Sparkles, ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`cp-navbar-wrapper ${scrolled ? 'cp-navbar-scrolled' : ''}`}>
      <div className="cp-container cp-navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="cp-brand">
          <div className="cp-logo-icon">
            <div className="cp-logo-glow"></div>
            <span className="cp-logo-letter">C</span>
          </div>
          <span className="cp-brand-name">CourtPilot</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="cp-nav-links">
          <div className="cp-nav-item has-dropdown">
            <span className="cp-nav-link">Product <ChevronDown size={14} className="cp-chevron" /></span>
            <div className="cp-dropdown-menu">
              <Link to="/features" className="cp-dropdown-item">
                <div className="cp-drop-icon">⚡</div>
                <div>
                  <strong>CaseMaster</strong>
                  <p>Automate court cases & hearings</p>
                </div>
              </Link>
              <Link to="/features" className="cp-dropdown-item">
                <div className="cp-drop-icon">📊</div>
                <div>
                  <strong>InsightPro</strong>
                  <p>Real-time analytics & reports</p>
                </div>
              </Link>
              <Link to="/features" className="cp-dropdown-item">
                <div className="cp-drop-icon">👥</div>
                <div>
                  <strong>TeamSync</strong>
                  <p>Seamless lawyer collaboration</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="cp-nav-item has-dropdown">
            <span className="cp-nav-link">Solutions <ChevronDown size={14} className="cp-chevron" /></span>
            <div className="cp-dropdown-menu">
              <Link to="/features" className="cp-dropdown-item">
                <div className="cp-drop-icon">🏛️</div>
                <div>
                  <strong>For Law Firms</strong>
                  <p>Complete firm management suite</p>
                </div>
              </Link>
              <Link to="/features" className="cp-dropdown-item">
                <div className="cp-drop-icon">⚖️</div>
                <div>
                  <strong>For Solo Advocates</strong>
                  <p>Streamlined personal caseloads</p>
                </div>
              </Link>
            </div>
          </div>

          <Link to="/pricing" className="cp-nav-link">Pricing</Link>

          <div className="cp-nav-item has-dropdown">
            <span className="cp-nav-link">Resources <ChevronDown size={14} className="cp-chevron" /></span>
            <div className="cp-dropdown-menu">
              <Link to="/security" className="cp-dropdown-item">
                <div className="cp-drop-icon">🛡️</div>
                <div>
                  <strong>Security & Compliance</strong>
                  <p>End-to-end data protection</p>
                </div>
              </Link>
              <Link to="/contact" className="cp-dropdown-item">
                <div className="cp-drop-icon">💬</div>
                <div>
                  <strong>Help & Support</strong>
                  <p>24/7 dedicated legal assistance</p>
                </div>
              </Link>
            </div>
          </div>

          <Link to="/contact" className="cp-nav-link">Company</Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="cp-nav-actions">
          <Link to="/register" className="cp-btn cp-btn-white cp-btn-pill">
            Get Started
          </Link>
          <Link to="/login" className="cp-user-btn" title="Sign In">
            <User size={18} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="cp-mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="cp-mobile-drawer">
          <Link to="/features" onClick={() => setMobileMenuOpen(false)}>Product & Tools</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing Plans</Link>
          <Link to="/security" onClick={() => setMobileMenuOpen(false)}>Security & Trust</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact & Support</Link>
          <div className="cp-mobile-actions">
            <Link to="/login" className="cp-btn cp-btn-outline" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
            <Link to="/register" className="cp-btn cp-btn-primary" onClick={() => setMobileMenuOpen(false)}>Get Started Free</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
