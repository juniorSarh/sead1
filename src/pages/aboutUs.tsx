import { NavLink } from "react-router-dom";
import {
  Sprout,
  Leaf,
  Handshake,
  ShieldCheck,
  Lightbulb,
  Users,
  Target,
  Eye,
  GraduationCap,
  BriefcaseBusiness,
  Globe,
  ArrowRight,
  Mail,
  CheckCircle2,
  Tractor,
  Trees,
  Microscope,
  Building2,
} from "lucide-react";

import "./About.css";

const teamMembers = [
  {
    initials: "HS",
    name: "Dr Harry Kofi Swatson",
    role: "Founder, CEO & Managing Director",
    description:
      "An agricultural scientist and strategic leader with over 30 years of experience in skills development, programme delivery, project management and agricultural partnerships.",
  },
  {
    initials: "JM",
    name: "Jeffrey Mthwalo",
    role: "Technical Adviser – BEE & Food Security",
    description:
      "Provides specialist technical advice and support for food-security initiatives and inclusive agricultural development programmes.",
  },
  {
    initials: "XZ",
    name: "Xolani Zulu",
    role: "Financial Adviser",
    description:
      "Provides financial and commercial advisory support for SEAD1's organisational and development initiatives.",
  },
  {
    initials: "SG",
    name: "Sabelo Gumede",
    role: "IT Support & Digital Systems",
    description:
      "Supports digital platforms, website development and the organisation's information technology requirements.",
  },
  {
    initials: "TG",
    name: "Thulisile Audrey Gobhozi",
    role: "Capacity & Skills Development Officer",
    description:
      "Supports agricultural training, capacity-development coordination and the implementation of project activities.",
  },
];

const programmeAssociates = [
  {
    name: "Dr Mary-Ann N. Nhleko",
    role: "Quality Assurance / Internal Moderation",
  },
  {
    name: "Fikani Mthembu",
    role: "Programme Management and Agricultural Facilitation",
  },
  {
    name: "Nkosinathi “Thami” Sithole",
    role: "Senior Assessment / Facilitation",
  },
  {
    name: "Henry Cook",
    role: "Senior Assessment / Moderation",
  },
  {
    name: "Thobeka Sithole",
    role: "Practical Agricultural Facilitation",
  },
  {
    name: "Londiwe E. Zuma",
    role: "Agricultural Training Facilitation",
  },
  {
    name: "Lwazi Xolani Zulu",
    role: "Administration and Learner Records",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Promoting responsible agricultural practices and environmental stewardship for future generations.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Conducting our work with honesty, transparency, accountability and professionalism.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description:
      "Building the knowledge, skills and confidence of individuals, farmers and communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Applying practical, creative and evidence-informed solutions to development challenges.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "Building meaningful partnerships with communities, institutions and development organisations.",
  },
  {
    icon: CheckCircle2,
    title: "Excellence",
    description:
      "Striving for quality, measurable impact and continuous improvement in everything we do.",
  },
];

const experience = [
  {
    icon: Tractor,
    title: "Agricultural Development",
    description:
      "Farmer support initiatives, production inputs, agricultural infrastructure and capacity building.",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills Development",
    description:
      "School agriculture programmes, practical training, learner development and community outreach.",
  },
  {
    icon: Globe,
    title: "International Development",
    description:
      "Agricultural feasibility planning and development initiatives in the Democratic Republic of Congo.",
  },
  {
    icon: Trees,
    title: "Environmental Sustainability",
    description:
      "Forest and landscape restoration monitoring, spatial data management and environmental development.",
  },
  {
    icon: Microscope,
    title: "Research & Knowledge Exchange",
    description:
      "Applied research, technical collaboration and participation in agricultural science networks.",
  },
  {
    icon: Building2,
    title: "Strategic Partnerships",
    description:
      "Working with universities, development organisations, public institutions and private-sector partners.",
  },
];

