import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <div className="profile-image"></div>
        <div className="profile-content">
          <h1>Hi, I'm Jeremy Gonzales <span className="wave-emoji">🤙🏽</span></h1>
          <h2><span className="laptop-emoji">👨🏽‍💻</span>B.S. in Computer Science</h2>
          <ul className="profile-details">
            <li><span className="details-emoji">💡</span>Fueled by inspiration</li>
            <li><span className="details-emoji">🎓</span>Graduated from Dominican University of California</li>
            <li><span className="details-emoji">🚶🏽‍♂️</span>In search of starting my software developer career</li>
            <li><span className="details-emoji">📫</span>gonzalesj112@gmail.com</li>
          </ul>
          <div className="social-links">
            <a href="https://github.com/alaJream" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/bearyme.ag/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/-jeremy-gonzales/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
