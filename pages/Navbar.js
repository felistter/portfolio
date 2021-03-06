import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>ShkarinaS</h2>
      </div>

      <div className="contact-info">
        <p>
          CALL ME. +49 (171) 815-15-28 / SVETLANA.N.SHKARINA@GMAIL.COM /{" "}
          <a
            href="https://drive.google.com/file/d/1da7iEgd7AObcG3q8N05xCdhhI_P6YYkl/view?usp=sharing"
            className="cv"
            target="_blank"
          >
            CURRICULUM VITAE
          </a>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/svetlana-shkarina"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>

        <a href="https://github.com/felistter" target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
