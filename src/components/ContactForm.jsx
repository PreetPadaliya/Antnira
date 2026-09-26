import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    code: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setSubmitted(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', code: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact-form">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <h2>Ready to Grow Your Apparel Business?</h2>
            <p>
              Tell us about your apparel export, OEM, ODM, or private-label requirements. Our team will respond promptly with the right manufacturing solution.
            </p>
          </div>

          <form className="contact-form reveal-right" onSubmit={handleSubmit}>
            <div className="form-row form-row-2">
              <div className="form-group">
                <label htmlFor="contact-name">Name<span className="required">*</span></label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email<span className="required">*</span></label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row form-row-3">
              <div className="form-group">
                <label htmlFor="contact-code">Country code<span className="required">*</span></label>
                <input
                  id="contact-code"
                  type="text"
                  name="code"
                  placeholder="Code"
                  value={formData.code}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone/WhatsApp<span className="required">*</span></label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject<span className="required">*</span></label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">-Select-</option>
                  <option value="purchase">For Purchase</option>
                  <option value="dealership">For Dealership</option>
                  <option value="product-sample">For Product Sample</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Enter Your Requirements"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Now <ArrowUpRight size={18} />
            </button>
            {submitted && (
              <p className="contact-form-status" role="status">
                Thank you. Your requirements have been received, and our team will contact you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
