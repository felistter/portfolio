import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="contact-info">
        <h2>Stay Connected</h2>
        <p className="location">Berlin, Germany</p>
        <p className="email">svetlana.n.shkarina@gmail.com</p>
        <p className="location">+49 (171) 815-15-28</p>
      </div>
      <div className="bottom">
        <div className="logo">
          <h2>ShkarinaS</h2>
        </div>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/svetlana-shkarina-ph-d-84a80658/"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
          <a href="https://github.com/felistter" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
