import { useScrollReveal } from '../hooks/useScrollReveal';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Pages.css';

const contactInfo = [
  {
    icon: <MapPin />,
    title: 'Visit Us',
    lines: [
      'Factory: Laxmi Industrial, 117 to 121,',
      'Lindiad, Gujarat, India. 394110',
      'Corporate Office: B/4, Krushna Complex,',
      'Hirabaug, Surat, Gujarat, India, 395006',
    ],
  },
  {
    icon: <Phone />,
    title: 'Call Us',
    lines: ['+91 8799608484'],
  },
  {
    icon: <Mail />,
    title: 'Email Us',
    lines: ['connect@antnira.com'],
  },
  {
    icon: <Clock />,
    title: 'Working Hours',
    lines: ['Monday - Saturday', '9:00 AM - 7:00 PM IST'],
  },
];

export default function Contact() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Get in Touch" breadcrumb="Contact" />

      <section className="page-section">
        <div className="container">
          <div className="feature-grid" style={{ marginTop: 0 }}>
            {contactInfo.map((info, index) => (
              <div key={index} className={`feature-card reveal delay-${index + 1}`}>
                <div className="feature-card-icon">
                  {info.icon}
                </div>
                <h4>{info.title}</h4>
                {info.lines.map((line, i) => (
                  <p key={i} style={{ marginBottom: '2px', fontSize: '0.9rem' }}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
