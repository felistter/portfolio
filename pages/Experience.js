const Experience = () => {
  return (
    <section className="experience-container">
      <div className="experience-title">
        <h1>Experience</h1>
      </div>

      <div className="experience-body">
        <div className="experience-list">
          <div className="experience-item">
            <div className="company-year">
              <p>2012-2020</p>
            </div>
            <div className="company-name">
              <p>Tomsk Polytechnic University</p>
            </div>
            <div className="company-position">
              <p>Research Engineer</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="company-year">
              <p>2014-2018</p>
            </div>
            <div className="company-name">
              <p>Karlsruhe Institute of Technology</p>
            </div>
            <div className="company-position">
              <p>Guest Scientist</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="company-year">
              <p>2014-2015</p>
            </div>

            <div className="company-name">
              <p>Fraunhofer IGB</p>
            </div>

            <div className="company-position">
              <p>Guest Scientist</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="company-year">
              <p>2012-2013</p>
            </div>

            <div className="company-name">
              <p>University of Duisburg-Essen</p>
            </div>

            <div className="company-position">
              <p>Intern</p>
            </div>
          </div>
        </div>
        <div className="experience-image">
          <img src="/exp-work.svg" alt="Work" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
