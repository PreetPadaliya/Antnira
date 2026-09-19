import { useScrollReveal } from '../hooks/useScrollReveal';
import PageBanner from '../components/PageBanner';
import CSRSection from '../components/CSRSection';
import ContactForm from '../components/ContactForm';
import './Pages.css';

const initiatives = [
  {
    title: 'Education Support',
    desc: 'Providing educational resources and scholarships to underprivileged children in local communities.',
    bg: 'linear-gradient(135deg, #4a7c59 0%, #2d5a3d 100%)',
  },
  {
    title: 'Healthcare Camps',
    desc: 'Organizing free healthcare camps and medical assistance programs for rural areas.',
    bg: 'linear-gradient(135deg, #5b7b9d 0%, #3d5a7b 100%)',
  },
  {
    title: 'Environmental Conservation',
    desc: 'Tree plantation drives and eco-friendly manufacturing practices to reduce our carbon footprint.',
    bg: 'linear-gradient(135deg, #7b6b5b 0%, #5b4b3b 100%)',
  },
  {
    title: 'Community Development',
    desc: 'Infrastructure development and skill-building programs for local communities.',
    bg: 'linear-gradient(135deg, #6b7b8b 0%, #4b5b6b 100%)',
  },
  {
    title: 'Food Distribution',
    desc: 'Regular food distribution drives reaching hundreds of families in need.',
    bg: 'linear-gradient(135deg, #8b7355 0%, #6b5b45 100%)',
  },
  {
    title: 'Women Empowerment',
    desc: 'Vocational training and employment opportunities for women in our communities.',
    bg: 'linear-gradient(135deg, #7b8794 0%, #5d6b7a 100%)',
  },
];

export default function CSR() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Long-Term Partnerships" breadcrumb="Partnerships" />

      <section className="page-section">
        <div className="container">
          <div className="page-text-section reveal">
            <span className="pill-badge">Our Commitment</span>
            <h2>Building Trusted Relationships for Sustainable Growth</h2>
            <p>
              We build trusted relationships through consistent quality, reliable service, and customer-focused
              manufacturing. Every partnership is designed to create sustainable growth for the long term.
            </p>
          </div>

          <div className="gallery-grid">
            {initiatives.map((item, index) => (
              <div key={index} className={`gallery-item reveal delay-${index + 1}`}>
                <div
                  className="gallery-placeholder"
                  style={{ background: item.bg }}
                >
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', color: 'rgba(255,255,255,0.9)' }}>
                      {item.title}
                    </strong>
                    <span style={{ fontSize: '0.75rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.6)' }}>
                      {item.desc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CSRSection />
      <ContactForm />
    </>
  );
}
