import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Hero.css";

const techIcons = [
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const fullText = "web developer";
const typingSpeed = 100;

function Hero() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTypedText(fullText.slice(0, index));

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" is="about">
      <div className="hero__visual">
        <div className="hero__animation">
            <DotLottieReact
      src="https://lottie.host/0bb178c5-45df-41a3-8c75-04366c8b06e1/OxWYLEsoBa.lottie"
      loop
      autoplay
    />
        </div>
      </div>

       <div className="hero__content">
          <h1 className="hero__title">
            Hi, I'm<span className="hero__dot">.</span>
          </h1>
          <h2 className="hero__subtitle">
            {typedText}
            <span className="hero__cursor">|</span>
          </h2>

          <div className="hero__icons">
            {techIcons.map((icon) => (
              <img
                key={icon.name}
                src={icon.src}
                alt={icon.name}
                className="hero__icon"
              />
            ))}
          </div>

          <p className="hero__bio">
            <strong>Web Developer</strong> passionate about creating clean,
            responsive and user-friendly websites with modern technologies.
          </p>
        </div>
    </section>
  );
}

export default Hero;