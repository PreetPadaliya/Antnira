import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpeg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <img className="footer-logo-image" src={logo} alt="Antnira" />
              <span className="nav-logo-tagline">Committed to Your Growth</span>
            </Link>
            <div className="footer-address">
              <p><strong>Factory:</strong> Laxmi Industrial, 117 to 121, Lindiad, Gujarat, India. 394110</p>
              <p><strong>Corporate Office:</strong> B/4, Krushna Complex, Hirabaug, Surat, Gujarat, India, 395006</p>
            </div>
            <div className="footer-contact-row">
              <Phone size={16} />
              <a href="tel:+918799608484">+91 8799608484</a>
            </div>
            <div className="footer-contact-row">
              <Mail size={16} />
              <a href="mailto:connect@antnira.com">connect@antnira.com</a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <div className="footer-links-grid">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/workshop">Workshops</Link>
              <Link to="/why-us">Why Us</Link>
              <Link to="/customers">Our Customers</Link>
              <Link to="/dealership">Dealership</Link>
              <Link to="/csr">CSR</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="footer-products">
            <h3>Our Products</h3>
            <Link to="/workshop">Hospital Scrubs & Medical Uniforms</Link>
            <Link to="/workshop">Corporate Wear & Workwear</Link>
            <Link to="/workshop">Custom Apparel & Private Label</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Antnira Group. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
