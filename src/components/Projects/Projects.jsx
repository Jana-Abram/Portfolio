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
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <h2 className="projects__title">
          Projects<span className="projects__dot">.</span>
        </h2>

        <div className="projects__grid">
          {projectsList.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="projects__card"
              key={project.title}
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;