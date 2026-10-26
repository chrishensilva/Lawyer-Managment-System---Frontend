import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';

const testimonialsData = [
  {
    quote: "CourtPilot completely eliminated our spreadsheet chaos. We now assign lawyers in seconds, log client files directly, and haven't missed a single hearing date.",
    author: "Elena Rostova",
    role: "Senior Partner, Apex Legal Chambers",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5
  },
  {
    quote: "The automated email notices and hearing reminders saved our firm hours every week. The 3D analytics dashboard gives our managing partners instant clarity.",
    author: "Marcus Vance",
    role: "Managing Attorney, Vance & Sterling LLP",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5
  },
  {
    quote: "The role-based permission controls and cloud Firestore document storage give us complete security peace of mind. Our entire practice runs 10x smoother.",
    author: "Sophia Chen",
    role: "Litigation Director, Metro Legal Counsel",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="cp-testimonials-section" id="testimonials">
      <div className="cp-container">
        <div className="cp-section-badge">
          <MessageSquare size={13} className="cp-badge-icon" />
          <span>TESTIMONIALS</span>
        </div>

        <div className="cp-section-header-center">
          <h2 className="cp-section-title">
            Trusted by Over <span className="cp-purple-gradient-text">12,500+ Legal Professionals</span>
          </h2>
          <p className="cp-section-subtitle">
            See how modern legal practices and law firms scale their daily operations with CourtPilot.
          </p>
        </div>

        <div className="cp-testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div key={index} className="cp-testimonial-card">
              <div className="cp-card-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#FACC15" color="#FACC15" />
                ))}
              </div>

              <p className="cp-testimonial-quote">"{item.quote}"</p>

              <div className="cp-testimonial-author-box">
                <img src={item.avatar} alt={item.author} className="cp-author-avatar" />
                <div>
                  <h4 className="cp-author-name">{item.author}</h4>
                  <p className="cp-author-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
