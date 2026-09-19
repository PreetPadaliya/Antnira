import { Link } from 'react-router-dom';
import './PageBanner.css';

export default function PageBanner({ title, breadcrumb }) {
  return (
    <section className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>{breadcrumb || title}</span>
        </div>
      </div>
    </section>
  );
}
