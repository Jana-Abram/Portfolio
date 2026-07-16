import "./Marquee.css";

const skills = [
  "WEB",
  "PROGRAMMING",
  "DEVELOPMENT",
  "JAVASCRIPT",
  "CSS",
  "HTML",
  "FIGMA",
  "GIT",
  "GITHUB",
];

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...skills, ...skills].map((skill, index) => (
          <span className="marquee__item" key={index}>
            {skill}
            <span className="marquee__divider">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;