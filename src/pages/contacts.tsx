
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import "./Contact.css";

const Contact: React.FC = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const emailSubject = encodeURIComponent(
      `SEAD1 Website Enquiry: ${subject}`
    );

    const emailBody = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`
    );

    window.location.href =
      `mailto:harry.sead1@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Physical Address",
      detail: "1 Wensleydale Road, Scottsville, Pietermaritzburg, KwaZulu-Natal",
      link: "https://www.google.com/maps/search/?api=1&query=1+Wensleydale+Road+Scottsville+Pietermaritzburg+KwaZulu-Natal+South+Africa",
      linkText: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "083 762 8221",
      link: "tel:+27837628221",
      linkText: "Call SEAD1",
    },
    {
      icon: Mail,
      title: "Email Address",
      detail: "harry.sead1@gmail.com",
      link: "mailto:harry.sead1@gmail.com",
      linkText: "Send an Email",
    },
  ];

  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-label">
            WE WOULD LOVE TO HEAR FROM YOU
          </span>

          <h1>
            Let's Grow
            <span> Together.</span>
          </h1>

          <p>
            Whether you have an agricultural project,
            an environmental development enquiry or
            a potential partnership opportunity, SEAD1
            is ready to connect with you.
          </p>

          <a href="#contact-information" className="contact-hero-btn">
            Contact Our Team
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="contact-hero-image">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
            alt="Beautiful green agricultural landscape"
          />
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="contact-information" id="contact-information">

        <div className="contact-heading">
          <span className="contact-label">GET IN TOUCH</span>
          <h2>We Are Here to Help</h2>
          <p>
            Reach out to us using any of the contact
            details below. We look forward to hearing
            from you.
          </p>
        </div>

        <div className="contact-details-grid">

          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="contact-detail-card" key={index}>
                <div className="contact-detail-icon">
                  <Icon size={28} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.detail}</p>

                <a
                  href={item.link}
                  target={
                    item.title === "Our Physical Address"
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                >
                  {item.linkText}
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}

        </div>
      </section>

      {/* CONTACT FORM AND INTRODUCTION */}
      <section className="contact-main">

        <div className="contact-form-info">
          <span className="contact-label">SEND US A MESSAGE</span>

          <h2>
            Let's Discuss Your Next Project.
          </h2>

          <p>
            We welcome enquiries about agricultural
            development, environmental management,
            sustainable projects and business partnerships.
          </p>

          <div className="contact-info-item">
            <MessageCircle size={23} />
            <div>
              <h4>Professional Enquiries</h4>
              <p>
                Tell us about your project or how we
                can work together.
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <Clock size={23} />
            <div>
              <h4>We Value Your Time</h4>
              <p>
                Send us your enquiry and we will look
                forward to connecting with you.
              </p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <h3>Send Us an Enquiry</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Enquiry Type *</label>
              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select enquiry type
                </option>
                <option value="Agricultural Development">
                  Agricultural Development
                </option>
                <option value="Environmental Management">
                  Environmental Management
                </option>
                <option value="Project Partnership">
                  Project Partnership
                </option>
                <option value="General Enquiry">
                  General Enquiry
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us how we can assist you..."
              required
            />
          </div>

          <button type="submit" className="contact-submit-btn">
            Send Message
            <Send size={18} />
          </button>

          <p className="form-note">
            Your email application will open with your
            enquiry details ready to send.
          </p>

        </form>

      </section>

      {/* LOCATION SECTION */}
      <section className="location-section">

        <div className="location-heading">
          <span className="contact-label">FIND US</span>
          <h2>Visit Our Offices</h2>
          <p>
            We are located in Scottsville,
            Pietermaritzburg, KwaZulu-Natal, South Africa.
          </p>
        </div>

        <div className="map-container">
          <iframe
            title="SEAD1 Office Location"
            src="https://www.google.com/maps?q=1+Wensleydale+Road,+Scottsville,+Pietermaritzburg,+KwaZulu-Natal,+South+Africa&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="location-address">
          <MapPin size={22} />
          <p>
            1 Wensleydale Road, Scottsville,
            Pietermaritzburg, KwaZulu-Natal.
          </p>
        </div>

      </section>

      {/* FINAL CTA */}
      <section className="contact-bottom-cta">
        <div>
          <h2>Let's Create a Sustainable Future Together.</h2>
          <p>
            Connect with SEAD1 and let's explore opportunities
            for agricultural and environmental development.
          </p>
        </div>

        <a href="mailto:harry.sead1@gmail.com">
          Email SEAD1
          <ArrowRight size={18} />
        </a>
      </section>

    </div>
  );
};

export default Contact;
