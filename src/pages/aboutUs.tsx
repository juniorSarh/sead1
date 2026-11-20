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
  Award,
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

const values = [
  {
    title: "Sustainability",
    description:
      "Protecting natural resources while supporting productive livelihoods and long-term development.",
    icon: Leaf,
  },
  {
    title: "Integrity",
    description:
      "Acting transparently, responsibly and accountably in our work and partnerships.",
    icon: ShieldCheck,
  },
  {
    title: "Empowerment",
    description:
      "Developing skills, confidence and economic opportunities for people and communities.",
    icon: Users,
  },
  {
    title: "Innovation",
    description:
      "Applying research, technology and practical solutions to development challenges.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description:
      "Working with communities, government, institutions and industry to achieve shared goals.",
    icon: Handshake,
  },
  {
    title: "Excellence",
    description:
      "Striving to deliver professional, useful and verifiable results.",
    icon: Award,
  },
];

const coreTeam = [
  {
    name: "Dr Harry Kofi Swatson",
    position: "Founder, Chief Executive Officer & Managing Director",
    description:
      "Agricultural scientist and strategic leader with more than 30 years of experience in skills development, programme delivery, project management and agricultural partnerships. Secretary of WPSA–African Poultry Network and chair of the PPC3 local organising committee.",
    icon: Sprout,
    featured: true,
  },
  {
    name: "Jeffrey Mthwalo",
    position: "Technical Adviser – BEE & Food Security",
    description:
      "Provides specialist advice for food-security and development initiatives.",
    icon: Leaf,
  },
  {
    name: "Xolani Zulu",
    position: "Financial Adviser",
    description:
      "Supports financial and commercial advisory requirements.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Sabelo Gumede",
    position: "IT Support & Digital Systems",
    description:
      "Supports digital platforms, website and information-technology needs.",
    icon: Building2,
  },
  {
    name: "Thulisile Audrey Gobhozi",
    position: "Capacity & Skills Development Officer",
    description:
      "Supports agricultural training, capacity-development coordination and project activities.",
    icon: GraduationCap,
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

const experienceAreas = [
  {
    title: "Farmer Support & Food Security",
    description:
      "Contributions to farmer-support initiatives under the Presidential Employment Stimulus, including agricultural inputs, training and project coordination.",
    icon: Tractor,
  },
  {
    title: "Digital Agricultural Innovation",
    description:
      "Professional involvement in digital agricultural e-voucher distribution through MSN Agric and Vodacom/Mezzanine.",
    icon: Microscope,
  },
  {
    title: "Education & Community Development",
    description:
      "Contributions to DUT school-garden, community agriculture and Green Campus initiatives.",
    icon: GraduationCap,
  },
  {
    title: "Agricultural Investment Planning",
    description:
      "Agricultural development planning and feasibility work in Kasai, Democratic Republic of the Congo.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Environmental Restoration",
    description:
      "Technical support for AFR100 forest and landscape restoration monitoring across African countries.",
    icon: Trees,
  },
  {
    title: "African Agricultural Partnerships",
    description:
      "Poultry science engagement through WPSA–APN, including PPC3 in Pretoria in 2025 and the planned PPC4 in Ghana in 2027.",
    icon: Globe,
  },
];

function About() {
  return (
    <main className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-container about-hero-content">
            <span className="about-eyebrow">Get to Know Us</span>

            <h1>About SEAD1</h1>

            <h2>
              Transforming Africa’s Land, Livelihoods and Learning
            </h2>

            <p>
              Advancing sustainable agriculture, environmental development
              and empowered communities through knowledge, partnerships and
              practical solutions.
            </p>

            <NavLink to="/contact" className="about-primary-button">
              Partner With Us
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-who">
        <div className="about-container about-who-grid">
          <div className="about-who-image">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
              alt="Agricultural landscape representing sustainable farming and development"
            />

            <div className="about-image-caption">
              <Sprout size={25} />
              <div>
                <strong>Growing Sustainable Futures</strong>
                <span>Agriculture • Environment • Community</span>
              </div>
            </div>
          </div>

          <div className="about-who-content">
            <span className="about-section-label">Who We Are</span>

            <h2>
              Building Sustainable Futures Through
              <span> Agriculture and Development</span>
            </h2>

            <p>
              Sankofa Environmental and Agricultural Development (SEAD1) is
              a South African agricultural and environmental development
              consultancy focused on sustainable agriculture, community
              empowerment, applied research, capacity building and project
              delivery.
            </p>

            <p>
              Led by Dr Harry Kofi Swatson, SEAD1 combines decades of
              professional agricultural development expertise with a
              flexible network of advisers and specialist practitioners.
            </p>

            <p>
              Our work links research, practical training, procurement and
              supply-chain coordination, enterprise planning and
              stakeholder engagement to advance food security and
              sustainable livelihoods.
            </p>

            <div className="about-who-highlights">
              <div>
                <CheckCircle2 size={19} />
                <span>Sustainable agricultural development</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Community empowerment and skills development</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Research, partnerships and project delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="about-purpose">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">Our Purpose</span>
            <h2>Driven by a Clear Vision and Mission</h2>
            <p>
              Our direction is guided by a commitment to inclusive
              development, environmental responsibility and lasting impact.
            </p>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Eye size={30} />
              </div>

              <span>Our Vision</span>

              <h3>A Sustainable and Empowered Africa</h3>

              <p>
                To be a trusted African leader in sustainable agricultural
                and environmental development, transforming communities
                into resilient, productive and economically empowered
                societies.
              </p>
            </article>

            <article className="about-purpose-card mission-card">
              <div className="about-purpose-icon">
                <Target size={30} />
              </div>

              <span>Our Mission</span>

              <h3>Turning Knowledge into Action</h3>

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

      {/* VALUES */}
      <section className="about-values">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">What Guides Us</span>
            <h2>Our Core Values</h2>
            <p>
              The principles that shape our decisions, partnerships and
              approach to development.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const ValueIcon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-icon">
                    <ValueIcon size={26} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team" id="our-team">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">The People Behind SEAD1</span>
            <h2>Meet Our Team</h2>
            <p>
              SEAD1 is led by a core management and support team and engages
              additional specialists for specific assignments.
            </p>
          </div>

          <div className="about-team-note">
            <Users size={21} />
            <p>
              The listings below distinguish named team functions from
              project-based technical assignments; they should not be taken
              as a legal employment register.
            </p>
          </div>

          {/* LEADERSHIP AND CORE SUPPORT */}
          <div className="about-team-subheading">
            <span className="about-section-label">Leadership and Core Support</span>
            <h3>Our Management and Support Team</h3>
          </div>

          <div className="about-core-team-grid">
            {coreTeam.map((member) => {
              const MemberIcon = member.icon;

              return (
                <article
                  className={`about-member-card ${
                    member.featured ? "featured-member" : ""
                  }`}
                  key={member.name}
                >
                  <div className="about-member-icon">
                    <MemberIcon size={29} />
                  </div>

                  {member.featured && (
                    <span className="about-member-tag">Founder & Leadership</span>
                  )}

                  <h4>{member.name}</h4>
                  <span className="about-member-position">
                    {member.position}
                  </span>
                  <p>{member.description}</p>
                </article>
              );
            })}
          </div>

          {/* TECHNICAL ASSOCIATES */}
          <div className="about-team-subheading associates-heading">
            <span className="about-section-label">
              Technical Training and Programme Associates
            </span>
            <h3>Our Specialist Associates</h3>
            <p>
              Specialist functions drawn from training-provider and
              project-delivery arrangements.
            </p>
          </div>

          <div className="about-associates-table-wrapper">
            <table className="about-associates-table">
              <thead>
                <tr>
                  <th>Team Member</th>
                  <th>Programme Function</th>
                </tr>
              </thead>

              <tbody>
                {programmeAssociates.map((associate) => (
                  <tr key={associate.name}>
                    <td>{associate.name}</td>
                    <td>{associate.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="about-associates-disclaimer">
            These specialist functions are drawn from training-provider and
            project-delivery arrangements. Individual engagements and current
            titles should be checked before publication as permanent SEAD1
            staff.
          </p>

          {/* STRATEGIC COLLABORATOR */}
          <div className="about-team-subheading collaborator-heading">
            <span className="about-section-label">
              Strategic Technical Collaborators
            </span>
            <h3>Working Through Specialist Partnerships</h3>
          </div>

          <article className="about-collaborator-card">
            <div className="about-collaborator-icon">
              <Handshake size={30} />
            </div>

            <div>
              <h4>Dr Kofi Gyan Quartey</h4>
              <span>Environmental and Geospatial Development Collaborator</span>

              <p>
                Worked with Dr Swatson on SEAD1’s Kasai (DRC) agricultural
                feasibility assignment and is associated with AUDA-NEPAD
                AFR100 work contracted through Green Angel Innovations 88.
              </p>

              <p className="about-collaborator-note">
                This is a collaboration rather than a confirmed permanent
                SEAD1 employment appointment.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="about-experience">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">Our Experience in Action</span>
            <h2>Making a Difference Through Practical Work</h2>
            <p>
              Our leadership and collaborators have contributed to
              agricultural, environmental, educational and partnership
              initiatives across Africa.
            </p>
          </div>

          <div className="about-experience-grid">
            {experienceAreas.map((area) => {
              const AreaIcon = area.icon;

              return (
                <article className="about-experience-card" key={area.title}>
                  <div className="about-experience-icon">
                    <AreaIcon size={27} />
                  </div>

                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              );
            })}
          </div>

          <div className="about-project-link">
            <p>
              Discover more about the initiatives and professional
              engagements represented in our portfolio.
            </p>

            <NavLink to="/projects">
              Explore Our Projects
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta">
        <div className="about-container about-cta-content">
          <div>
            <span className="about-eyebrow">Work With Us</span>
            <h2>Let's Create Lasting Development Outcomes</h2>
            <p>
              We collaborate with government agencies, development
              organisations, universities, agricultural enterprises and
              community groups to turn practical ideas into lasting
              development outcomes.
            </p>
          </div>

          <div className="about-cta-actions">
            <NavLink to="/contact" className="about-primary-button">
              Contact SEAD1
              <ArrowRight size={18} />
            </NavLink>

            <a
              href="mailto:Harry.sead1@gmail.com"
              className="about-email-link"
            >
              <Mail size={17} />
              Harry.sead1@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;