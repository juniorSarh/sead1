
import React from "react";
import { NavLink } from "react-router-dom";

import {
  Sprout,
  Leaf,
  Droplets,
  Trees,
  ArrowRight,
  ShieldCheck,
  Tractor,
  Globe,
} from "lucide-react";

import "./Home.css";

const Home: React.FC = () => {
  const services = [
    {
      icon: Sprout,
      title: "Agricultural Development",
      description:
        "Supporting sustainable agricultural practices, improving farming productivity and empowering agricultural communities.",
    },
    {
      icon: Leaf,
      title: "Environmental Management",
      description:
        "Promoting environmental protection, conservation and responsible natural resource management.",
    },
    {
      icon: Droplets,
      title: "Water & Land Management",
      description:
        "Encouraging efficient water usage, soil conservation and sustainable land management practices.",
    },
    {
      icon: Trees,
      title: "Land Rehabilitation",
      description:
        "Restoring degraded land and promoting biodiversity through environmental rehabilitation initiatives.",
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Environmental Responsibility",
      description:
        "Protecting our natural environment through responsible development.",
    },
    {
      icon: Tractor,
      title: "Agricultural Innovation",
      description:
        "Supporting modern and sustainable farming solutions.",
    },
    {
      icon: Globe,
      title: "Sustainable Development",
      description:
        "Creating lasting opportunities for communities and future generations.",
    },
  ];

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">
            AGRICULTURE | ENVIRONMENT | DEVELOPMENT
          </span>
             <h1>
            Growing a
            <span> Sustainable </span>
            Future Together.
            </h1>

            <p>
            SEAD1 is committed to agricultural advancement
            and environmental development through sustainable
            solutions that empower communities, protect
            natural resources and create lasting impact.
            </p>

          <div className="hero-buttons">
            <NavLink to="/projects" className="btn-primary">
              Explore Our Projects
              <ArrowRight size={18} />
            </NavLink>

            <NavLink to="/contact" className="btn-secondary">
              Contact Us
            </NavLink>
          </div>

          <div className="hero-trust">
            <Leaf size={20} />
            <span>Building a greener and more sustainable tomorrow</span>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
            alt="Green agricultural farmland"
          />

          <div className="hero-image-card">
            <Sprout size={30} />
            <div>
              <strong>Sustainable Growth</strong>
              <span>Developing today for tomorrow</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="about-section">
        <div className="section-heading">
          <span className="section-label">WHO WE ARE</span>
          <h2>
            Driving Agricultural and
            <span> Environmental Progress</span>
          </h2>
          <p>
            We believe that agricultural development and
            environmental conservation should work together
            to create a sustainable future.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
              alt="Sustainable agriculture and crop cultivation"
            />
          </div>

          <div className="about-text">
            <h3>Creating Opportunities Through Sustainable Development</h3>

            <p>
              Our focus is on developing agricultural
              opportunities, promoting environmental
              awareness and implementing sustainable
              development initiatives.
            </p>

            <p>
              Through innovation, collaboration and
              responsible resource management, we aim
              to contribute towards stronger communities
              and a healthier environment.
            </p>

            <NavLink to="/contact" className="text-link">
              Learn More About Us
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="section-heading">
          <span className="section-label">WHAT WE DO</span>
          <h2>Our Areas of Expertise</h2>
          <p>
            We provide development-focused solutions
            that support agriculture, environmental
            protection and sustainable resource management.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <Icon size={32} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <NavLink to="/projects" className="service-link">
                  Explore More
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <div className="mission-content">
          <span className="section-label">OUR COMMITMENT</span>

          <h2>
            Our Mission Is to Build a
            Greener, Stronger and
            More Sustainable Future.
          </h2>

          <p>
            We strive to promote responsible agricultural
            practices, environmental conservation and
            sustainable development initiatives that
            create meaningful change.
          </p>

          <NavLink to="/projects" className="btn-primary">
            View Our Projects
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-section">
        <div className="section-heading">
          <span className="section-label">OUR VALUES</span>
          <h2>What Drives Us</h2>
        </div>

        <div className="values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div className="value-card" key={index}>
                <Icon size={35} />

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta">
        <div>
          <span>LET'S BUILD A SUSTAINABLE FUTURE</span>
          <h2>Have a Project or Partnership in Mind?</h2>
          <p>
            Let's work together towards agricultural
            development and environmental sustainability.
          </p>
        </div>

        <NavLink to="/contact" className="cta-button">
          Get In Touch
          <ArrowRight size={18} />
        </NavLink>
      </section>

    </div>
  );
};

export default Home;
