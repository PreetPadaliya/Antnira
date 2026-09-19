import './WhyChooseUs.css';
import diverseIcon from '../assets/H_WhyUs/diverse.png';
import innovationIcon from '../assets/H_WhyUs/innovation.png';
import qualityIcon from '../assets/H_WhyUs/quality.png';
import customerIcon from '../assets/H_WhyUs/customer.png';
import sustainableIcon from '../assets/H_WhyUs/sustainble.png';
import globalIcon from '../assets/H_WhyUs/global.png';

const reasons = [
  {
    number: '01',
    title: 'Diverse Expertise',
    desc: 'Investing in and building manufacturing businesses that deliver world-class products.',
    icon: diverseIcon,
  },
  {
    number: '02',
    title: 'Innovation-Driven',
    desc: 'Commitment to incorporating the latest technologies to deliver cutting-edge products.',
    icon: innovationIcon,
  },
  {
    number: '03',
    title: 'Quality First',
    desc: 'Rigorous quality control processes ensure that all products meet the highest standards of performance.',
    icon: qualityIcon,
  },
  {
    number: '04',
    title: 'Customer Focused',
    desc: 'Focused on understanding & exceeding customer needs, offering tailored solutions & service.',
    icon: customerIcon,
  },
  {
    number: '05',
    title: 'Sustainable Practices',
    desc: 'Dedication to environmentally friendly manufacturing processes & product development.',
    icon: sustainableIcon,
  },
  {
    number: '06',
    title: 'Global Reach',
    desc: 'Proven track record in global markets with products meeting international standards.',
    icon: globalIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-layout">
          <div className="why-brand reveal-left" aria-label="Why choose Antnira">
            <span className="why-brand-label">Why Choose Us</span>
            <h2>ANTNIRA</h2>
          </div>
          <div className="why-cards">
          {reasons.map((reason, index) => (
            <div key={index} className={`why-card reveal delay-${index + 1}`}>
              <div className="why-card-top">
                <div className="why-card-icon">
                  <img src={reason.icon} alt="" />
                </div>
                <span className="why-card-number">{reason.number}</span>
              </div>
              <h4>{reason.title}</h4>
              <p>{reason.desc}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
