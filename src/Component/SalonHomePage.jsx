import './SalonHomePage.css';
import homeCart from "../assets/img_vector.svg";

const SalonHomePage = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="logo-look">LOOK</span>
          <span className="logo-plex">Plex</span>
          <div className="line"></div>
          <div className="sub-text">Salon at Home</div>
        </div>

        <div className="navbar-center">
          <a href="#home">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="navbar-right">
             <div className="right-image">
                        <img src={homeCart} alt="portrait person" />
                      </div>
          <button className="btn login-signup">Login/Sign Up</button>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          Always Make Room for a Little Beauty in Your Life
        </h1>

        <div className="hero-buttons">
          <button className="hero-btn primary">Book Appointment</button>
          <button className="hero-btn secondary">View Service Menu</button>
        </div>
      </div>
    </div>
  );
};

export default SalonHomePage;
