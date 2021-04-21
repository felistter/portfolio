import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Works = () => {
  return (
    <section className="works-container">
      <div className="work-title">
        <h1>Projects</h1>
      </div>

      <div className="work-item-style-1">
        <div className="description">
          <div className="title">
            <h2>Travel Blog</h2>
            <p>
              Personal blog for public sharing travel experience and memories
            </p>
            <div className="links-container">
              <a href="https://github.com/felistter/photo-blog" target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={["fas", "globe"]} />
              </a>
            </div>
          </div>
          <div className="cover">
            <img src="/work-example-1.png" alt="travel-blog" />
          </div>
        </div>

        <div className="technologies">
          <a
            href="https://contentful.com/"
            target="_blank"
            tooltip="Contentful"
          >
            <img
              className="technology"
              src="/contentful-logo.svg"
              alt="contentful"
            />
          </a>
          <a href="https://sass-lang.com" target="_blank" tooltip="Sass">
            <img className="technology" src="/sass-logo.svg" alt="tech" />
          </a>
          <a href="https://reactjs.org" target="_blank" tooltip="React.js">
            <img className="technology" src="/react-logo.svg" alt="tech" />
          </a>
          <a href="https://nextjs.org" target="_blank" tooltip="Next.js">
            <img className="technology" src="/next-logo.svg" alt="tech" />
          </a>
        </div>
      </div>

      <div className="work-item-style-2">
        <div className="description">
          <div className="title">
            <h2>MyMEMO</h2>
            <p>Public platform for sharing thoughts on any subject</p>
            <div className="links-container">
              <a href="https://github.com/felistter/photo-blog" target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={["fas", "globe"]} />
              </a>
            </div>
          </div>
          <div className="cover-1">
            <img src="/work-example-2.png" alt="MyMEMO" />
          </div>
        </div>

        <div className="work-right">
          <div className="cover-2">
            <img src="/work-example-3.png" alt="New Post" />
          </div>
          <div className="technologies">
            <a
              href="https://tailwindcss.com"
              target="_blank"
              tooltip="Tailwind CSS"
            >
              <img className="technology" src="/tailwind-logo.svg" alt="tech" />
            </a>
            <a href="https://reactjs.org" target="_blank" tooltip="React.js">
              <img className="technology" src="/react-logo.svg" alt="tech" />
            </a>
            <a
              href="https://firebase.google.com/"
              target="_blank"
              tooltip="Firebase"
            >
              <img className="technology" src="/firebase-logo.svg" alt="tech" />
            </a>
          </div>
        </div>
      </div>

      <div className="work-item-style-3">
        <div className="description">
          <div className="title">
            <h2>XRD reader</h2>
            <p>
              Scientific toolkit for rapid overview XRD data of different
              materials
            </p>
            <div className="links-container">
              <a href="https://github.com/felistter/photo-blog" target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={["fas", "globe"]} />
              </a>
            </div>
          </div>
          <div className="cover">
            <img src="/work-example-4.png" alt="XRD reader" />
          </div>
        </div>

        <div className="technologies">
          <a
            href="https://tailwindcss.com"
            target="_blank"
            tooltip="Tailwind CSS"
          >
            <img
              className="technology"
              src="/tailwind-logo.svg"
              alt="tech"
            ></img>
          </a>
          <a href="https://reactjs.org" target="_blank" tooltip="React.js">
            <img className="technology" src="/react-logo.svg" alt="tech" />
          </a>
          <a
            href="https://recharts.org/en-US/"
            target="_blank"
            tooltip="Recharts"
          >
            <img className="recharts" src="/Recharts.png" alt="tech" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
