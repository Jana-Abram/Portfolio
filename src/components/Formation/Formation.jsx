import "./Formation.css";

const goals = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: "TypeScript",
    status: "Learning now",
    description:
      "Adding static typing to my projects for safer, more predictable code and a smoother developer experience.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js & Express",
    status: "Learning now",
    description:
      "Going deeper into backend development — building APIs, handling databases, and understanding full-stack architecture.",
  },
   {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "Next.js",
    status: "Next up",
    description:
      "Exploring server-side rendering and routing to build faster, more scalable React applications.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "Accessibility & Responsive Design",
    status: "Next up",
    description:
      "Deepening my knowledge of semantic HTML, ARIA and responsive layouts to build interfaces that work well for everyone.",
  },
];

function Formation() {
  return (
    <section className="formation" id="formation">
      <div className="formation__inner">
        <h2 className="formation__title">
          What's Next<span className="formation__dot">.</span>
        </h2>
        <p className="formation__subtitle">
          Skills I'm currently building to grow as a developer.
        </p>

        <div className="formation__grid">
          {goals.map((goal) => (
            <div className="formation__card" key={goal.title}>
              <span className="formation__card-glow" />

              <div className="formation__card-inner">
                <div className="formation__card-top">
                  <img
                    src={goal.icon}
                    alt={goal.title}
                    className="formation__card-icon"
                  />
                  <span className="formation__card-status">
                    {goal.status}
                  </span>
                </div>

                <h3 className="formation__card-title">{goal.title}</h3>
                <p className="formation__card-description">
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formation;