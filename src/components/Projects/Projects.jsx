import { useState } from "react";
import paletteImg from "../../assets/projects/palette.png";
import recipeImg from "../../assets/projects/recipe.png";
import groomingImg from "../../assets/projects/grooming.png";
import floraImg from "../../assets/projects/flora.png";
import "./Projects.css";

const projectsList = [
  {
    title: "Flora-landing",
    image: floraImg,
    description: "A flower shop landing page with a beautiful gallery and an about us section — clean, elegant, and image-focused.",
    link: "https://github.com/Jana-Abram/flora-landing",
  },
  {
    title: "Color Palette Generator",
    image: paletteImg,
    description: "A web application that generates beautiful random color palettes with one-click copy functionality. Built with JavaScript and focused on a clean, responsive user interface.",
    link: "https://github.com/Jana-Abram/Color-Palette-Generator",
  },
  {
    title: "Recipe Finder",
    image: recipeImg,
    description: "A responsive recipe finder that helps users search for meals, view detailed recipes and discover new dishes using a public API.",
    link: "https://github.com/Jana-Abram/Reciepe-finder",
  },
  {
    title: "Grooming-salon",
    image: groomingImg,
    description: "Built a pet grooming salon website with services, pricing, a product catalog and a before & after gallery. Focused on a clean, easy-to-navigate layout.",
    link: "https://github.com/Jana-Abram/grooming-salon",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projectsList.length;

  const goPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % total);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <div className="projects__blobs" aria-hidden="true">
    <span className="projects__blob projects__blob--one" />
    <span className="projects__blob projects__blob--two" />
        </div>
        
        <h2 className="projects__title">
          Projects<span className="projects__dot">.</span>
        </h2>

        <div className="projects__carousel">
          <button
            className="projects__nav projects__nav--prev"
            onClick={goPrev}
            aria-label="Previous project"
          >
            ‹
          </button>

          <div className="projects__stage">
            {projectsList.map((project, index) => {
              let offset = index - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;
              const isActive = offset === 0;

              return (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`projects__card ${isActive ? "projects__card--active" : ""}`}
                  key={project.title}
                  style={{ "--offset": offset }}
                  onClick={(e) => {
                    if (!isActive) {
                      e.preventDefault();
                      setActiveIndex(index);
                    }
                  }}
                >
                  <span className="projects__card-glow" />

                  <div className="projects__card-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="projects__image"
                    />
                    <div className="projects__card-body">
                      <h3 className="projects__card-title">{project.title}</h3>
                      <p className="projects__card-description">
                        {project.description}
                      </p>
                      <span className="projects__card-link">View project ↗</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <button
            className="projects__nav projects__nav--next"
            onClick={goNext}
            aria-label="Next project"
          >
            ›
          </button>
        </div>

        <div className="projects__dots">
          {projectsList.map((project, index) => (
            <button
              key={project.title}
              className={`projects__dot-btn ${index === activeIndex ? "projects__dot-btn--active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
