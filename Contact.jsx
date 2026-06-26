import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    // CRITICAL: The ID must be exactly here for your buttons to scroll down!
    <section id="contact-section" className="contact-section">
      <div className="container">
        
        <div className="contact-wrapper">
          {/* Left Side: Editorial Info */}
          <div className="contact-info-panel">
            <span>Get In Touch</span>
            <h2>Let’s build something exceptional together.</h2>
            <p>
              Whether you are looking to scale an enterprise application or build a 
              bespoke digital product, our engineering team is here to help.
            </p>
            <div className="contact-details">
              <p><strong>Email:</strong> hello@digitalinnovation.com</p>
              <p><strong>Location:</strong> San Francisco, CA / Remote</p>
            </div>
          </div>

          {/* Right Side: High-End Minimalist Form */}
          <div className="contact-form-panel">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Archi Misra" required />
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="archi@example.com" required />
              </div>
              
              <div className="form-group">
                <label>Project Details</label>
                <textarea rows="4" placeholder="Tell us about your project objectives..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;