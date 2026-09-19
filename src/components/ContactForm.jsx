import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    code: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you shortly.');
    setFormData({ name: '', email: '', code: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact-form">
      <div className="contact-pin" style={{ left: '10%', top: '30%' }}><MapPin /></div>
      <div className="contact-pin" style={{ left: '25%', top: '60%' }}><MapPin /></div>
      <div className="contact-pin" style={{ left: '35%', top: '80%' }}><MapPin /></div>

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
                <label>Name<span className="required">*</span></label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:<span className="required">*</span></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row form-row-3">
              <div className="form-group">
                <label>Code:<span className="required">*</span></label>
                <input
                  type="text"
                  name="code"
                  placeholder="Code"
                  value={formData.code}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone/WhatsApp:<span className="required">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject:<span className="required">*</span></label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">-Select-</option>
                  <option value="apparel">Apparel Export</option>
                  <option value="oem">OEM / ODM Manufacturing</option>
                  <option value="private-label">Private Label Manufacturing</option>
                  <option value="uniforms">Healthcare & Corporate Apparel</option>
                  <option value="general">General Inquiry</option>
                  <option value="export">Export Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Message:</label>
                <textarea
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
          </form>
        </div>
      </div>
    </section>
  );
}
