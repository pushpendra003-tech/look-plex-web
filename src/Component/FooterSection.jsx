import twitterIcon from '../assets/img_twitter.svg';
import facebookIcon from '../assets/img_button.svg';
import instagramIcon from '../assets/img_instagram.svg';
import TelegramIcon from '../assets/telegram.png';

import './FooterSection.css';

const FooterSection = () => {
  const footerLinks = [
    { id: 1, text: 'About Us', href: '#' },
    { id: 2, text: 'Privacy', href: '#' },
    { id: 3, text: 'Contact Us', href: '#' },
    { id: 4, text: 'Terms of Services', href: '#' },
    { id: 5, text: 'Refund & Cancellation', href: '#' }
  ];

  const socialIcons = [
    { id: 1, src: twitterIcon, alt: 'Twitter' },
    { id: 2, src: facebookIcon, alt: 'Facebook' },
    { id: 3, src: instagramIcon, alt: 'Instagram' },
    { id: 4, src: TelegramIcon, alt: 'Telegram' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-logo">
            <div className="footer-logo-row">
              <h1 className="footer-logo-title">LOOK</h1>
              <p className="footer-plex">Plex</p>
            </div>
            <div className="footer-extra-line"></div>
            <p className="footer-logo-subtitle">Salon at Home</p>
          </div>

          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.id} href={link.href} className="footer-link">
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2024 All Rights Reserved</p>
          <div className="footer-social">
            {socialIcons.map((icon) => (
              <button key={icon.id} className="footer-social-btn" aria-label={icon.alt}>
                <img src={icon.src} alt={icon.alt} className="footer-social-icon" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
