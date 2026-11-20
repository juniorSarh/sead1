

import React from "react";
import { NavLink } from "react-router-dom";

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";


const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  
  
const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com/yourcompany",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/yourcompany",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://linkedin.com/company/yourcompany",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://youtube.com/@yourcompany",
    },
  ];
  


  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Information */}
        <div className="footer-section company-info">
          <h2>SEAD1</h2>

          <p>
            Providing quality services and professional
            solutions to our valued clients.
          </p>

          <div className="social-icons">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Physical Address */}
        <div className="footer-section">
          <h3>Our Address</h3>

          <div className="footer-contact">
            <MapPin size={20} />
            <p>
              1 Wensleydale Road,
              <br />
              Pietermartzburg, KwaZulu-Natal,
              <br />
              South Africa.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <div className="footer-contact">
            <Phone size={20} />
            <a href="tel:+27837628221">
              +27 83 762 8221
            </a>
          </div>

          <div className="footer-contact">
            <Mail size={20} />
            <a href="mailto:harry.sead1@gmail.com">
              harry.sead1@gmail.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} SEAD1.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
