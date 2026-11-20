
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Sprout,
  Leaf,
  ArrowRight,
  ShieldCheck,
  Tractor,
  Globe,
  Users,
  BookOpen,
  Handshake,
  BriefcaseBusiness,
  Microscope,
} from "lucide-react";
import leadership from "../assets/team/swatson.jpeg"

import "./Home.css";

const Home: React.FC = () => {
  const services = [
    {
      icon: Sprout,
      title: "Agricultural Project Management",
      description:
        "Planning, coordination and implementation of agricultural projects and programmes that strengthen food security and farming enterprises.",
    },
    {
      icon: Tractor,
      title: "Agricultural Inputs & Supply",
      description:
        "Procurement, supply and logistics of agricultural inputs, equipment, livestock resources and production support.",
    },
    {
      icon: BookOpen,
      title: "Training & Skills Development",
      description:
        "Agricultural skills development, farmer extension, youth agripreneurship and practical learning programmes.",
    },
    {
      icon: Leaf,
      title: "Environmental Management",
      description:
        "Sustainable land use, environmental monitoring, natural resource protection and landscape restoration.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Enterprise Development",
      description:
        "Business plans, investment feasibility studies and support for resilient agricultural enterprises.",
    },
    {
      icon: Users,
      title: "Community Development",
      description:
        "School gardens, community agricultural initiatives and inclusive development partnerships.",
    },
    {
      icon: Microscope,
      title: "Research & Innovation",
      description:
        "Agricultural research, technology applications, knowledge exchange and evidence-informed solutions.",
    },
    {
      icon: Handshake,
      title: "Partnerships & Collaboration",
      description:
        "Stakeholder facilitation, conferences and collaboration with government, institutions and industry.",
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Protect natural resources while enabling productive livelihoods.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description:
        "Act transparently, responsibly and accountably.",
    },
    {
      icon: Users,
      title: "Empowerment",
      description:
        "Develop skills, confidence and economic opportunity.",
    },
    {
      icon: Microscope,
      title: "Innovation",
      description:
        "Apply research, technology and practical solutions.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "Work with communities, government, institutions and industry.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Excellence",
      description:
        "Deliver professional, useful and verifiable results.",
    },
  ];

  const featuredProjects = [
    {
      title: "Kasai Agricultural Development",
      location: "Democratic Republic of Congo",
      year: "2024",
      description:
        "A 12,000-hectare agricultural development feasibility study and business plan covering maize, sunflower, beans and a proposed Agri-City concept.",
      category: "Agricultural Investment",
    },
    {
      title: "Zimisele Senior Primary School",
      location: "uMlazi, KwaZulu-Natal",
      year: "2026",
      description:
        "An organic farming education initiative involving learners, educators and parents in practical agricultural learning and sustainable school gardening.",
      category: "Education & Youth",
    },
    {
      title: "AUDA-NEPAD AFR100 Restoration",
      location: "Malawi, Kenya, Nigeria and Tanzania",
      year: "2024–2025",
      description:
        "Support for forest and landscape restoration information collection, spatial-data management and analysis across four African countries.",
      category: "Environmental Restoration",
    },
  ];

  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">
            SANKOFA ENVIRONMENTAL AND AGRICULTURAL DEVELOPMENT
          </span>

          <h1>
            Transforming Africa's Land,
            <span> Livelihoods and Learning.</span>
          </h1>

          <p>
            SEAD1 is a South African agricultural and
            environmental development consultancy
            strengthening food security, advancing
            sustainable farming, empowering communities
            and developing resilient enterprises.
          </p>

          <div className="hero-buttons">
            <NavLink to="/projects" className="btn-primary">
              Explore Our Projects
              <ArrowRight size={18} />
            </NavLink>

            <NavLink to="/contact" className="btn-secondary">
              Partner With Us
            </NavLink>
          </div>

          <div className="hero-trust">
            <Leaf size={20} />
            <span>
              Transforming communities through sustainable development
            </span>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
            alt="Agricultural farmland and green landscapes"
          />

          <div className="hero-image-card">
            <Sprout size={30} />
            <div>
              <strong>Growing a Sustainable Future</strong>
              <span>Agriculture, environment and development</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="about-section">
        <div className="section-heading">
          <span className="section-label">WHO WE ARE</span>
          <h2>
            Sankofa Environmental and
            <span> Agricultural Development</span>
          </h2>
          <p>
            SEAD1 connects agricultural development,
            environmental sustainability, practical
            education and enterprise development to
            create lasting opportunities.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
              alt="Sustainable agricultural production"
            />
          </div>

          <div className="about-text">
            <span className="section-label">ABOUT SEAD1</span>

            <h3>
              Building Resilient Communities Through
              Agriculture and Environmental Development.
            </h3>

            <p>
              SEAD1 is a South African agricultural and
              environmental development consultancy
              working to strengthen food security,
              advance sustainable farming, empower
              communities and develop resilient enterprises.
            </p>

            <p>
              Our capabilities connect project planning
              and delivery, procurement and supply of
              agricultural inputs, technical training,
              enterprise development, environmental
              research and multi-stakeholder collaboration.
            </p>

            <p>
              Through SEAD1 assignments and the
              professional work of its leadership with
              partner institutions, we support initiatives
              ranging from school gardens to continental
              agricultural knowledge platforms.
            </p>

            <NavLink to="/contact" className="text-link">
              Connect With SEAD1
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="vision-mission-section">
        <div className="vision-card">
          <div className="vision-icon">
            <Globe size={32} />
          </div>
          <span className="section-label">OUR VISION</span>
          <h2>Where We Want to Go</h2>
          <p>
            To be a trusted African leader in sustainable
            agricultural and environmental development,
            transforming communities into resilient,
            productive and economically empowered societies.
          </p>
        </div>

        <div className="mission-card">
          <div className="vision-icon">
            <Sprout size={32} />
          </div>
          <span className="section-label">OUR MISSION</span>
          <h2>What We Strive to Achieve</h2>
          <p>
            To advance food security, environmental
            sustainability and inclusive economic development
            through innovative agricultural solutions,
            practical education, research, strategic
            partnerships and effective project implementation.
            We empower farmers, young people, enterprises
            and communities with the knowledge, resources
            and opportunities to build sustainable livelihoods.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="section-heading">
          <span className="section-label">OUR CAPABILITIES</span>
          <h2>What We Do</h2>
          <p>
            Our multidisciplinary capabilities support
            agricultural growth, environmental protection
            and inclusive economic development.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={30} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <NavLink to="/contact" className="service-link">
                  Enquire About This Service
                  <ArrowRight size={15} />
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-section">
        <div className="section-heading">
          <span className="section-label">WHAT GUIDES US</span>
          <h2>Our Core Values</h2>
          <p>
            The principles that guide our work,
            partnerships and development initiatives.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div className="value-card" key={value.title}>
                <Icon size={35} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership-section">
        <div className="leadership-image">
          <img
            src={leadership}
            alt="Professional leadership portrait placeholder"
          />
        </div>

        <div className="leadership-content">
          <span className="section-label">OUR LEADERSHIP</span>
          <h2>Dr Harry Kofi Swatson</h2>
          <h4>Founder and Executive Director</h4>

          <p>
            Dr Harry Kofi Swatson is an agricultural
            scientist and Professional Natural Scientist
            with a PhD in Agricultural Science, an MSc
            (cum laude) and over 30 years of professional
            experience.
          </p>

          <p>
            His experience spans agricultural training,
            research, government programmes, rural
            development and institutional partnerships.
            He also serves as Secretary of the African
            Poultry Network of the World's Poultry Science
            Association (WPSA-APN).
          </p>

          <NavLink to="/contact" className="text-link">
            Contact SEAD1
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="featured-section">
        <div className="section-heading">
          <span className="section-label">OUR EXPERIENCE</span>
          <h2>Featured Projects</h2>
          <p>
            Our portfolio reflects experience in
            agricultural investment, farmer support,
            education, environmental restoration and
            continental knowledge exchange.
          </p>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <div className="featured-card" key={project.title}>
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <span className="project-location">
                {project.location} | {project.year}
              </span>

              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <div className="featured-button">
          <NavLink to="/projects" className="btn-primary">
            View Complete Project Portfolio
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="contact-cta">
        <div>
          <span>BUILDING PARTNERSHIPS FOR SUSTAINABLE DEVELOPMENT</span>
          <h2>Partner With SEAD1</h2>
          <p>
            Let's turn agricultural and environmental
            development ambitions into practical initiatives.
            Work with us to create sustainable opportunities
            for Africa's communities and enterprises.
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
