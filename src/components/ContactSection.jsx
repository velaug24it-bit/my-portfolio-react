// src/components/ContactSection.jsx
import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xlgevnrk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // For reply-to email
          _subject: `Portfolio Contact: ${formData.subject}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your next project</p>
          <div className="title-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Tamilnadu, India</p>
                <a 
                  href="https://maps.google.com/?q=Tamilnadu,India" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="info-link"
                >
                  View on Map →
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <div className="info-content">
                <h4>Phone</h4>
                <p>+91 98409 94649</p>
                <a href="tel:+919840994649" className="info-link">
                  Call Now →
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h4>Email</h4>
                <p>velr012006@gmail.com</p>
                <a href="mailto:velr012006@gmail.com" className="info-link">
                  Send Email →
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for your message. I'll get back to you within 24 hours.</p>
                <p className="success-note">
                  Check your email for confirmation.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength="2"
                    maxLength="50"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    minLength="5"
                    maxLength="100"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength="10"
                    maxLength="1000"
                  ></textarea>
                </div>

                {error && (
                  <div className="error-message">
                    <span className="error-icon">⚠️</span>
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>

                <p className="form-note">
                  * Required fields. Your data is secure and will only be used to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;