function About() {
  return (
    <main className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-overlay" />

        <div className="about-container about-hero-content">
          <span className="about-eyebrow about-hero-eyebrow">
            Who We Are
          </span>

          <h1>
            About <span>SEAD1</span>
          </h1>

          <p className="about-hero-subtitle">
            Sankofa Environmental and Agricultural Development
          </p>

          <p className="about-hero-description">
            Transforming Africa's Land, Livelihoods and Learning through
            sustainable agriculture, environmental development, practical
            education and strategic partnerships.
          </p>

          <div className="about-hero-buttons">
            <NavLink to="/projects" className="about-btn about-btn-primary">
              Explore Our Projects
              <ArrowRight size={18} />
            </NavLink>

            <NavLink to="/contact" className="about-btn about-btn-outline">
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-intro section-padding">
        <div className="about-container about-intro-grid">
          <div className="about-intro-image">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85"
              alt="Green agricultural fields and sustainable farming landscape"
            />

            <div className="about-image-caption">
              <Sprout size={25} />
              <div>
                <strong>Growing Sustainable Futures</strong>
                <span>People, Agriculture and the Environment</span>
              </div>
            </div>
          </div>

          <div className="about-intro-content">
            <span className="about-eyebrow">About Our Organisation</span>

            <h2>
              Who <span>We Are</span>
            </h2>

            <p>
              Sankofa Environmental and Agricultural Development (SEAD1) is a
              South African agricultural and environmental development
              consultancy focused on sustainable agriculture, community
              empowerment, applied research, capacity building and project
              delivery.
            </p>

            <p>
              Led by Dr Harry Kofi Swatson, SEAD1 combines decades of
              professional expertise with a flexible network of advisers and
              specialist practitioners to deliver practical, development-
              focused solutions.
            </p>

            <p>
              Our approach connects research, practical training, procurement
              and supply-chain coordination, enterprise planning and
              stakeholder engagement. We work to turn development ideas into
              meaningful outcomes for farmers, communities and institutions.
            </p>

            <div className="about-intro-highlights">
              <div>
                <CheckCircle2 size={19} />
                <span>Sustainable Agricultural Development</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Community Empowerment</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Research and Capacity Building</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Strategic Project Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="about-purpose section-padding">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">Our Purpose</span>
            <h2>Our Vision & Mission</h2>
            <p>
              Our purpose is rooted in building resilient communities,
              strengthening agricultural systems and supporting sustainable
              development.
            </p>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Eye size={30} />
              </div>

              <h3>Our Vision</h3>

              <p>
                To be a trusted African leader in sustainable agricultural
                and environmental development, transforming communities into
                resilient, productive and economically empowered societies.
              </p>
            </article>

            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Target size={30} />
              </div>

              <h3>Our Mission</h3>

              <p>
                To advance food security, environmental sustainability and
                inclusive economic development through innovative
                agricultural solutions, practical education, research,
                strategic partnerships and effective project implementation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-values section-padding">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">What Guides Us</span>
            <h2>Our Core Values</h2>
            <p>
              The principles that shape our relationships, decisions and
              commitment to development.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="about-team section-padding">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">The People Behind SEAD1</span>
            <h2>Meet Our Team</h2>
            <p>
              Our work is driven by a team of professionals and specialist
              advisers bringing together knowledge, experience and a shared
              commitment to sustainable development.
            </p>
          </div>

          <div className="about-team-grid">
            {teamMembers.map((member) => (
              <article className="about-team-card" key={member.name}>
                <div className="about-team-card-image">
                  <div className="about-team-initials">
                    {member.initials}
                  </div>
                </div>

                <div className="about-team-card-content">
                  <h3>{member.name}</h3>

                  <span className="about-team-role">{member.role}</span>

                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="about-team-note">
            SEAD1 works with a flexible network of professionals and
            specialist advisers. Roles and engagements may vary according
            to organisational and project requirements.
          </p>
        </div>
      </section>

      {/* PROGRAMME ASSOCIATES */}
      <section className="about-associates section-padding">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">Our Extended Network</span>
            <h2>Technical Training & Programme Associates</h2>
            <p>
              We draw on specialist programme and training expertise to
              support quality learning, assessment, facilitation and
              agricultural project delivery.
            </p>
          </div>

          <div className="about-associates-grid">
            {programmeAssociates.map((associate) => (
              <article className="about-associate-card" key={associate.name}>
                <div className="about-associate-icon">
                  <GraduationCap size={23} />
                </div>

                <div>
                  <h3>{associate.name}</h3>
                  <p>{associate.role}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="about-associates-note">
            Programme associates may be engaged through specific
            training-provider, project-delivery or facilitation arrangements.
            Their inclusion here does not imply permanent employment by SEAD1.
          </p>
        </div>
      </section>

      {/* STRATEGIC COLLABORATOR */}
      {/* <section className="about-collaborator section-padding">
        <div className="about-container">
          <div className="about-collaborator-card">
            <div className="about-collaborator-icon">
              <Globe size={35} />
            </div>

            <div className="about-collaborator-content">
              <span className="about-eyebrow">
                Specialist Collaboration
              </span>

              <h2>Strategic Technical Collaborator</h2>

              <h3>Dr Kofi Gyan Quartey</h3>

              <span className="about-collaborator-role">
                Environmental and Geospatial Development Collaborator
              </span>

              <p>
                Dr Kofi Gyan Quartey has collaborated with Dr Swatson on
                development assignments involving agricultural planning,
                environmental development and geospatial expertise.
              </p>

              <p>
                His collaboration includes the SEAD1 Kasai agricultural
                feasibility assignment in the Democratic Republic of Congo
                and association with AUDA-NEPAD AFR100 forest and landscape
                restoration work undertaken through Green Angel Innovations
                88.
              </p>

              <p className="about-collaborator-note">
                This collaboration reflects a specialist working
                relationship and does not imply permanent employment by
                SEAD1.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* EXPERIENCE */}
      <section className="about-experience section-padding">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">Our Work in Action</span>
            <h2>Experience in Development</h2>
            <p>
              Our experience spans agricultural production, education,
              environmental sustainability, research and strategic
              development partnerships.
            </p>
          </div>

          <div className="about-experience-grid">
            {experience.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="about-experience-card"
                  key={item.title}
                >
                  <div className="about-experience-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="about-experience-footer">
            <p>
              Our experience includes farmer support initiatives under the
              Presidential Employment Stimulus, MSN Agric and Vodacom/
              Mezzanine digital agricultural e-vouchers, DUT school and
              community agriculture initiatives, DRC agricultural planning,
              AUDA-NEPAD AFR100 restoration work and Pan-African poultry
              science engagements.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta">
        <div className="about-container about-cta-content">
          <div>
            <span className="about-eyebrow">Let's Work Together</span>

            <h2>
              Building Sustainable Futures Through Partnership
            </h2>

            <p>
              Whether you are a development organisation, government
              institution, university, agricultural enterprise or community
              group, we welcome opportunities to collaborate.
            </p>
          </div>

          <div className="about-cta-actions">
            <NavLink to="/contact" className="about-btn about-btn-light">
              <Mail size={18} />
              Contact SEAD1
            </NavLink>

            <NavLink to="/projects" className="about-btn about-btn-cta-outline">
              View Our Projects
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;