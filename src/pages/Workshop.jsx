import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight, ClipboardCheck, PackageCheck, Shirt, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import apparelHero from '../assets/Apparel Built for Global Markets/20250226_103641.jpg';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import './Pages.css';

const galleryImages = Object.entries(
  import.meta.glob('../assets/Photo Gallery/*.{png,jpg,jpeg}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([, image]) => image);

const processSteps = [
  { icon: Shirt, title: 'Product Development', text: 'Turn your specifications, references, and brand direction into production-ready apparel.' },
  { icon: Sparkles, title: 'Flexible Manufacturing', text: 'Choose OEM, ODM, private label, or custom apparel production for your market.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', text: 'Every order is reviewed against agreed specifications before it is packed for export.' },
  { icon: PackageCheck, title: 'Export Fulfillment', text: 'Professional documentation, custom packaging, and reliable delivery keep orders moving.' },
];

const productRange = [
  'Hospital Scrubs', 'Medical Uniforms', 'Aprons', 'Patient Uniforms',
  'Corporate Wear', 'Custom T-Shirts', 'Custom Polo T-Shirts', 'Workwear', 'Hospitality Uniforms',
];

export default function Workshop() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Our Workshop" breadcrumb="Workshop" />

      <section className="workshop-intro page-section">
        <div className="container">
          <div className="page-content-grid reveal">
            <div className="page-content-text">
              <span className="pill-badge">Manufacturing Excellence</span>
              <h2>Where Apparel Ideas Become Global Products</h2>
              <p>
                Antnira supports apparel export, OEM, ODM, private label, and custom apparel production for
                international businesses and brands.
              </p>
              <p>
                Our process combines flexible manufacturing, clear communication, quality inspection, and
                dependable export fulfillment from first sample to final shipment.
              </p>
            </div>
            <div className="page-content-image workshop-image-frame">
              <img src={apparelHero} alt="Apparel manufacturing at Antnira" />
            </div>
          </div>
          <div className="workshop-proof reveal">
            <div><strong>6</strong><span>Core business models</span></div>
            <div><strong>9</strong><span>Export product categories</span></div>
            <div><strong>20+</strong><span>Global markets</span></div>
            <div><strong>100%</strong><span>Customer-focused production</span></div>
          </div>
        </div>
      </section>

      <section className="workshop-gallery page-section bg-light">
        <div className="container">
          <div className="about-section-heading reveal">
            <span className="pill-badge">Manufacturing Excellence</span>
            <h2>Photo Gallery</h2>
            <p>Explore the people, processes, and production details behind Antnira's global apparel manufacturing.</p>
          </div>
          <div className="workshop-gallery-grid">
            {galleryImages.map((image, index) => (
              <div className={`workshop-gallery-item reveal delay-${(index % 6) + 1}`} key={image}>
                <img src={image} alt={`Antnira apparel manufacturing gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="workshop-process page-section bg-light">
        <div className="container">
          <div className="about-section-heading reveal">
            <span className="pill-badge">Our Process</span>
            <h2>Clear steps from your brief to a finished export order.</h2>
          </div>
          <div className="workshop-process-grid">
            {processSteps.map(({ icon: Icon, title, text }, index) => (
              <article className={`workshop-process-card reveal delay-${index + 1}`} key={title}>
                <Icon />
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workshop-products page-section">
        <div className="container">
          <div className="about-section-heading reveal">
            <span className="pill-badge">Export Product Range</span>
            <h2>Apparel solutions made to your specification.</h2>
          </div>
          <div className="workshop-product-list">
            {productRange.map((product, index) => (
              <div className={`workshop-product reveal delay-${(index % 4) + 1}`} key={product}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{product}</strong>
              </div>
            ))}
          </div>
          <Link to="/contact" className="workshop-contact-link reveal">
            Discuss your production requirements <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
