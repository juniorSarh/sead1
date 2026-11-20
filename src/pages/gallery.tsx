
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  X,
  MapPin,
  Calendar,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./Gallery.css";

type ProjectCategory =
  | "Past Projects"
  | "Ongoing Projects"
  | "Upcoming Projects";

interface GalleryProject {
  id: number;
  title: string;
  location: string;
  date: string;
  category: ProjectCategory;
  description: string;
  images: string[];
  imageAlt: string;
}

const imageUrl = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=85`;

/*
 * These are illustrative stock-image collections.
 * Replace the image IDs with actual SEAD1 project photographs when available.
 */
const agriculturalImages = [
  "photo-1500382017468-9049fed747ef",
  "photo-1499529112087-3cb3b73cec95",
  "photo-1500937386664-56d1dfef3854",
  "photo-1592982537447-6f2a6a0a5f9d",
  "photo-1523742811031-4c4e8e1c1b3c",
  "photo-1500595046743-cd271d694d30",
  "photo-1472396961693-142e6e269027",
  "photo-1586771107445-d3ca888129ce",
];

const communityImages = [
  "photo-1497366754035-f200968a6e72",
  "photo-1521737711867-e3b97375f902",
  "photo-1516321318423-f06f85e504b3",
  "photo-1523240795612-9a054b0db644",
  "photo-1517245386807-bb43f82c33c4",
  "photo-1523580494863-6f3031224c94",
  "photo-1524178232363-1fb2b075b655",
  "photo-1552664730-d307ca884978",
];

const environmentalImages = [
  "photo-1441974231531-c6227db76b6e",
  "photo-1448375240586-882707db888b",
  "photo-1473448912268-2022ce9509d8",
  "photo-1511497584788-876760111969",
  "photo-1500530855697-b586d89ba3ee",
  "photo-1518837695005-2083093ee35b",
  "photo-1470071459604-3b5ec3a7fe05",
  "photo-1501785888041-af3ef285b470",
];

const livestockImages = [
  "photo-1516467508483-a7212febe31a",
  "photo-1500595046743-cd271d694d30",
  "photo-1516934024742-b461fba47600",
  "photo-1524024973431-2ad916746881",
  "photo-1546445317-29f4545e9d53",
  "photo-1484557985045-edf25e08da73",
  "photo-1516467508483-a7212febe31a",
  "photo-1500382017468-9049fed747ef",
];

const poultryImages = [
  "photo-1548550023-2bdb3c5beed7",
  "photo-1569288052389-dac9b01ac6b8",
  "photo-1493962853295-0fd70327578a",
  "photo-1546445317-29f4545e9d53",
  "photo-1500595046743-cd271d694d30",
  "photo-1516467508483-a7212febe31a",
  "photo-1500382017468-9049fed747ef",
  "photo-1589923188900-85dae523342b",
];

const projectImages = (
  featuredImage: string,
  imagePool: string[],
  offset: number
): string[] => {
  const additionalImages = Array.from({ length: 4 }, (_, index) => {
    return imagePool[(offset + index) % imagePool.length];
  });

  return [featuredImage, ...additionalImages].map(imageUrl);
};

const projects: GalleryProject[] = [
  {
    id: 1,
    title: "Zimisele Senior Primary School",
    location: "uMlazi, KwaZulu-Natal",
    date: "2026",
    category: "Past Projects",
    description:
      "An organic farming education initiative supported by DUT ICM. The programme introduced learners, educators and parents to practical food production through a workshop, agricultural learning activities and pictorial learning manuals.",
    images: projectImages(
      "photo-1472396961693-142e6e269027",
      communityImages,
      0
    ),
    imageAlt: "School and community agricultural learning activities",
  },
  {
    id: 2,
    title: "DUT School and Community Agriculture Outreach",
    location: "Greater Edendale and Nkandla, KwaZulu-Natal",
    date: "2022–2023",
    category: "Past Projects",
    description:
      "School and community garden development, agricultural training, and the provision of seedlings and equipment. Activities included training across 18 communities and institutions in vegetable production, composting and emerging agricultural technologies.",
    images: projectImages(
      "photo-1499529112087-3cb3b73cec95",
      agriculturalImages,
      1
    ),
    imageAlt: "Community agriculture and food gardening",
  },
  {
    id: 3,
    title: "DUT Green Campus and Student-Residence Sustainability",
    location: "Durban, KwaZulu-Natal",
    date: "Project dates to be confirmed",
    category: "Past Projects",
    description:
      "Environmental awareness and green-campus activities supporting sustainability engagement within the university and student-residence environment.",
    images: projectImages(
      "photo-1441974231531-c6227db76b6e",
      environmentalImages,
      0
    ),
    imageAlt: "Green campus and environmental sustainability",
  },
  {
    id: 4,
    title: "Presidential Employment Stimulus Initiative (PESI)",
    location: "KwaZulu-Natal",
    date: "2022–2024",
    category: "Past Projects",
    description:
      "Agricultural input coordination and farmer support activities, including procurement and delivery of inputs, training, mentorship, production support and irrigation-related assistance.",
    images: projectImages(
      "photo-1500382017468-9049fed747ef",
      agriculturalImages,
      2
    ),
    imageAlt: "Agricultural production and farmer support",
  },
  {
    id: 5,
    title: "Vodacom / Mezzanine Agricultural E-Vouchers",
    location: "Pietermaritzburg and Cape Town",
    date: "2023–2024",
    category: "Past Projects",
    description:
      "Support for MSN Agric redemption points, enabling participating farmers to redeem digital agricultural vouchers for approved commodities and farming inputs.",
    images: projectImages(
      "photo-1586771107445-d3ca888129ce",
      communityImages,
      2
    ),
    imageAlt: "Agricultural technology and digital farmer services",
  },
  {
    id: 6,
    title: "Kwabiyela Red Meat Project",
    location: "King Cetshwayo District, KwaZulu-Natal",
    date: "2022",
    category: "Past Projects",
    description:
      "Livestock-sector development support involving capacity building, livestock inputs, business planning and the provision of a farm truck.",
    images: projectImages(
      "photo-1500595046743-cd271d694d30",
      livestockImages,
      0
    ),
    imageAlt: "Livestock farming and red meat production",
  },
  {
    id: 7,
    title: "Isithombo Piggery Project",
    location: "King Cetshwayo District, KwaZulu-Natal",
    date: "2022",
    category: "Past Projects",
    description:
      "Support for piggery development through breeding stock, feed, a trailer and technical and capacity-building assistance.",
    images: projectImages(
      "photo-1516467508483-a7212febe31a",
      livestockImages,
      2
    ),
    imageAlt: "Livestock and piggery farming",
  },
  {
    id: 8,
    title: "Drakensberg Beekeeping Academy",
    location: "KwaZulu-Natal",
    date: "2022",
    category: "Past Projects",
    description:
      "Apiculture training and support, including the procurement of beehives, honey extractors, protective clothing and other beekeeping equipment.",
    images: projectImages(
      "photo-1587049352846-4a222e784d38",
      environmentalImages,
      2
    ),
    imageAlt: "Beekeeping and honey production",
  },
  {
    id: 9,
    title: "Zibuke Community Trust",
    location: "KwaZulu-Natal",
    date: "2021–2022",
    category: "Past Projects",
    description:
      "Agricultural project coordination and farmer support, including seeds, fertilisers, chemicals, implements, logistics and training.",
    images: projectImages(
      "photo-1592982537447-6f2a6a0a5f9d",
      agriculturalImages,
      3
    ),
    imageAlt: "Community agricultural development",
  },
  {
    id: 10,
    title: "Malenge Farmers Association",
    location: "KwaZulu-Natal",
    date: "2021–2022",
    category: "Past Projects",
    description:
      "Agricultural input and production support, including farming implements, logistics and training for participating farmers.",
    images: projectImages(
      "photo-1523742811031-4c4e8e1c1b3c",
      agriculturalImages,
      4
    ),
    imageAlt: "Farmer association and crop production",
  },
  {
    id: 11,
    title: "Farmer Production Support Units (FPSUs)",
    location:
      "Hluhluwe, Hlabisa, Clanso, Jikijela, Hlathikhulu and Tugela Ferry",
    date: "2019–2023",
    category: "Past Projects",
    description:
      "Support for farmer production units through business planning, crop and livestock inputs, transport vehicles and capacity-building activities.",
    images: projectImages(
      "photo-1500937386664-56d1dfef3854",
      agriculturalImages,
      5
    ),
    imageAlt: "Farmer production support and agricultural development",
  },
  {
    id: 12,
    title: "Kasai Agricultural Development and Agri-City Feasibility",
    location: "Kasai, Democratic Republic of the Congo",
    date: "2024",
    category: "Past Projects",
    description:
      "A feasibility study and business plan for a proposed 12,000-hectare agricultural development and Agri-City concept, covering crops such as maize, sunflower and beans, alongside market, financial, operational and risk analysis.",
    images: projectImages(
      "photo-1499529112087-3cb3b73cec95",
      environmentalImages,
      4
    ),
    imageAlt: "Agricultural land and development planning",
  },
  {
    id: 13,
    title: "AUDA-NEPAD AFR100 Forest and Landscape Restoration",
    location: "Malawi, Kenya, Nigeria and Tanzania",
    date: "2024–2025",
    category: "Past Projects",
    description:
      "Data collection, collation, spatial data management and analysis supporting forest and landscape restoration monitoring across participating African countries.",
    images: projectImages(
      "photo-1448375240586-882707db888b",
      environmentalImages,
      1
    ),
    imageAlt: "Forest restoration and environmental conservation",
  },
  {
    id: 14,
    title: "3rd Pan-African Poultry Conference (PPC3)",
    location: "Future Africa, University of Pretoria, South Africa",
    date: "22–23 September 2025",
    category: "Past Projects",
    description:
      "Conference planning, partnership development, sponsorship and coordination. Dr Harry Kofi Swatson contributed through his WPSA–African Poultry Network role and chaired the local organising committee. SEAD1 was a conference sponsor.",
    images: projectImages(
      "photo-1548550023-2bdb3c5beed7",
      poultryImages,
      0
    ),
    imageAlt: "Poultry science and agricultural conference",
  },
  {
    id: 15,
    title: "AGRA Facilitation Framework",
    location: "Africa",
    date: "2026–Present",
    category: "Ongoing Projects",
    description:
      "Dr Harry Kofi Swatson entered into an individual facilitation consultancy framework agreement with AGRA on 30 September 2026. The framework provides for potential meeting, workshop and retreat facilitation assignments. Specific work depends on an AGRA call-off agreement and purchase order; this is an individual framework agreement, not a completed SEAD1 corporate project.",
    images: projectImages(
      "photo-1516321318423-f06f85e504b3",
      communityImages,
      3
    ),
    imageAlt: "Workshop facilitation and stakeholder engagement",
  },
  {
    id: 16,
    title: "4th Pan-African Poultry Conference (PPC4)",
    location: "University of Ghana, Accra, Ghana",
    date: "3–4 August 2027",
    category: "Upcoming Projects",
    description:
      "The upcoming fourth Pan-African Poultry Conference will bring together stakeholders in poultry science and development. Dr Swatson participates through his WPSA–African Poultry Network role, alongside the network and Ghana host arrangements.",
    images: projectImages(
      "photo-1548550023-2bdb3c5beed7",
      poultryImages,
      2
    ),
    imageAlt: "Poultry farming and conference activities",
  },
];

const categories: ("All Projects" | ProjectCategory)[] = [
  "All Projects",
  "Past Projects",
  "Ongoing Projects",
  "Upcoming Projects",
];

const thumbnailStyle: React.CSSProperties = {
  width: "100%",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  display: "block",
};

const thumbnailButtonStyle: React.CSSProperties = {
  flex: "1 1 0",
  minWidth: 0,
  padding: 0,
  border: "2px solid transparent",
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
  background: "transparent",
};

const thumbnailRowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "7px",
  marginTop: "10px",
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<
    "All Projects" | ProjectCategory
  >("All Projects");

  const [selectedProject, setSelectedProject] =
    useState<GalleryProject | null>(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const openProject = (
    project: GalleryProject,
    imageIndex = 0
  ) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const showPreviousImage = () => {
    if (!selectedProject) return;

    setSelectedImageIndex((current) =>
      current === 0 ? selectedProject.images.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    if (!selectedProject) return;

    setSelectedImageIndex((current) =>
      current === selectedProject.images.length - 1 ? 0 : current + 1
    );
  };

  const projectCounts = {
    past: projects.filter((project) => project.category === "Past Projects")
      .length,
    ongoing: projects.filter(
      (project) => project.category === "Ongoing Projects"
    ).length,
    upcoming: projects.filter(
      (project) => project.category === "Upcoming Projects"
    ).length,
  };

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <div className="gallery-container">
            <span className="gallery-eyebrow">OUR WORK IN ACTION</span>
            <h1>Project Gallery</h1>
            <p>
              A closer look at our agricultural, environmental and
              community-development work.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="gallery-intro">
        <div className="gallery-container">
          <div className="gallery-intro-content">
            <span className="gallery-section-label">OUR PROJECTS</span>
            <h2>Transforming Africa’s Land, Livelihoods and Learning</h2>
            <p>
              Explore the projects, partnerships and development initiatives
              connected to SEAD1. Each project includes a collection of
              photographs illustrating its area of work.
            </p>
          </div>

          <div className="gallery-stats">
            <div className="gallery-stat">
              <strong>{projects.length}</strong>
              <span>Total Projects</span>
            </div>
            <div className="gallery-stat">
              <strong>{projectCounts.past}</strong>
              <span>Past Projects</span>
            </div>
            <div className="gallery-stat">
              <strong>{projectCounts.ongoing}</strong>
              <span>Ongoing</span>
            </div>
            <div className="gallery-stat">
              <strong>{projectCounts.upcoming}</strong>
              <span>Upcoming</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className="gallery-projects-section">
        <div className="gallery-container">
          <div className="gallery-heading">
            <div>
              <span className="gallery-section-label">PHOTO COLLECTIONS</span>
              <h2>Explore Our Projects</h2>
              <p>
                Select a thumbnail to view an image, or open a project to
                browse its full photo collection.
              </p>
            </div>

            <div className="gallery-image-count">
              <ImageIcon size={18} />
              <span>{projects.length * 5} project images</span>
            </div>
          </div>

          {/* Category filters */}
          <div className="gallery-filters" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`gallery-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project cards */}
          <div className="gallery-grid">
            {filteredProjects.map((project) => (
              <article className="gallery-card" key={project.id}>
                <div className="gallery-card-image-wrap">
                  <button
                    type="button"
                    className="gallery-main-image-button"
                    onClick={() => openProject(project, 0)}
                    aria-label={`Open ${project.title} photo gallery`}
                  >
                    <img
                      src={project.images[0]}
                      alt={project.imageAlt}
                      className="gallery-card-image"
                      loading="lazy"
                    />
                    <span className="gallery-image-overlay">
                      <ImageIcon size={22} />
                      View photo collection
                    </span>
                  </button>
                </div>

                {/* Four thumbnails underneath the main image */}
                <div
                  className="gallery-project-thumbnails"
                  style={thumbnailRowStyle}
                >
                  {project.images.slice(1, 5).map((image, index) => (
                    <button
                      type="button"
                      key={`${project.id}-thumbnail-${index}`}
                      style={thumbnailButtonStyle}
                      onClick={() => openProject(project, index + 1)}
                      aria-label={`View photo ${index + 2} of ${project.title}`}
                    >
                      <img
                        src={image}
                        alt={`${project.imageAlt} - photo ${index + 2}`}
                        style={thumbnailStyle}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>

                <div className="gallery-card-content">
                  <span
                    className={`gallery-category ${
                      project.category === "Ongoing Projects"
                        ? "ongoing"
                        : project.category === "Upcoming Projects"
                        ? "upcoming"
                        : "past"
                    }`}
                  >
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <div className="gallery-card-meta">
                    <span>
                      <MapPin size={15} />
                      {project.location}
                    </span>
                    <span>
                      <Calendar size={15} />
                      {project.date}
                    </span>
                  </div>

                  <p>{project.description}</p>

                  <button
                    type="button"
                    className="gallery-view-project"
                    onClick={() => openProject(project, 0)}
                  >
                    View Project Photos
                    <ArrowRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="gallery-empty">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project photo lightbox */}
      {selectedProject && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} photo gallery`}
          onClick={closeProject}
        >
          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={closeProject}
              aria-label="Close photo gallery"
            >
              <X size={25} />
            </button>

            <div className="gallery-lightbox-image-wrap">
              <img
                src={selectedProject.images[selectedImageIndex]}
                alt={`${selectedProject.imageAlt} - photo ${
                  selectedImageIndex + 1
                }`}
                className="gallery-lightbox-image"
              />

              <button
                type="button"
                className="gallery-lightbox-arrow previous"
                onClick={showPreviousImage}
                aria-label="Previous photo"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                className="gallery-lightbox-arrow next"
                onClick={showNextImage}
                aria-label="Next photo"
              >
                <ChevronRight size={28} />
              </button>

              <span className="gallery-photo-counter">
                {selectedImageIndex + 1} / {selectedProject.images.length}
              </span>
            </div>

            <div className="gallery-lightbox-details">
              <span className="gallery-category past">
                {selectedProject.category}
              </span>
              <h2>{selectedProject.title}</h2>

              <div className="gallery-lightbox-meta">
                <span>
                  <MapPin size={15} />
                  {selectedProject.location}
                </span>
                <span>
                  <Calendar size={15} />
                  {selectedProject.date}
                </span>
              </div>

              <p>{selectedProject.description}</p>

              {/* Select any of the five images */}
              <div className="gallery-lightbox-thumbnails">
                {selectedProject.images.map((image, index) => (
                  <button
                    type="button"
                    key={`${selectedProject.id}-lightbox-${index}`}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`gallery-lightbox-thumbnail ${
                      selectedImageIndex === index ? "selected" : ""
                    }`}
                    aria-label={`Select photo ${index + 1}`}
                    aria-pressed={selectedImageIndex === index}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} photo ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to action */}
      <section className="gallery-cta">
        <div className="gallery-container">
          <div className="gallery-cta-content">
            <span className="gallery-section-label">LET'S WORK TOGETHER</span>
            <h2>Have a project in mind?</h2>
            <p>
              Partner with SEAD1 to create sustainable agricultural,
              environmental and community-development solutions.
            </p>
            <NavLink to="/contact" className="gallery-cta-button">
              Contact Us
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
