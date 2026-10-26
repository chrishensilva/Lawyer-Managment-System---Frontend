import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <section className="cp-pricing-section" id="pricing">
      <div className="cp-container">
        
        <div className="cp-section-badge">
          <Zap size={13} className="cp-badge-icon" />
          <span>FLEXIBLE PLANS</span>
        </div>

        <div className="cp-section-header-center">
          <h2 className="cp-section-title">
            Simple, Transparent <span className="cp-purple-gradient-text">Pricing</span>
          </h2>
          <p className="cp-section-subtitle">
            Scale your legal practice with flexible pricing. No hidden fees, cancel anytime.
          </p>

          {/* Billing Switch */}
          <div className="cp-billing-toggle-container">
            <span className={`cp-toggle-label ${!annualBilling ? 'active' : ''}`}>Monthly</span>
            <button 
              type="button" 
              className={`cp-switch-track ${annualBilling ? 'active' : ''}`}
              onClick={() => setAnnualBilling(!annualBilling)}
              aria-label="Toggle annual billing"
            >
              <div className="cp-switch-thumb"></div>
            </button>
            <span className={`cp-toggle-label ${annualBilling ? 'active' : ''}`}>
              Annually <span className="cp-discount-pill">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="cp-pricing-cards-grid">
          
          {/* Starter Plan */}
          <div className="cp-price-card">
            <div className="cp-tier-header">
              <h3 className="cp-tier-name">Starter</h3>
              <p className="cp-tier-for">Ideal for solo practitioners & independent advocates</p>
            </div>
            
            <div className="cp-tier-price-box">
              <span className="cp-price-currency">$</span>
              <span className="cp-price-amount">{annualBilling ? '0' : '0'}</span>
              <span className="cp-price-period">/ month</span>
            </div>

            <Link to="/register" className="cp-btn cp-btn-outline-dark cp-btn-full">
              Get Started Free
            </Link>

            <div className="cp-tier-divider"></div>

            <div className="cp-tier-features-list">
              <span className="cp-features-heading">Included features:</span>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> 1 Administrator Account</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Up to 50 active cases</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Client & lawyer registry</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Basic hearing calendar</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Cloud document storage (1GB)</div>
            </div>
          </div>

          {/* Professional Plan (Emphasized) */}
          <div className="cp-price-card cp-price-card-popular">
            <div className="cp-popular-ribbon">
              <Sparkles size={13} />
              <span>Most Popular</span>
            </div>

            <div className="cp-tier-header">
              <h3 className="cp-tier-name">Professional</h3>
              <p className="cp-tier-for">For growing law practices & legal consulting teams</p>
            </div>
            
            <div className="cp-tier-price-box">
              <span className="cp-price-currency">$</span>
              <span className="cp-price-amount">{annualBilling ? '39' : '49'}</span>
              <span className="cp-price-period">/ month</span>
            </div>

            <Link to="/register" className="cp-btn cp-btn-gradient cp-btn-full">
              Start 14-Day Free Trial
            </Link>

            <div className="cp-tier-divider"></div>

            <div className="cp-tier-features-list">
              <span className="cp-features-heading">Everything in Starter, plus:</span>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> <strong>Unlimited</strong> active cases & clients</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> <strong>Unlimited</strong> team editors with roles</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Automated lawyer-case allocation</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Custom SMTP email notifications</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> 1-Click PDF court reports generation</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Priority email & chat support</div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="cp-price-card">
            <div className="cp-tier-header">
              <h3 className="cp-tier-name">Enterprise</h3>
              <p className="cp-tier-for">For large legal departments & multi-branch chambers</p>
            </div>
            
            <div className="cp-tier-price-box">
              <span className="cp-price-currency">$</span>
              <span className="cp-price-amount">{annualBilling ? '119' : '149'}</span>
              <span className="cp-price-period">/ month</span>
            </div>

            <Link to="/contact" className="cp-btn cp-btn-outline-dark cp-btn-full">
              Contact Enterprise Sales
            </Link>

            <div className="cp-tier-divider"></div>

            <div className="cp-tier-features-list">
              <span className="cp-features-heading">Everything in Pro, plus:</span>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Unlimited multi-branch workspaces</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Dedicated account manager</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Custom API integrations & exports</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> 99.99% SLA uptime guarantee</div>
              <div className="cp-feature-item"><Check size={16} className="cp-check-icon" /> Advanced security audit logs</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;
