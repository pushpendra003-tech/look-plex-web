import React, { useState } from "react";
import "./PackagesSection.css";
import portraitPerson from "../assets/img_portrait_person.png";
import rupeeIcon from "../assets/img_vector_gray_800.svg";
import decreaseIcon from "../assets/img_group_7.svg";
import increaseIcon from "../assets/img_group_6.svg";

const PackagesSection = () => {
  const [quantities, setQuantities] = useState({
    1: 0,
    2: 0,
    3: 1,
  });

  const packages = [
    {
      id: 1,
      title: "Wax Delight",
      description:
        "(Chocolate Wax - Underarms, Full Arms & Full Legs + Threading - Eyebrows & Upperlips)",
      price: "700.00",
      originalPrice: "1000 (30% off)",
      quantity: quantities?.[1],
    },
    {
      id: 2,
      title: "Clean n Smooth",
      description:
        "(Chocolate Wax - Underarms & Full Arms + Lotus Hydravitals Cleanup)",
      price: "994.00",
      originalPrice: "1420 (30% off)",
      quantity: quantities?.[2],
    },
    {
      id: 3,
      title: "Lookplex Glow",
      description:
        "(VLCC Instaglow Facial + Oxylife Bleach - Face & Neck + Threading - Eyebrows & Upperlips)",
      price: "896.00",
      originalPrice: "1280 (30% off)",
      quantity: quantities?.[3],
    },
  ];

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev?.[id] + change),
    }));
  };

  return (
    <section className="packages-section">
      <div className="container">
        <h2 className="section-titles">
          Discover Our Most Popular At-Home Salon Packages
        </h2>

        <div className="packages-wrapper">
          <div className="left-image">
            <img src={portraitPerson} alt="portrait person" />
          </div>

          <div className="packages-list">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-info">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.description}</p>
                </div>

                <div className="package-details">
                  <div className="price">
                    <img src={rupeeIcon} alt="rupee" />
                    <div>
                      <span className="current-price">{pkg.price}</span>
                      <span className="original-price">{pkg.originalPrice}</span>
                    </div>
                  </div>

                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(pkg.id, -1)}>
                      <img src={decreaseIcon} alt="decrease" />
                    </button>
                    <span>{pkg.quantity}</span>
                    <button onClick={() => handleQuantityChange(pkg.id, 1)}>
                      <img src={increaseIcon} alt="increase" />
                    </button>
                  </div>

                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
