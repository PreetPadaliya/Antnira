import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CompanyProfileButton.css';

export default function CompanyProfileButton() {
  return (
    <Link to="/about" className="company-profile-btn">
      <span className="company-profile-btn__label">Company Profile</span>
      <span className="company-profile-btn__icon-wrap" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  );
}