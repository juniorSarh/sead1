import { useState, type ElementType } from "react";
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
  BriefcaseBusiness,
  Users,
  Handshake,
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
  icon: ElementType;
  status?: string;
  attribution?: string;
}

const projects: Project[] = [
  // PAST PROJECTS
  {
    title: "Zimisele Senior Primary School – Organic Farming Initiative",
    location: "uMlazi, KwaZulu-Natal",
    period: "2026",
    theme: "Growing Future Generations — Education & Youth",
    description:
      "Dr Harry Swatson served as technical agricultural facilitator for a participatory workshop held on 18 November 2026. Learners, educators and parents explored garden sustainability, organic production, entrepreneurship and practical seed sowing. Ten pictorial learning manuals informed the training. The project is led by Dr Nhleko, DUT ICM, with the DUT Green Campus Initiative and school participants.",
    role:
      "Leadership delivery through DUT-linked collaboration; training report available.",
    category: "past",
    icon: GraduationCap,
  },
  {
    title: "DUT School and Community Agriculture Outreach",
    location: "Greater Edendale and Nkandla, KwaZulu-Natal",
    period: "2022–2023",
    theme: "Growing Future Generations — Education & Youth",
    description:
      "Dr Swatson supported school and community gardens in Greater Edendale through training, seedling and equipment support while serving as agricultural specialist at the DUT innobiz Centre for Entrepreneurship and Innovation. He also delivered agricultural and innovation-focused training to 18 communities and institutions in Nkandla, covering vegetable production, drone applications, fourth-industrial-revolution technology and composting.",
    role:
      "Founder’s prior DUT institutional assignment, not represented as a SEAD1 contract.",
    category: "past",
    icon: GraduationCap,
  },
  {
    title: "DUT Green Campus and Student-Residence Sustainability Initiatives",
    location: "Durban, KwaZulu-Natal",
    period: "16 - 20 - 2026",
    theme: "Growing Future Generations — Education & Youth",
    description:
      "Facilitation of student-facing environmental awareness and green-campus activities, including sustainability engagement in student residences. Specific dates, activities and outputs should be confirmed before publishing this work as a full case study.",
    role: "Founder and partner engagement.",
    attribution:
      "Specific project details and outputs still require verification.",
    category: "past",
    icon: Leaf,
  },
  {
    title: "Presidential Employment Stimulus (PESI) – Agricultural Production Inputs and Farmer Support",
    location: "KwaZulu-Natal",
    period: "2022–2024",
    theme: "Empowering Farmers — Inputs & Food Security",
    description:
      "SEAD1-linked project coordination covered the procurement, supply and delivery of agricultural inputs and services, together with training, mentorship and logistical support for farmer production support units and irrigation projects in KwaZulu-Natal. The associated CV records multiple separately budgeted assignments.",
    role:
      "Roles and contracting arrangements differ across SEAD1 and TEAD-linked projects.",
    attribution:
      "Individual assignments should be distinguished and budgets should not be aggregated without verification.",
    category: "past",
    icon: Tractor,
  },
  {
    title: "Vodacom / Mezzanine Agricultural E-Vouchers with MSN Agric",
    location: "Pietermaritzburg and Cape Town, South Africa",
    period: "2023–2024",
    theme: "Empowering Farmers — Inputs & Food Security",
    description:
      "Dr Swatson supported the establishment and operation of MSN Agric redemption points, enabling farmers to exchange approved digital vouchers for agricultural commodities and production inputs.",
    role: "Work conducted through MSN Agric.",
    attribution: "This was not a direct SEAD1 contract.",
    category: "past",
    icon: Building2,
  },
  {
    title: "Kwabiyela Red Meat Project",
    location: "King Cetshwayo District, KwaZulu-Natal",
    period: "2022",
    theme: "Transforming Rural Agricultural Enterprises",
    description:
      "Coordination of capacity-building support, livestock inputs, business planning and procurement of operational resources, including a farm truck, to support the development of the red meat enterprise.",
    role: "The CV lists SEAD1 as the contracted organisation.",
    category: "past",
    icon: Tractor,
  },
  {
    title: "Isithombo Piggery Project",
    location: "King Cetshwayo District, KwaZulu-Natal",
    period: "2022",
    theme: "Transforming Rural Agricultural Enterprises",
    description:
      "Coordinated the procurement of pig breeding stock, feed and a trailer alongside technical assistance and capacity-building support for the piggery enterprise.",
    role: "The CV lists SEAD1 as the contracted organisation.",
    category: "past",
    icon: Sprout,
  },
  {
    title: "Drakensberg Beekeeping Academy",
    location: "KwaZulu-Natal",
    period: "2022",
    theme: "Transforming Rural Agricultural Enterprises",
    description:
      "Supported apiculture capacity building and the procurement of beekeeping hives, honey extractors, equipment and personal protective equipment.",
    role: "The CV lists SEAD1 as the contracted organisation.",
    category: "past",
    icon: Leaf,
  },
  {
    title: "Zibuke Community Trust and Malenge Farmers Association",
    location: "KwaZulu-Natal",
    period: "2021–2022",
    theme: "Transforming Rural Agricultural Enterprises",
    description:
      "Agricultural project coordination covering the procurement and supply of seeds, fertilisers, chemicals and farm implements, together with logistics and training support for the participating farming groups.",
    role: "Separate SEAD1-linked assignments.",
    attribution:
      "The two assignments are grouped here for the portfolio overview and can be described separately in a detailed project record.",
    category: "past",
    icon: Users,
  },
  {
    title: "Farmer Production Support Units (FPSUs)",
    location:
      "Hluhluwe, Hlabisa, Clanso, Jikijela, Hlathikhulu and Tugela Ferry",
    period: "2019–2023",
    theme: "Transforming Rural Agricultural Enterprises",
    description:
      "Support for farmer production support units through business planning, livestock and crop production inputs, transport vehicles and capacity-building activities.",
    role: "Individual assignments are listed in the founder’s CV.",
    category: "past",
    icon: Tractor,
  },
  {
    title: "Kasai Agricultural Development and Agri-City Feasibility",
    location: "Kasai, Democratic Republic of the Congo",
    period: "2024",
    theme: "Unlocking Agricultural Investment",
    description:
      "SEAD1 developed an investment-focused feasibility study and business plan for a proposed 12,000-hectare integrated agricultural development involving maize, sunflower and beans, alongside an Agri-City concept. The scope included market analysis, financial projections, operational planning and risk analysis.",
    role: "Direct SEAD1 assignment for Zorea Africa.",
    attribution:
      "The feasibility study is completed; the physical development is not claimed as completed.",
    category: "past",
    icon: BriefcaseBusiness,
  },
  {
    title: "AUDA-NEPAD AFR100 Forest and Landscape Restoration Monitoring",
    location: "Malawi, Kenya, Nigeria and Tanzania",
    period: "2024–2025",
    theme: "Restoring Landscapes — Building Climate Resilience",
    description:
      "Dr Swatson supported Green Angel Innovations 88 with the collection, collation, spatial-data management and analysis of forest and landscape restoration information across four African countries.",
    role: "Partner-delivered assignment contracted to Green Angel Innovations 88.",
    category: "past",
    icon: Trees,
  },
  {
    title: "3rd Pan-African Poultry Conference (PPC3)",
    location: "Future Africa, University of Pretoria, South Africa",
    period: "22–23 September 2025",
    theme: "Connecting Africa — Poultry Science",
    description:
      "The conference brought together poultry science, industry and policy stakeholders at Future Africa, University of Pretoria. Dr Swatson served as Secretary of WPSA-APN and chair of the local organising committee, supporting conference planning, partnerships, sponsorship, coordination and knowledge exchange. SEAD1 was among the conference sponsors.",
    role:
      "WPSA-APN conference, with SEAD1 leadership support and sponsorship.",
    attribution:
      "Conference ownership rests with WPSA-APN and its organisers; SEAD1 is not presented as the sole organiser.",
    category: "past",
    icon: Globe,
  },

  // ONGOING PROJECTS
  {
    title:
      "AGRA – Facilitation Framework for Agricultural Development Meetings and Workshops",
    location: "International Development Partnerships & Technical Advisory Services",
    period: "2026–Present",
    theme: "International Development Partnerships & Technical Advisory Services",
    description:
      "Dr Harry Kofi Swatson, Founder of SEAD1, entered into an individual facilitation consultancy framework agreement with AGRA on 30 September 2026 (Framework Agreement No. 263266). The framework enables potential assignments facilitating meetings, workshops and retreats involving stakeholder dialogue, programme planning and collaborative decision-making.",
    role:
      "Individual AGRA facilitation consultancy framework agreement held by Dr Swatson.",
    attribution:
      "This is an individual framework agreement held by Dr Swatson, not a SEAD1 corporate contract. No completed AGRA facilitation assignment is claimed. Specific work is subject to an AGRA call-off agreement and purchase order.",
    status:
      "Framework agreement status only. Delivery of specific assignments depends on future AGRA call-offs and purchase orders.",
    category: "ongoing",
    icon: Handshake,
  },

  // UPCOMING PROJECTS
  {
    title: "4th Pan-African Poultry Conference (PPC4)",
    location: "University of Ghana, Accra, Ghana",
    period: "3–4 August 2027",
    theme: "Connecting Africa — Poultry Science",
    description:
      "An upcoming continental convening of poultry science, industry and policy stakeholders, organised within the WPSA-APN network with Ghana host arrangements. Dr Swatson participates through his role as WPSA-APN Secretary.",
    role:
      "Upcoming conference participation through Dr Swatson’s WPSA-APN Secretary role.",
    attribution:
      "The conference is upcoming and must not be represented as already delivered.",
    category: "upcoming",
    icon: Globe,
  },
];

