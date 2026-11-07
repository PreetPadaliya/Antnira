import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import certImage from '../assets/WhyUs/quality-controll.jpg';
import './Pages.css';

const certificateImages = Object.values(
  import.meta.glob('../assets/AllCertificates/*.{png,jpg,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);

export default function Certificate() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Certifications &amp; Standards" breadcrumb="Corporate" />

      <section className="page-section">
        <div className="container">
          <div className="page-content-grid reveal">
            <div className="page-content-text">
              <span className="pill-badge">Verified Quality</span>
              <h2>Certifications That Verify Our Commitment to Quality</h2>
              <p>
                At ANTNIRA Group, we believe accountability and independent certifications give our global
                buyers complete peace of mind.
              </p>
              <p>
                From manufacturing workflow audits to fiber non-toxicity testing, our certifications ensure
                every garment delivered across borders meets international standards for quality,
                safety, and workmanship.
              </p>
              <div style={{ marginTop: '24px' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>Request Certificate Copies</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="page-content-image workshop-image-frame">
              <img src={certImage} alt="Quality Inspection & Certification" />
            </div>
          </div>

          <div className="certificate-gallery">
            {certificateImages.map((image, index) => (
              <div key={image} className="certificate-gallery-item reveal">
                <img
                  src={image}
                  alt={`Antnira certification document ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
