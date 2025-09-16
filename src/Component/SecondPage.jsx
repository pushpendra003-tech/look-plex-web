import React from 'react';
import './SecondPage.css';

import imgRectangle14 from '../assets/img_rectangle_14.png';
import imgRectangle15 from '../assets/img_rectangle_15.png';
import imgRectangle16 from '../assets/img_rectangle_16.png';
import imgRectangle17 from '../assets/img_rectangle_17.png';
import imgRectangle152 from '../assets/img_rectangle_152.png';
import imgRectangle153 from '../assets/img_rectangle_153.png';
import imgTopViewCosmet from '../assets/img_top_view_cosmet.png';
import imgNaturalCosmeti from '../assets/img_natural_cosmeti.png';

const SecondPage = () => {
  const services = [
    { id: 1, image: imgRectangle14, title: 'Waxing' },
    { id: 2, image: imgRectangle15, title: 'Facial' },
    { id: 3, image: imgRectangle16, title: 'Bleach/Detan' },
    { id: 4, image: imgRectangle17, title: 'Mani-Pedi' },
    { id: 5, image: imgRectangle153, title: 'Body Pampering' },
    { id: 6, image: imgRectangle152, title: 'Hair' }
  ];

  return (
    <section className="secondpage">
      <div className="secondpage-container">
        <h2 className="secondpage-title">
          Expert Salon Services at Your Doorstep
        </h2>

        <div className="services-wrapper">
          <div className="background-left">
            <img src={imgTopViewCosmet} alt="cosmetic background" />
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <img src={service.image} alt={service.title} />
                <p>{service.title}</p>
              </div>
            ))}
          </div>

          <div className="background-right">
            <img src={imgNaturalCosmeti} alt="natural cosmetic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
