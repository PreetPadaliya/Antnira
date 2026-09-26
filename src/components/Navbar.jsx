import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.jpeg';
import './Navbar.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Company', path: '/about' },
  { label: 'Workshop', path: '/workshop' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Our Customers', path: '/customers' },
  { label: 'Dealership', path: '/dealership' },
  { label: 'CSR', path: '/csr' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  return (
    <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="nav-logo">
            <img className="nav-logo-image" src={logo} alt="Antnira" />
            <span className="nav-logo-tagline">Committed to Your Growth</span>
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta-wrapper">
            <Link to="/contact" className="nav-cta">
              Get in Touch <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            className={`nav-toggle ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      <div
        className={`nav-mobile-overlay ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      />
      <div className={`nav-mobile-drawer ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
        <Link to="/contact" className="nav-cta">
          Get in Touch <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
