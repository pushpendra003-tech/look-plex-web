import React from "react";
import "./ThirdPage.css";

import img1 from "../assets/img_rectangle_112.png";
import img2 from "../assets/img_rectangle_114.png";
import img3 from "../assets/img_rectangle_117.png";
import arrowLeft from "../assets/img_arrow_left.svg";

function ThirdPage() {
  const promotionalCards = [
    {
      id: 1,
      image: img1,
      title: "Unlock the Beauty of Every Moment with Wax.",
      backgroundColor: "#ff9eaa",
      hasArrow: true,
      arrowPosition: "left",
    },
    {
      id: 2,
      image: img2,
      title: "Revitalize Your Radiance, One Pampering Session at a Time",
      backgroundColor: "#00783b",
      hasArrow: false,
    },
    {
      id: 3,
      image: img3,
      title: "Transforming Locks into Works of Art – Your Hair, Your Statement!",
      backgroundColor: "#7469b6",
      hasArrow: true,
      arrowPosition: "right",
    },
  ];

  return (
    <section className="third-page">
      <div className="third-container">
        {promotionalCards.map((card) => (
          <div
            key={card.id}
            className="promo-card"
            style={{ backgroundColor: card.backgroundColor }}
          >
            {card.hasArrow && card.arrowPosition === "left" && (
              <button className="arrow-btn left">
                <img src={arrowLeft} alt="arrow left" />
              </button>
            )}

            <img src={card.image} alt={card.title} className="promo-image" />

            <div className="promo-content">
              <p className="promo-title">{card.title}</p>
              <button className="promo-btn">Book Now</button>
            </div>

            {card.hasArrow && card.arrowPosition === "right" && (
              <button className="arrow-btn right">
                <img src={arrowLeft} className="rotate" alt="arrow right" />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThirdPage;
