
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

import logo from "../assets/image.png";
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
      url: "",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Information */}
        <div className="footer-section company-info">

          <div className="footer-logo">
            <img src={logo} alt="SEAD1 Logo" />
            <h2>SEAD1</h2>
          </div>

          <p>
            Transforming Africa's Land, Livelihoods and Learning.
            Promoting sustainable agriculture, environmental
            development and community empowerment.
          </p>

          <div className="social-icons">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url || undefined}
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
              Pietermaritzburg, KwaZulu-Natal,
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
