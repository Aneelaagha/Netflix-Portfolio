function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-topbar">
        <div className="contact-topbar-inner">
          <div className="contact-brand">
            ANEELA AGHA <span>| Contact</span>
          </div>
          <div className="contact-profile">Aneela</div>
        </div>
      </div>

      <div className="contact-main">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Tell me more and I’ll find the best way to get back to you</p>
        </div>

        <div className="contact-card">
          <form
            className="contact-form"
            action="https://getform.io/f/adrggzga"
            method="POST"
          >
            <input type="hidden" name="form-name" value="portfolio-contact" />

            <div className="form-field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>

        
      </div>

      <div className="contact-footer">
        <div className="contact-footer-inner">
          <a href="https://www.linkedin.com/in/aneelaagha/">LinkedIn</a>
          <a href="https://github.com/Aneelaagha">Github</a>
          <a href="#">Email</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;