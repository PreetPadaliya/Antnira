import { useScrollReveal } from '../hooks/useScrollReveal';
import PageBanner from '../components/PageBanner';
import CSRSection from '../components/CSRSection';
import ContactForm from '../components/ContactForm';
import './Pages.css';

import csrImageJpg from '../assets/CSR/CSR activity (1).jpg';
import csrImage1 from '../assets/CSR/CSR activity (1).png';
import csrImage2 from '../assets/CSR/CSR activity (2).png';
import csrImage3 from '../assets/CSR/CSR activity (3).png';
import csrImage4 from '../assets/CSR/CSR activity (4).png';
import csrImage5 from '../assets/CSR/CSR activity (5).png';
import csrImage6 from '../assets/CSR/CSR activity (6).png';
import csrImage7 from '../assets/CSR/CSR activity (7).png';
import csrImage8 from '../assets/CSR/CSR activity (8).png';
import csrImage9 from '../assets/CSR/CSR activity (9).png';
import csrImage10 from '../assets/CSR/CSR activity (10).png';
import schoolMealImage from '../assets/CSR/School Meal Distribution in Gujarati Corridor.png';
import plantingImage from '../assets/CSR/Masked Volunteers Planting a Sapling.png';
import communityTreeImage from '../assets/CSR/Community Tree-Planting Day.png';
import communitySaplingImage from '../assets/CSR/Community Sapling Planting Day.png';

const csrImages = [
  csrImageJpg,
  csrImage1,
  csrImage2,
  csrImage3,
  csrImage4,
  csrImage5,
  csrImage6,
  csrImage7,
  csrImage8,
  csrImage9,
  csrImage10,
  schoolMealImage,
  plantingImage,
  communityTreeImage,
  communitySaplingImage,
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
            {csrImages.map((image, index) => (
              <div key={index} className={`gallery-item reveal delay-${index + 1}`}>
                <img
                  src={image}
                  alt={`CSR activity ${index + 1}`}
                  className="gallery-photo"
                />
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
