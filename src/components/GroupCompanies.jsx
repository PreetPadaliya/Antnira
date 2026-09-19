import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import apparelExport from '../assets/Focus/Apparel Export.png';
import uniformsWorkwear from '../assets/Focus/UniformsScrubsWorkwear.png';
import oemOdmPrivateLabel from '../assets/Focus/OEMODMPrivate Label.png';
import './GroupCompanies.css';

const companies = [
  {
    tag: 'Export Manufacturing',
    title: 'Apparel Export',
    image: apparelExport,
  },
  {
    tag: 'Healthcare & Corporate',
    title: 'Uniforms, Scrubs & Workwear',
    image: uniformsWorkwear,
  },
  {
    tag: 'Flexible & Scalable',
    title: 'OEM, ODM & Private Label',
    image: oemOdmPrivateLabel,
  },
];

export default function GroupCompanies() {
  return (
    <section className="group-companies">
      <div className="group-companies-header">
        <div className="container">
          <div className="group-companies-header-inner reveal">
            <div>
              <span className="pill-badge">Antnira Group</span>
              <h2>Our Focus</h2>
            </div>
            <Link to="/about" className="explore-link">
              Explore More <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      <div className="group-cards">
        {companies.map((company, index) => (
          <div key={index} className={`group-card reveal delay-${index + 1}`}>
            <div className="group-card-bg">
              <img src={company.image} alt={company.title} />
            </div>
            <div className="group-card-overlay" />
            <div className="group-card-content">
              <span className="group-card-tag">{company.tag}</span>
              <h3>{company.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
