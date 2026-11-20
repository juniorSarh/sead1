
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Sprout,
  Leaf,
  Tractor,
  GraduationCap,
  Trees,
  Globe,
  Building2,
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  Handshake,
  BriefcaseBusiness,
} from "lucide-react";

import "./Projects.css";

type ProjectCategory = "past" | "ongoing" | "upcoming";

interface Project {
  title: string;
  location: string;
  period: string;
  theme: string;
  description: string;
  role: string;
  category: ProjectCategory;
  icon: React.ElementType;
}

const projects: Project[] = [

  // =========================
  // PAST PROJECTS
  // =========================

  {
    title: "Zimisele Senior Primary School",
    location: "uMlazi, KwaZulu-Natal",
    period: "2026",
    theme: "Growing Future Generations",
    description:
      "A DUT ICM-funded organic farming initiative. On 18 November 2026, learners, educators and parents participated in a workshop exploring garden sustainability, organic production, entrepreneurship and practical seed sowing. Ten pictorial learning manuals informed the training.",
    role:
      "Dr Harry Swatson served as technical agricultural facilitator. The project was led by Dr Nhleko, DUT ICM, with the DUT Green Campus Initiative and school participants.",
    category: "past",
    icon: GraduationCap,
  },

  {
    title: "DUT School and Community Agriculture Outreach",
    location: "Greater Edendale and Nkandla",
    period: "2022–2023",
    theme: "Growing Future Generations",
    description:
      "Supported school and community gardens in Greater Edendale through agricultural training, seedlings and equipment support. Also delivered agricultural and innovation-focused training to 18 communities and institutions in Nkandla, covering vegetable production, drone applications, Fourth Industrial Revolution technology and composting.",
    role:
      "Dr Swatson's previous institutional assignment as an agricultural specialist at the DUT innobiz Centre for Entrepreneurship and Innovation. Not represented as a SEAD1 contract.",
    category: "past",
    icon: Sprout,
  },

  {
    title: "DUT Green Campus and Student-Residence Sustainability",
    location: "Durban, KwaZulu-Natal",
    period: "Details to be confirmed",
    theme: "Environmental Awareness",
    description:
      "Environmental awareness and green-campus activities, including sustainability engagement in student residences.",
    role:
      "Founder and partner engagement. Specific dates, activities and outputs require verification before publication as a detailed case study.",
    category: "past",
    icon: Leaf,
  },

  {
    title: "Presidential Employment Stimulus / PESI",
    location: "KwaZulu-Natal",
    period: "2022–2024",
    theme: "Empowering Farmers",
    description:
      "Agricultural production inputs and farmer support, including procurement, supply and delivery of agricultural inputs and services, training, mentorship and logistical support for farmer production support units and irrigation projects.",
    role:
      "SEAD1-linked project coordination. Roles and contracting arrangements differed across SEAD1 and TEAD-linked projects.",
    category: "past",
    icon: Tractor,
  },

  {
    title: "Vodacom / Mezzanine Agricultural E-Vouchers",
    location: "Pietermaritzburg and Cape Town",
    period: "2023–2024",
    theme: "Empowering Farmers",
    description:
      "Supported the establishment and operation of MSN Agric redemption points, enabling farmers to exchange approved digital vouchers for agricultural commodities and production inputs.",
    role:
      "Dr Swatson conducted this work through MSN Agric, not as a direct SEAD1 contract.",
    category: "past",
    icon: BriefcaseBusiness,
  },

  {
    title: "Kwabiyela Red Meat Project",
    location: "King Cetshwayo District",
    period: "2022",
    theme: "Transforming Rural Enterprises",
    description:
      "Coordination of capacity-building support, livestock inputs, business planning and procurement of operational resources, including a farm truck.",
    role:
      "SEAD1 is listed as the contracted organisation.",
    category: "past",
    icon: Tractor,
  },

  {
    title: "Isithombo Piggery Project",
    location: "King Cetshwayo District",
    period: "2022",
    theme: "Transforming Rural Enterprises",
    description:
      "Supported piggery development through procurement of pig breeding stock, feed and a trailer, alongside technical and capacity-building support.",
    role:
      "SEAD1 is listed as the contracted organisation.",
    category: "past",
    icon: Sprout,
  },

  {
    title: "Drakensberg Beekeeping Academy",
    location: "KwaZulu-Natal",
    period: "2022",
    theme: "Transforming Rural Enterprises",
    description:
      "Supported apiculture capacity building and procurement of beehives, extractors, equipment and personal protective equipment.",
    role:
      "SEAD1 is listed as the contracted organisation.",
    category: "past",
    icon: Leaf,
  },

  {
    title: "Zibuke Community Trust",
    location: "KwaZulu-Natal",
    period: "2021–2022",
    theme: "Transforming Rural Enterprises",
    description:
      "Agricultural project coordination covering seeds, fertilisers, chemicals, farm implements, logistics and training support.",
    role:
      "SEAD1-linked assignment. Listed separately from the Malenge Farmers Association assignment.",
    category: "past",
    icon: Users,
  },

  {
    title: "Malenge Farmers Association",
    location: "KwaZulu-Natal",
    period: "2021–2022",
    theme: "Transforming Rural Enterprises",
    description:
      "Agricultural project coordination involving agricultural inputs, farm implements, logistical arrangements and training support.",
    role:
      "Separate SEAD1-linked assignment.",
    category: "past",
    icon: Sprout,
  },

  {
    title: "Farmer Production Support Units (FPSUs)",
    location: "Hluhluwe, Hlabisa, Clanso, Jikijela, Hlathikhulu and Tugela Ferry",
    period: "2019–2023",
    theme: "Transforming Rural Enterprises",
    description:
      "Support for farmer production support units through business planning, livestock and crop production inputs, transport vehicles and capacity building.",
    role:
      "Individual assignments are listed in the founder's professional CV.",
    category: "past",
    icon: Tractor,
  },

  {
    title: "Kasai Agricultural Development and Agri-City Feasibility",
    location: "Kasai, Democratic Republic of Congo",
    period: "2024",
    theme: "Unlocking Agricultural Investment",
    description:
      "A 12,000-hectare agricultural development feasibility study and business plan for integrated maize, sunflower and bean production with a proposed Agri-City concept. Scope included market analysis, financial projections, operational planning and risk analysis.",
    role:
      "Direct SEAD1 assignment for Zorea Africa. Feasibility work completed; physical development is not claimed as completed.",
    category: "past",
    icon: Building2,
  },

  {
    title: "AUDA-NEPAD AFR100 Forest and Landscape Restoration",
    location: "Malawi, Kenya, Nigeria and Tanzania",
    period: "2024–2025",
    theme: "Restoring Landscapes",
    description:
      "Supported the collection, collation, spatial-data management and analysis of forest and landscape restoration information across four African countries.",
    role:
      "Partner-delivered assignment contracted to Green Angel Innovations 88.",
    category: "past",
    icon: Trees,
  },

  {
    title: "3rd Pan-African Poultry Conference (PPC3)",
    location: "Future Africa, University of Pretoria",
    period: "22–23 September 2025",
    theme: "Connecting Africa Through Agricultural Science",
    description:
      "A continental poultry science conference supporting collaboration, research exchange and industry engagement. Activities included conference planning, partnerships, sponsorship and coordination.",
    role:
      "Dr Swatson served as WPSA-APN Secretary and chair of the local organising committee. SEAD1 was among the conference sponsors. The conference was organised through WPSA-APN, not solely by SEAD1.",
    category: "past",
    icon: Globe,
  },

  // =========================
  // UPCOMING PROJECTS
  // =========================

  {
    title: "4th Pan-African Poultry Conference (PPC4)",
    location: "University of Ghana, Accra, Ghana",
    period: "3–4 August 2027",
    theme: "Connecting Africa Through Agricultural Science",
    description:
      "An upcoming continental gathering of poultry science, industry and policy stakeholders, creating opportunities for scientific exchange, institutional partnerships and agricultural knowledge sharing.",
    role:
      "Dr Swatson participates through his role as Secretary of WPSA-APN. The conference is organised within the WPSA-APN network with Ghana host arrangements.",
    category: "upcoming",
    icon: Globe,
  },
];

