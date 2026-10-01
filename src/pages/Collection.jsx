import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import { getCollectionProductPath } from '../data/collectionCatalog';
import { collectionsWithImages, productImages } from '../data/collectionImages';
import './Collection.css';

export default function Collection() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Our Collection" breadcrumb="Collection" />

      <section className="collection-intro">
        <div className="container collection-intro-grid reveal">
          <div>
            <span className="collection-eyebrow">Apparel built around your brief</span>
            <h2>One manufacturing partner. A range built for your market.</h2>
          </div>
          <div className="collection-intro-copy">
            <p>
              Explore Antnira's healthcare uniforms, custom T-shirts, workwear, and casual apparel.
              Each range can be developed to your specifications, from fabric and fit through branding
              and packaging.
            </p>
            <a href="#collection-categories" className="collection-down-link">
              Browse the collection <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="collection-directory" id="collection-categories">
        <div className="container">
          <div className="collection-section-heading reveal">
            <span className="collection-eyebrow">Product ranges</span>
            <h2>Find the right range</h2>
          </div>
          <nav className="collection-directory-grid" aria-label="Collection categories">
            {collectionsWithImages.map((collection) => (
              <a className="collection-directory-link reveal" href={`#${collection.id}`} key={collection.id}>
                <span>{collection.number}</span>
                <strong>{collection.title}</strong>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="collection-ranges">
        <div className="container">
          {collectionsWithImages.map((collection) => (
            <article
              className="collection-range reveal"
              id={collection.id}
              key={collection.id}
            >
              <div className="collection-range-header">
                <img src={collection.image} alt={collection.imageAlt} loading="lazy" />
                <div className="collection-range-content">
                  <span className="collection-eyebrow">{collection.eyebrow}</span>
                  <h2>{collection.title}</h2>
                  <p>{collection.description}</p>
                </div>
                <span className="collection-range-count">
                  <strong>{String(collection.products.length).padStart(2, '0')}</strong>
                  <span>products</span>
                </span>
              </div>
              <div className="collection-product-grid">
                {collection.products.map((product) => (
                  <Link
                    to={getCollectionProductPath(product.slug)}
                    className="collection-product-card"
                    key={product.slug}
                  >
                    <img src={product.image} alt="" loading="lazy" />
                    <span className="collection-product-card-copy">
                      <strong>{product.title}</strong>
                      <span>{product.description}</span>
                      <span className="collection-product-card-action">
                        View product <ArrowUpRight size={14} />
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="collection-range-footer">
                <Link to="/contact" className="collection-inquiry-link">
                  Discuss this range <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="collection-gallery">
        <div className="container">
          <div className="collection-section-heading reveal">
            <span className="collection-eyebrow">Antnira product gallery</span>
            <h2>Made to specification. Finished for your brand.</h2>
          </div>
          <div className="collection-gallery-grid">
            {productImages.map((image, index) => (
              <figure className="collection-gallery-item reveal" key={image}>
                <img src={image} alt={`Antnira apparel product ${index + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}