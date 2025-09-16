import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "Competition Research",
      answer: "Aliquam erat odio, fringilla at porta a, vehicula ultricies est. Aliquam maximus turpis in dignissim pellentesque. Ut dolor quam, aliquam eget bibendum nec, luctus non metus. Morbi convallis imperdiet dolor id porttitor.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed finibus faucibus congue. Interdum et malesuada fames ac ante ipsum."
    },
    {
      id: 1,
      question: "User Definition & Profiling",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      question: "Performance Infrastructure: Analytics & KPIs",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? -1 : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          {/* FAQ Badge */}
          <div className="faq-badge">F.A.Q.</div>

          {/* Section Title */}
          <h2 className="faq-title">Frequently Asked Questions</h2>

          {/* Section Subtitle */}
          <p className="faq-subtitle">
            Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. 
            Quisque sit amet nisi erat.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-item">
              {faq.id === openFAQ ? (
                <div className="faq-expanded">
                  <button 
                    onClick={() => toggleFAQ(faq.id)} 
                    className="faq-question expanded"
                  >
                    {faq.question}
                  </button>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ) : (
                <button 
                  onClick={() => toggleFAQ(faq.id)} 
                  className="faq-question collapsed"
                >
                  {faq.question}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
