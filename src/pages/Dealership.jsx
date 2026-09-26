import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight, BadgeCheck, Boxes, ChartNoAxesCombined, ClipboardCheck, Handshake, Megaphone, PackageCheck, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import product1 from '../assets/Products/product-1.jpg';
import product2 from '../assets/Products/product-2.jpg';
import product3 from '../assets/Products/product-3.jpg';
import './Dealership.css';

const benefits = [
  { icon: BadgeCheck, title: 'Quality Products', text: 'Offer dependable apparel manufactured around clear specifications, consistent workmanship, and quality checks.' },
  { icon: ChartNoAxesCombined, title: 'Growth-Focused Pricing', text: 'Build a stronger product business with practical pricing and flexible apparel programs for your market.' },
  { icon: Handshake, title: 'Dedicated Partnership', text: 'Work with a responsive Antnira team from product selection and samples through repeat orders.' },
  { icon: Megaphone, title: 'Brand Support', text: 'Present your range with product guidance, packaging support, and content direction suited to your customers.' },
  { icon: PackageCheck, title: 'Reliable Fulfillment', text: 'Keep orders moving with planned production, inspection, packing, and export-ready delivery support.' },
  { icon: Boxes, title: 'A Flexible Range', text: 'Expand beyond one category with uniforms, workwear, casual apparel, and private-label products.' },
];

const products = [
  { title: 'Uniforms & Workwear', text: 'Practical apparel programs for healthcare, corporate, hospitality, and institutional customers.', image: product1 },
  { title: 'Custom Apparel', text: 'T-shirts, polo shirts, hoodies, and other garments developed for your market and brand.', image: product2 },
  { title: 'Private Label Collections', text: 'Build a differentiated range with custom fabrics, colors, branding, labels, and packaging.', image: product3 },
];

const applicationSteps = [
  { icon: ClipboardCheck, title: 'Submit Your Inquiry', text: 'Tell us about your market, customer base, product interests, and expected requirements.' },
  { icon: Shirt, title: 'Review & Plan', text: 'Our team reviews the opportunity and recommends suitable products, quantities, and next steps.' },
  { icon: PackageCheck, title: 'Launch Your Range', text: 'Move from samples and approvals into production, fulfillment, and ongoing partnership support.' },
];

export default function Dealership() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Dealership" breadcrumb="Dealership" />

      <section className="dealership-intro page-section">
        <div className="container">
          <div className="dealership-intro-grid reveal">
            <div>
              <span className="pill-badge">Grow With Antnira</span>
              <h2>Build a stronger apparel business with a dependable manufacturing partner.</h2>
            </div>
            <div>
              <p>
                Partner with Antnira to bring quality apparel, uniforms, workwear, and private-label products
                to your customers. We combine product flexibility with clear communication and practical
                production support.
              </p>
              <Link to="/contact" className="btn btn-primary">Start a Dealership Inquiry <ArrowUpRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="dealership-benefits page-section bg-light">
        <div className="container">
          <div className="about-section-heading reveal">
            <span className="pill-badge">Why Partner With Antnira</span>
            <h2>Support that helps you serve your market with confidence.</h2>
          </div>
          <div className="dealership-benefits-grid">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article className={`dealership-benefit reveal delay-${(index % 4) + 1}`} key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dealership-products page-section">
        <div className="container">
          <div className="about-section-heading reveal">
            <span className="pill-badge">Our Products</span>
            <h2>Apparel categories ready to grow with your business.</h2>
          </div>
          <div className="dealership-products-grid">
            {products.map((product, index) => (
              <article className={`dealership-product reveal delay-${index + 1}`} key={product.title}>
                <div className="dealership-product-image"><img src={product.image} alt={product.title} /></div>
                <div className="dealership-product-content">
                  <span>0{index + 1}</span>
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dealership-process page-section bg-light">
        <div className="container">
          <div className="about-section-heading reveal">
            <span className="pill-badge">Steps to Apply</span>
            <h2>A clear path from first conversation to your product range.</h2>
          </div>
          <div className="dealership-process-grid">
            {applicationSteps.map(({ icon: Icon, title, text }, index) => (
              <article className={`dealership-process-card reveal delay-${index + 1}`} key={title}>
                <Icon />
                <span>Step {index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dealership-cta page-section">
        <div className="container">
          <div className="dealership-cta-inner reveal">
            <div>
              <span className="pill-badge">Inquire Now</span>
              <h2>Let’s discuss the right dealership opportunity for your market.</h2>
            </div>
            <Link to="/contact" className="btn btn-primary">Contact Antnira <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
