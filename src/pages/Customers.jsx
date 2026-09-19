import { useScrollReveal } from '../hooks/useScrollReveal';
import PageBanner from '../components/PageBanner';
import Testimonials from '../components/Testimonials';
import StatsSection from '../components/StatsSection';
import ContactForm from '../components/ContactForm';
import './Pages.css';

const customerNames = [
  'USA Buyers', 'Canada Buyers', 'United Kingdom', 'United Arab Emirates',
  'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait',
  'Bahrain', 'Australia', 'New Zealand', 'European Markets',
];

export default function Customers() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Our Export Markets" breadcrumb="Export Markets" />

      <section className="page-section">
        <div className="container">
          <div className="page-text-section reveal">
            <span className="pill-badge">Global Reach</span>
            <h2>Building Trusted Partnerships Worldwide</h2>
            <p>
              Antnira Group serves international businesses and brands across North America, Europe, the
              Middle East, Africa, Asia-Pacific, and other growing export markets. We build long-term
              partnerships through quality, reliable service, and customer-focused manufacturing.
            </p>
          </div>

          <div className="customer-logos">
            {customerNames.map((name, index) => (
              <div key={index} className={`customer-logo-card reveal delay-${(index % 4) + 1}`}>
                <div className="customer-logo-placeholder">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <StatsSection />
      <ContactForm />
    </>
  );
}
