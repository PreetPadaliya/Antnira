import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import { collectionProducts, getCollectionProductPath } from '../data/collectionCatalog';
import { collectionProductImages } from '../data/collectionImages';
import './CollectionProduct.css';

const productOptions = {
  'healthcare-uniforms': [
    'Fabric and color selection',
    'Fit and size range',
    'Garment details and finishing',
    'Branding and identification',
  ],
  'custom-t-shirts': [
    'Knit fabric and garment weight',
    'Color, fit, and size range',
    'Print or embroidery details',
    'Labels and branded finishing',
  ],
  'corporate-workwear': [
    'Garment styles for each role',
    'Fabric and functional details',
    'Coordinated colors and sizing',
    'Logo placement and repeat orders',
  ],
  'casual-private-label': [
    'Silhouette and garment construction',
    'Fabric, weight, and color',
    'Fit and size range',
    'Private labels and packaging',
  ],
};

export default function CollectionProduct() {
  const { slug } = useParams();
  const product = collectionProducts.find((item) => item.slug === slug);
  useScrollReveal();

  if (!product) {
    return <Navigate to="/collection" replace />;
  }

  const relatedProducts = collectionProducts
    .filter((item) => item.categoryId === product.categoryId && item.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <PageBanner title={product.title} breadcrumb={product.categoryTitle} />

      <section className="collection-product-detail">
        <div className="container">
          <Link to={`/collection#${product.categoryId}`} className="collection-product-back">
            <ArrowLeft size={16} /> Back to {product.categoryTitle}
          </Link>

          <div className="collection-product-layout reveal">
            <div className="collection-product-photo">
              <img src={collectionProductImages[product.slug] || product.image || product.categoryImage} alt={product.imageAlt || product.categoryImageAlt} />
              <span>{product.categoryTitle}</span>
            </div>
            <div className="collection-product-copy">
              <span className="collection-product-eyebrow">Made to your specification</span>
              <h2>{product.title}, developed around your needs.</h2>
              <p>{product.description}</p>
              <p>
                Antnira supports product development, sampling, production, quality checks, and export
                fulfillment. Share your brief and we can discuss suitable materials, quantities, and
                finishing for your order.
              </p>

              <div className="collection-product-options">
                <h3>Options to discuss</h3>
                <ul>
                  {productOptions[product.categoryId].map((option) => (
                    <li key={option}>
                      <Check size={16} aria-hidden="true" />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="collection-product-cta">
                Discuss {product.title} <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="collection-related">
          <div className="container">
            <div className="collection-related-heading reveal">
              <div>
                <span className="collection-product-eyebrow">Explore more</span>
                <h2>More from {product.categoryTitle}</h2>
              </div>
              <Link to="/collection" className="collection-related-all">
                All collections <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="collection-related-grid">
              {relatedProducts.map((item, index) => (
                <Link
                  to={getCollectionProductPath(item.slug)}
                  className={`collection-related-item reveal delay-${index + 1}`}
                  key={item.slug}
                >
                  <span>{item.categoryTitle}</span>
                  <strong>{item.title}</strong>
                  <ArrowUpRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactForm />
    </>
  );
}