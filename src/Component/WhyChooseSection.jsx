import React from 'react';
import './WhyChooseSection.css';

import ellipse1 from '../assets/img_ellipse_58.png';
import ellipse2 from '../assets/img_ellipse_60.png';
import ellipse3 from '../assets/img_ellipse_61.png';
import ellipse4 from '../assets/img_ellipse_59.png';
import icon1 from '../assets/img_loyalty_customer.svg';
import icon2 from '../assets/img_vector_white_a700_28x32.svg';
import icon3 from '../assets/img_vector_white_a700_28x26.svg';
import icon4 from '../assets/img_vector_white_a700_22x28.svg';
import beautyImg from '../assets/img_beauty_concept.png';

const WhyChooseSection = () => {
  const features = [
    { id: 1, icon: icon1, title: 'Trusted Professionals' },
    { id: 2, icon: icon3, title: 'Branded Products' },
    { id: 3, icon: icon2, title: 'Satisfaction Guaranteed' },
    { id: 4, icon: icon4, title: 'Reasonable Price' }
  ];

  return (
    <section className="why-choose-section">
      {/* Decorative Circles */}
      <div className="circles-left">
        <img src={ellipse1} alt="decorative" className="ellipse1" />
        <img src={ellipse2} alt="decorative" className="ellipse2" />
      </div>

      <div className="circles-right">
        <img src={ellipse3} alt="decorative" className="ellipse3" />
        <img src={ellipse4} alt="decorative" className="ellipse4" />
      </div>

      <div className="why-content">
        <h2 className="sections-title">Why Should Choose Lookplex?</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <p className="feature-title">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-background">
          <h3 className="cta-text">
            Unlock the Beauty of Every Moment with Wax.
          </h3>
          <button className="cta-button">Book Now</button>
        </div>
        <div className="cta-image">
          <img src={beautyImg} alt="beauty concept" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