// NOTE: Add confirmed projects to the ongoing category
// when their status has been verified.

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("past");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const tabs: {
    label: string;
    value: ProjectCategory;
  }[] = [
    { label: "Past Projects", value: "past" },
    { label: "Ongoing Projects", value: "ongoing" },
    { label: "Upcoming Projects", value: "upcoming" },
  ];

  return (
    <div className="projects-page">

      {/* PROJECTS HERO */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <span className="projects-label">
            OUR EXPERIENCE AND IMPACT
          </span>

          <h1>
            Transforming Ideas Into
            <span> Lasting Impact.</span>
          </h1>

          <p>
            Explore SEAD1's agricultural, environmental
            and community development portfolio.
            Our work connects practical implementation,
            research, partnerships and sustainable
            development across communities and Africa.
          </p>

          <a href="#project-portfolio" className="project-hero-btn">
            Explore Our Portfolio
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="projects-hero-image">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
            alt="Agricultural landscape"
          />
        </div>
      </section>

      {/* PORTFOLIO INTRODUCTION */}
      <section className="portfolio-intro">
        <span className="projects-label">OUR PORTFOLIO</span>
        <h2>Our Projects and Initiatives</h2>

        <p>
          SEAD1's portfolio reflects work in agricultural
          production, farmer support, rural enterprise
          development, school and community agriculture,
          environmental restoration and continental
          agricultural knowledge exchange.
        </p>

        <p className="portfolio-note">
          Project descriptions distinguish direct SEAD1
          assignments from institutional and partner-led
          work associated with our leadership.
        </p>
      </section>

      {/* PROJECT CATEGORY FILTER */}
      <section className="project-portfolio" id="project-portfolio">

        <div className="project-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={
                activeCategory === tab.value
                  ? "project-tab active"
                  : "project-tab"
              }
              onClick={() => setActiveCategory(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="project-results-heading">
          <div>
            <span className="projects-label">
              SEAD1 PROJECT PORTFOLIO
            </span>

            <h2>
              {tabs.find(
                (tab) => tab.value === activeCategory
              )?.label}
            </h2>
          </div>

          <span className="project-count">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "Project" : "Projects"}
          </span>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="project-grid">
            {filteredProjects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  className="project-card"
                  key={project.title}
                >
                  <div className="project-card-top">
                    <div className="project-card-icon">
                      <Icon size={28} />
                    </div>

                    <span className={`status-badge ${project.category}`}>
                      {project.category === "past"
                        ? "Completed / Past"
                        : project.category === "ongoing"
                        ? "Ongoing"
                        : "Upcoming"}
                    </span>
                  </div>

                  <span className="project-theme">
                    {project.theme}
                  </span>

                  <h3>{project.title}</h3>

                  <div className="project-meta">
                    <span>
                      <MapPin size={15} />
                      {project.location}
                    </span>

                    <span>
                      <CalendarDays size={15} />
                      {project.period}
                    </span>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-role">
                    <strong>SEAD1 / Leadership Role</strong>
                    <p>{project.role}</p>
                  </div>

                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-projects">
            <div className="empty-project-icon">
              <Sprout size={38} />
            </div>

            <h3>No Projects Listed Yet</h3>

            <p>
              There are currently no projects explicitly
              identified as ongoing in the supplied
              SEAD1 project portfolio. Please check back
              for updates as new project information
              becomes available.
            </p>

            <NavLink to="/contact" className="empty-project-link">
              Contact SEAD1
              <ArrowRight size={17} />
            </NavLink>
          </div>
        )}

      </section>

      {/* PROJECT PORTFOLIO CTA */}
      <section className="projects-cta">
        <div>
          <span>LET'S WORK TOGETHER</span>

          <h2>
            Have an Agricultural or Environmental
            Development Project?
          </h2>

          <p>
            Partner with SEAD1 to develop practical,
            sustainable solutions that transform
            communities and strengthen livelihoods.
          </p>
        </div>

        <NavLink to="/contact" className="projects-cta-button">
          Discuss Your Project
          <ArrowRight size={18} />
        </NavLink>
      </section>

    </div>
  );
};

export default Projects;
