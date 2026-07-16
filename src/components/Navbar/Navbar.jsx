import "./Navbar.css";

const navLinks = ["About", "Development Journey", "Formation", "Projects", "Contact"];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        Dev<span className="navbar__logo-slash">/</span>
      </div>

      <nav className="navbar__menu">
        {navLinks.map((link, index) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`navbar__link ${index === 0 ? "navbar__link--active" : ""}`}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;