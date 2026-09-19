import heroBuilding from '../assets/heroBuilding.png';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-top reveal">
          <div className="hero-top-left">
            <span className="pill-badge">Committed to Your Growth</span>
            <h1>Antnira Group: Building Growth Through Manufacturing</h1>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-image reveal-left">
            <img src={heroBuilding} alt="Antnira Group building" />
          </div>
          <div className="hero-text reveal-right">
            <p>
              ANTNIRA Group is an Indian investment company dedicated to building and growing manufacturing businesses across diverse industries. Backed by a strong dealer network and a global vision, we partner with companies that share our commitment to innovation, quality, and long-term value.
            </p>
            <p>
              Our core business focuses on apparel export, OEM and ODM manufacturing, private label production, and custom apparel for organizations worldwide. As we expand internationally, our focus remains the same: building trusted partnerships and creating sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
