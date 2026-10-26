import React from 'react';
import { Sparkles, UserPlus, FolderKanban, TrendingUp, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="cp-how-section" id="how-it-works">
      <div className="cp-container">
        <div className="cp-section-badge">
          <Sparkles size={13} className="cp-badge-icon" />
          <span>HOW IT WORKS</span>
        </div>

        <div className="cp-section-header-center">
          <h2 className="cp-section-title">
            Get Up and Running in <span className="cp-purple-gradient-text">3 Simple Steps</span>
          </h2>
          <p className="cp-section-subtitle">
            Start managing your cases, teams, and clients more effectively today.
          </p>
        </div>

        <div className="cp-steps-grid">
          {/* Step 1 */}
          <div className="cp-step-card">
            <div className="cp-step-badge">
              <span className="cp-step-num">01</span>
              <div className="cp-step-icon-circle">
                <UserPlus size={20} className="cp-step-icon" />
              </div>
            </div>
            <h3 className="cp-step-title">Create Your Account</h3>
            <p className="cp-step-desc">
              Sign up in seconds. Set up your firm’s workspace, invite team attorneys with granular permissions, and configure custom notification rules.
            </p>
            <ul className="cp-step-bullets">
              <li><CheckCircle size={14} className="bullet-check" /> Instant setup, zero installation</li>
              <li><CheckCircle size={14} className="bullet-check" /> Role-based team access</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="cp-step-card cp-step-highlighted">
            <div className="cp-step-badge">
              <span className="cp-step-num">02</span>
              <div className="cp-step-icon-circle">
                <FolderKanban size={20} className="cp-step-icon" />
              </div>
            </div>
            <h3 className="cp-step-title">Add Cases & Attorneys</h3>
            <p className="cp-step-desc">
              Register active lawyers and log court cases. Record client NIC, case type, court hearing dates, uploaded documents, and private notes in one place.
            </p>
            <ul className="cp-step-bullets">
              <li><CheckCircle size={14} className="bullet-check" /> Secure document vault</li>
              <li><CheckCircle size={14} className="bullet-check" /> Smart hearing calendars</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="cp-step-card">
            <div className="cp-step-badge">
              <span className="cp-step-num">03</span>
              <div className="cp-step-icon-circle">
                <TrendingUp size={20} className="cp-step-icon" />
              </div>
            </div>
            <h3 className="cp-step-title">Automate, Track & Scale</h3>
            <p className="cp-step-desc">
              Assign lawyers to hearings with a click, generate professional PDF court briefs, track deadlines, and monitor your firm’s growth in real-time.
            </p>
            <ul className="cp-step-bullets">
              <li><CheckCircle size={14} className="bullet-check" /> Automated status updates</li>
              <li><CheckCircle size={14} className="bullet-check" /> 1-Click analytics export</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
