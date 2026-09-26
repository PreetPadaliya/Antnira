import { Mail, Phone } from 'lucide-react';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <a href="mailto:connect@antnira.com" className="topbar-item">
          <Mail /> connect@antnira.com
        </a>
        <span className="topbar-divider">|</span>
        <a href="tel:+918799608484" className="topbar-item">
          <Phone /> +91 8799608484
        </a>
      </div>
    </div>
  );
}
