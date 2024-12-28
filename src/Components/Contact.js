import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact-section">
      <div className="split-screen">
        <div className="left-panel">
          <h2>Let's Connect</h2>
          <p>Feel free to reach out to me for collaborations or inquiries.</p>
          <div className="contact-details">
            <div className="detail-item">
              <strong>Email:</strong> your-email@example.com
            </div>
            <div className="detail-item">
              <strong>Phone:</strong> +1 (234) 567-890
            </div>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="5" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button className="submit-button" type="submit">
              {submitted ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
