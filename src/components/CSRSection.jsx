import './CSRSection.css';
import communityOutreach from '../assets/Long-Term Partnerships/community-outreach.jpg';
import educationSupport from '../assets/Long-Term Partnerships/Education Support.png';
import environmentalDrive from '../assets/Long-Term Partnerships/Environmental Drive.jpg';
import healthcareInitiative from '../assets/Long-Term Partnerships/Healthcare Initiative.jpg';

const csrImages = [
  { label: 'Community Outreach', image: communityOutreach },
  { label: 'Education Support', image: educationSupport },
  { label: 'Healthcare Initiative', image: healthcareInitiative },
  { label: 'Environmental Drive', image: environmentalDrive },
];

export default function CSRSection() {
  return (
    <section className="csr-section">
      <div className="container">
        <div className="csr-grid">
          <div className="csr-content reveal-left">
            <span className="pill-badge light">Long-Term Partnerships</span>
            <h2>Building trusted relationships through quality and reliable service.</h2>
            <p>
              We work with businesses that share our commitment to innovation, quality, and long-term value.
              From product development to delivery, our customer-focused manufacturing model is built to
              support sustainable international growth.
            </p>
            <div className="csr-tags">
              <span className="csr-tag">Reliable Service</span>
              <span className="csr-tag">Customer Focus</span>
              <span className="csr-tag">Sustainable Growth</span>
            </div>
          </div>
          <div className="csr-images reveal-right">
            {csrImages.map((img, index) => (
              <div key={index} className="csr-image">
                <img src={img.image} alt={img.label} className="csr-image-photo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