const categoryLabels: Record<ProjectCategory, string> = {
  past: "Past Projects",
  ongoing: "Ongoing Projects",
  upcoming: "Upcoming Projects",
};

function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("past");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const projectCounts: Record<ProjectCategory, number> = {
    past: projects.filter((project) => project.category === "past").length,
    ongoing: projects.filter((project) => project.category === "ongoing")
      .length,
    upcoming: projects.filter((project) => project.category === "upcoming")
      .length,
  };

  return (
    <main className="projects-page">
      {/* HERO SECTION */}
      <section className="projects-hero">
        <div className="projects-hero-overlay">
          <div className="projects-container projects-hero-content">
            <span className="projects-eyebrow">
              Our Experience and Impact
            </span>

            <h1>Our Projects</h1>

            <p>
              From strengthening rural agricultural enterprises to advancing
              environmental sustainability, SEAD1 contributes to initiatives
              that transform land, livelihoods and learning.
            </p>

            <a href="#project-portfolio" className="projects-hero-button">
              Explore Our Portfolio
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="projects-intro">
        <div className="projects-container">
          <div className="projects-intro-content">
            <span className="section-kicker">Our Work</span>
            <h2>
              Practical Solutions. <span>Lasting Impact.</span>
            </h2>

            <p>
              SEAD1's project experience spans agricultural development,
              farmer support, enterprise development, youth education,
              environmental management and international collaboration.
              Our portfolio includes direct SEAD1 assignments as well as
              professional work undertaken by our founder through previous
              institutional and partner engagements.
            </p>

            <p>
              We distinguish these different forms of involvement so that
              project roles and achievements are represented accurately.
            </p>
          </div>

          <div className="projects-summary">
            <div className="projects-summary-item">
              <Sprout size={28} />
              <strong>{projectCounts.past}</strong>
              <span>Past Projects</span>
            </div>

            <div className="projects-summary-item">
              <Handshake size={28} />
              <strong>{projectCounts.ongoing}</strong>
              <span>Ongoing Frameworks</span>
            </div>

            <div className="projects-summary-item">
              <Globe size={28} />
              <strong>{projectCounts.upcoming}</strong>
              <span>Upcoming Initiatives</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT PORTFOLIO */}
      <section className="project-portfolio" id="project-portfolio">
        <div className="projects-container">
          <div className="project-section-heading">
            <span className="section-kicker">Project Portfolio</span>
            <h2>Explore Our Projects</h2>
            <p>
              Browse our past work, current engagements and upcoming
              initiatives.
            </p>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="project-tabs" role="tablist" aria-label="Project categories">
            {(Object.keys(categoryLabels) as ProjectCategory[]).map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  className={`project-tab ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {categoryLabels[category]}
                  <span className="project-tab-count">
                    {projectCounts[category]}
                  </span>
                </button>
              )
            )}
          </div>

          {/* PROJECT CARDS */}
          <div className="projects-grid">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <article
                  className="project-card"
                  key={`${project.category}-${project.title}`}
                >
                  <div className="project-card-top">
                    <div className="project-card-icon">
                      <ProjectIcon size={27} strokeWidth={1.8} />
                    </div>

                    <span className={`status-badge ${project.category}`}>
                      {categoryLabels[project.category]}
                    </span>
                  </div>

                  <div className="project-card-content">
                    <span className="project-theme">{project.theme}</span>

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
                      <strong>Role / Attribution</strong>
                      <p>{project.role}</p>
                    </div>

                    {project.status && (
                      <div className="project-status">
                        <strong>Framework Status</strong>
                        <p>{project.status}</p>
                      </div>
                    )}

                    {project.attribution && (
                      <p className="project-attribution">
                        {project.attribution}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="projects-empty">
              <Sprout size={42} />
              <h3>No projects listed in this category yet</h3>
              <p>
                New project information will be added here as it becomes
                available.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="projects-cta">
        <div className="projects-container projects-cta-content">
          <div>
            <span className="projects-eyebrow">Work With SEAD1</span>
            <h2>Let's Build Sustainable Solutions Together</h2>
            <p>
              Partner with us to turn agricultural and environmental
              development ambitions into practical initiatives.
            </p>
          </div>

          <NavLink to="/contact" className="projects-cta-button">
            Get in Touch
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default Projects;