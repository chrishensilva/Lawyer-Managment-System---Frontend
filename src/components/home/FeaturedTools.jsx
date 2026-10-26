import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, ArrowRight, Hexagon, Info, Globe2 } from 'lucide-react';

import toolCloud from '../../assets/tool_cloud.jpg';
import toolChart from '../../assets/tool_chart.jpg';
import toolTeam from '../../assets/tool_team.jpg';

const FeaturedTools = () => {
  return (
    <section className="cp-featured-tools-section" id="featured-tools">
      <div className="cp-container">
        
        {/* Section Pill Badge */}
        <div className="cp-section-badge">
          <LayoutGrid size={13} className="cp-badge-icon" />
          <span>FEATURED TOOLS</span>
        </div>

        {/* Section Header */}
        <div className="cp-tools-header">
          <div className="cp-tools-header-left">
            <h2 className="cp-tools-title">
              Powerful Tools<br />
              Built for <span className="cp-purple-gradient-text">Your Business</span>
            </h2>
          </div>

          <div className="cp-tools-header-right">
            <p className="cp-tools-header-description">
              Explore our suite of powerful tools designed to simplify workflows, improve collaboration, and drive better results.
            </p>
            <Link to="/features" className="cp-btn cp-btn-black cp-btn-pill">
              View All Tools
            </Link>
          </div>
        </div>

        {/* 3 Showcase Feature Cards */}
        <div className="cp-tools-grid">
          
          {/* Card 1: FlowMaster / Case Automation */}
          <div className="cp-tool-card-wrapper">
            <div className="cp-tool-card cp-tool-card-lilac">
              <div className="cp-tool-img-container">
                <img src={toolCloud} alt="Workflow Automation 3D Cloud" className="cp-tool-img" />
              </div>
              <div className="cp-tool-badge-overlay">
                <Hexagon size={16} className="cp-tool-badge-icon" />
                <span className="cp-tool-name">FlowMaster</span>
              </div>
            </div>
            <div className="cp-tool-footer-caption">
              <span className="cp-caption-number">01</span>
              <span className="cp-caption-line">——</span>
              <span className="cp-caption-title">Workflow Automation</span>
            </div>
          </div>

          {/* Card 2: InsightPro / Advanced Analytics */}
          <div className="cp-tool-card-wrapper">
            <div className="cp-tool-card cp-tool-card-peach">
              <div className="cp-tool-img-container">
                <img src={toolChart} alt="Advanced Analytics 3D Chart" className="cp-tool-img" />
              </div>
              <div className="cp-tool-badge-overlay">
                <Info size={16} className="cp-tool-badge-icon" />
                <span className="cp-tool-name">InsightPro</span>
              </div>
            </div>
            <div className="cp-tool-footer-caption">
              <span className="cp-caption-number">02</span>
              <span className="cp-caption-line">——</span>
              <span className="cp-caption-title">Advanced Analytics</span>
            </div>
          </div>

          {/* Card 3: TeamSync / Team Collaboration */}
          <div className="cp-tool-card-wrapper">
            <div className="cp-tool-card cp-tool-card-periwinkle">
              <div className="cp-tool-img-container">
                <img src={toolTeam} alt="Team Collaboration 3D Spheres" className="cp-tool-img" />
              </div>
              <div className="cp-tool-badge-overlay">
                <Globe2 size={16} className="cp-tool-badge-icon" />
                <span className="cp-tool-name">TeamSync</span>
              </div>
            </div>
            <div className="cp-tool-footer-caption">
              <span className="cp-caption-number">03</span>
              <span className="cp-caption-line">——</span>
              <span className="cp-caption-title">Team Collaboration</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedTools;
