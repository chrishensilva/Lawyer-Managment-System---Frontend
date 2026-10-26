import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    { 
      question: "Is client and court case data secure?", 
      answer: "Yes, completely. Data is isolated per law firm account. Documents are encrypted at rest and in transit, user passwords utilize salted bcrypt hashing, and all sessions are protected by authenticated JWT over TLS." 
    },
    { 
      question: "Can multiple lawyers & clerks collaborate simultaneously?", 
      answer: "Yes. Administrators can create unlimited sub-accounts (editors) with granular role-based permissions (e.g. view cases, edit hearings, upload documents). All actions sync in real-time." 
    },
    { 
      question: "How does automated court date and hearing notification work?", 
      answer: "You can connect your firm's email or custom SMTP directly in your Account settings. CourtPilot automatically dispatches hearing reminders, assignment notices, and calendar alerts." 
    },
    { 
      question: "Can I export case summaries & reports to PDF or Excel?", 
      answer: "Yes. With a single click from the Generate Report dashboard, you can filter by case type, date range, or lawyer, and download branded PDF reports or CSV datasets." 
    },
    { 
      question: "How easy is it to migrate existing cases from spreadsheets?", 
      answer: "Extremely simple. You can register cases in seconds or use our quick bulk importer to migrate your clients, case numbers, and lawyer rosters." 
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="cp-faq-section" id="faq">
      <div className="cp-container">
        
        <div className="cp-section-badge">
          <HelpCircle size={13} className="cp-badge-icon" />
          <span>COMMON QUESTIONS</span>
        </div>

        <div className="cp-section-header-center">
          <h2 className="cp-section-title">
            Frequently Asked <span className="cp-purple-gradient-text">Questions</span>
          </h2>
          <p className="cp-section-subtitle">
            Everything you need to know about getting started with CourtPilot.
          </p>
        </div>

        <div className="cp-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                className={`cp-faq-card ${isOpen ? 'open' : ''}`} 
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="cp-faq-header">
                  <h3 className="cp-faq-question">{faq.question}</h3>
                  <div className="cp-faq-toggle-btn">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>
                {isOpen && (
                  <div className="cp-faq-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
