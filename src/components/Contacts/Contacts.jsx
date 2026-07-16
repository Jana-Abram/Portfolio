import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import email from "../../assets/icons/email.svg";
import "./Contacts.css";

const contactsList = [
  {
    icon: linkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/jana-abram-66097a26a/",
  },
  {
    icon: github,
    title: "GitHub",
    link: "https://github.com/Jana-Abram",
  },
  {
    icon: email,
    title: "E-mail",
    link: "mailto:janaabram03@gmail.com",
  },
]

function Contacts() {
  return (
    <section className="contacts" id="contact">
      <div className="contacts-container">
        <h2 className="contacts-title">
          Contact<span>.</span>
        </h2>

        <p className="contacts-description">
          Contact me or follow my social media
        </p>

        <div className="contacts-grid">
          {contactsList.map((contact) => (
            <a
              key={contact.title}
              href={contact.link}
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-info">
                <img
                  src={contact.icon}
                  alt={contact.title}
                  className="contact-icon"
                />

                <span>{contact.title}</span>
              </div>

              <span className="contact-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contacts;

