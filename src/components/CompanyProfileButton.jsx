import { ArrowUpRight } from 'lucide-react';
import companyProfilePdf from '../assets/CompanyProfile/Antnira_Company_Profile.pdf';
import './CompanyProfileButton.css';

export default function CompanyProfileButton() {
  const downloadCompanyProfile = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = companyProfilePdf;
    downloadLink.download = 'Antnira_Company_Profile.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  };

  return (
    <a
      href={companyProfilePdf}
      target="_blank"
      rel="noopener noreferrer"
      onClick={downloadCompanyProfile}
      className="company-profile-btn"
    >
      <span className="company-profile-btn__label">Company Profile</span>
      <span className="company-profile-btn__icon-wrap" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </a>
  );
}