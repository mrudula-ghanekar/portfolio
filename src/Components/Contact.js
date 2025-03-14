import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "1e1cf244-04d8-4cfd-8309-5caa8dda3b3f"); // ✅ Replace this with your Web3Forms Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! ✅");
        e.target.reset(); // Reset form
      } else {
        setResult("Failed to send message. ❌ Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. ❌ Please try again later.");
    }

    setTimeout(() => {
      setSubmitted(false);
      setResult("");
    }, 4000); // Reset after 4 seconds
  };

  return (
    <section className="contact-section">
      <div className="split-screen">
        {/* Left Panel */}
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
              <a href="https://github.com/mrudula-ghanekar?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mrudula-ghanekar-bb00231bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <form
            className="contact-form"
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
                <span className="button-text">Sending...</span>
              ) : (
                <span className="button-text">Send Message</span>
              )}
            </button>
            {result && <p className="form-result">{result}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
