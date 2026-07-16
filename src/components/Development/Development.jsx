import "./Development.css";

const developmentList = [
  {
    stack: ["HTML", "CSS"],
    title: "Basics of layout",
    description:
      "Begun with studying semantic layout and CSS: flexbox, grid layouts, responsive design. Learned to transform Figma mocks into neat, responsive interfaces.",
  },
  {
    stack: ["JavaScript"],
    title: "Logic and interactivity",
    description:
      "Mastered JavaScript for adding dynamics: DOM manipulation, event handling, interaction with external APIs. Built first independent interactive projects.",
  },
  {
    stack: ["React", "Vite"],
    title: "Modern frontend",
    description:
      "Transitioned to React and Vite for more structured development — component-based approach, state management, reusable logic. This is now my primary stack for new projects.",
  },
  {
    stack: ["Node.js", "Express", "PostgreSQL"],
    title: "Introduction to full-stack",
    description:
      "Completed a full-stack development course and built a project with a custom backend — Node.js, Express, and PostgreSQL. This serves as the foundation for further growth, rather than my main specialization.",
  },
];

function Development() {
  return (
    <section className="development" id="development journey">
      <div className="development__inner">
        <h2 className="development__title">
          Development Journey
          <span className="development__dot">.</span>
        </h2>

        <div className="development__list">
          {developmentList.map((item) => (
            <div className="development__item" key={item.title}>
              <div className="development__marker">
                <span className="development__marker-dot" />
              </div>

              <div className="development__stack">
                {item.stack.map((tech) => (
                  <span className="development__tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="development__item-body">
                <h3 className="development__item-title">
                  {item.title}
                </h3>

                <p className="development__item-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Development;