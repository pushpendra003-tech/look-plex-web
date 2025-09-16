import React from "react";
import "./PopularPackagesSection.css";

const PopularPackagesSection = () => {
  return (
    <section className="popular-packages-section">
      <div className="categories-container">
        <button className="category-button active">Packages</button>
        <button className="category-button">Waxing</button>
        <button className="category-button">Face</button>
        <button className="category-button">Body</button>
        <button className="category-button">Hair</button>
      </div>

      <h2 className="popular-packages-title">Our Popular Packages</h2>

      <div className="packages-circles">
        <div className="package-circle">Steal Deal</div>
        <div className="package-circle">Cleanup + Waxing Combo</div>
        <div className="package-circle">Facial + Waxing Combo</div>
        <div className="package-circle">Premium Packages</div>
        <div className="package-circle">Pre-Bridal Packages</div>
      </div>
    </section>
  );
};

export default PopularPackagesSection;
