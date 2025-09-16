import React, { useState } from "react";

import arrowLeft from "../assets/img_arrow_left.svg";
import maskGroup from "../assets/img_mask_group.png";

import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Working with NeuForm has been a game-changer for our organization. Their tailored approach to our unique challenges and their deep understanding of industry dynamics have helped us navigate complexities and achieve remarkable results.",
      name: "John Smith",
      position: "CEO, Runs Enterprises",
      avatar: null,
    },
    {
      id: 2,
      text: "NeuForm's strategic guidance has been invaluable in helping us navigate through a period of rapid change. Their ability to assess complex situations and offer practical solutions has been key to our success.",
      name: "Jane Cooper",
      position: "CEO, Runs Enterprises",
      avatar: null,
    },
    {
      id: 3,
      text: "NeuForm's strategic guidance has been invaluable in helping us navigate through a period of rapid change. Their ability to assess complex situations and offer practical solutions has been key to our success.",
      name: "John Smith",
      position: "CEO, Runs Enterprises",
      avatar: maskGroup, // 
    },
  ];

  const handlePrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="title">Clients Testimonials</h2>
        <p className="subtitle">
          Hear people say and reveal our finest services
        </p>
      </div>

      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="author">
              <div className="avatar">
                {testimonial.avatar && (
                  <img src={testimonial.avatar} alt={testimonial.name} />
                )}
              </div>
              <div>
                <p className="author-name">{testimonial.name}</p>
                <p className="author-position">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrevious} className="nav-button">
          <img src={arrowLeft} alt="previous" />
        </button>
        <button onClick={handleNext} className="nav-button rotate">
          <img src={arrowLeft} alt="next" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
