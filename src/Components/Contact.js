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
              <strong>Email:</strong> work.mrudula00@gmail.com
            </div>
            <div className="detail-item">
              <strong>Phone:</strong> +91 9822XXXXX1
            </div>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <form
            className="contact-form"
            action="https://formspree.io/f/mpwwdvlw"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-label="Your Name"
                tabIndex="1"
              />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-label="Your Email"
                tabIndex="2"
              />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                aria-label="Your Message"
                tabIndex="3"
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button
              className="submit-button"
              type="submit"
              disabled={submitted}
              tabIndex="4"
            >
              {submitted ? (
                <span className="button-text">Sent!</span>
              ) : (
                <span className="button-text">Send Message</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
