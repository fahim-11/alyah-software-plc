import React, { useState } from 'react';
import '../css/Footer.css';  // Update the path according to where the CSS file is located

import logo from '/home/fahim/Alyah/frontend/src/asserts/images/alyah.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTiktok, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAboutPopupOpen, setIsAboutPopupOpen] = useState(false);
  const [isStaffPopupOpen, setIsStaffPopupOpen] = useState(false); 

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleAboutPopup = () => {
    setIsAboutPopupOpen(!isAboutPopupOpen);
  };

  const toggleStaffPopup = () => {
    setIsStaffPopupOpen(!isStaffPopupOpen); 
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="social-links">
              <div className="logo">
                <img src={logo} alt="Alyah Software" />
              </div>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100065420744158" className="social-icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.linkedin.com/in/henok-alelign-a26ab61a6/" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.tiktok.com/@alyahsoftware" className="social-icon">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="https://t.me/alyahapps" className="social-icon">
                  <FontAwesomeIcon icon={faTelegramPlane} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <h4>Company</h4>
            <ul>
              <li><a href="#" onClick={toggleAboutPopup}>About</a></li>
              <li><a href="#" onClick={togglePopup}>Contact</a></li>
              <li><a href="#" onClick={toggleStaffPopup}>Our Staff</a></li> 
              <li><a href="#">Advertise</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Tech News</h4>
            <ul>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#gadget">Gadget</a></li>
              <li><a href="#software">Software</a></li>
              <li><a href="#games">Games</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Extra Crunch Terms</a></li>
              <li><a href="#">Code of Conduct</a></li>
            </ul>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-icon" onClick={togglePopup}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h1>Contact us</h1>
            <div>
      <p>
        <i className="fas fa-map-marker-alt"></i> Main Office: Bahir Dar, Ethiopia
      </p>
      <p>
        <i className="fas fa-phone-alt"></i> Branch Office: +251909638490 <br />+251918174003
      </p>
      <p>
        <i className="fas fa-envelope"></i> Email: <a href="mailto:alyahdream@gmail.com">alyahdream@gmail.com</a>
      </p>
      <p>
        <i className="fas fa-globe"></i> Website: <a href="http://www.alyahsoftware.com" target="_blank" rel="noopener noreferrer">www.alyahsoftware.com</a>
      </p>
      <div>
        <h3>Find Us Here</h3>
        <iframe
          title="Bahir Dar Lake Tana Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d977.0974753247818!2d37.383943253976945!3d11.595526673877425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644cfa080dd70e1%3A0x825f8e7cd12b3f!2sAlyah%20Software!5e0!3m2!1sen!2set!4v1724939889499!5m2!1sen!2set"
          width="500"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
          </div>
        </div>
      )}
      {isAboutPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-icon" onClick={toggleAboutPopup}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="about-section">
              <img src="https://scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/431182987_789122773278407_4134408889909139795_n.jpg?stp=dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=arXN0O5Z1yQQ7kNvgEGdiWT&_nc_ht=scontent.fadd2-1.fna&_nc_gid=A85PvnBIq7Dv6w6aTIHNBlG&oh=00_AYAENgyjn-FWHmSh4PzxNwmKxlMTyMFC9wWLo_ugfnpBdA&oe=66E2FC70" alt="Mobile App Development" className="service-image" />
              <h1>Our Services</h1>
              <div className="service-category">
                <h4>Web App Development</h4>
                <ul>
                  <li>PHP Development</li>
                  <li>ASP.Net Development</li>
                  <li>Full Stack Development</li>
                  <li>Python Development</li>
                  <li>Java Development</li>
                </ul>
              </div>
              <div className="service-category">
                <h4>Mobile App Development</h4>
                <ul>
                  <li>iOS App Development</li>
                  <li>Android App Development</li>
                  <li>Hybrid App Development</li>
                </ul>
              </div>
              <div className="service-category">
                <h4>Point of Sale (POS)</h4>
                <ul>
                  <li>Clover PoS Solutions</li>
                  <li>VeriFone PoS Solutions</li>
                  <li>Ingenico PoS Solutions</li>
                  <li>Restaurant POS</li>
                  <li>Retail POS</li>
                  <li>KIOSK software development</li>
                </ul>
              </div>
              <div className="service-category">
                <h4>IoT App Development</h4>
                <ul>
                  <li>AI Technology</li>
                  <li>Wearable Technology</li>
                  <li>Voice Enabled Technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {isStaffPopupOpen && (  
        <div className="popup">
          <div className="popup-content">
            <button className="close-icon" onClick={toggleStaffPopup}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div>
              <h1>Our Team</h1>
              <p>To achieve our goals, Alyah brings together a network of experienced professionals. In the area of Software development, business management training, and coaching to develop efficient, effective, and practical solutions to everyday challenges in our community.</p>
            </div>
          </div>
        </div>
      )}

      <div className="copyright">
        <div className="container">
          <p>&copy; 2024 Alyah Software PLC.</p>
          <p>Developed By Adem Oumer</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;