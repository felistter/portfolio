const Education = () => {
  return (
    <section className="education-container">
      <div className="education-title">
        <h1>Education</h1>
      </div>

      <div className="education-body">
        <div className="education-image">
          <img src="/edu-uni.svg" alt="Uni" />
        </div>
        <div className="education-list">
          <div className="education-item">
            <div className="uni-year">
              <p>2013-2018</p>
            </div>
            <div>
              <p className="uni-name">Tomsk Polytechnic University</p>
              <p className="uni-degree">Doctor of Philosophy (PhD)</p>
            </div>
          </div>
          <div className="education-item">
            <div className="uni-year">
              <p>2011-2013</p>
            </div>
            <div>
              <p className="uni-name">Tomsk Polytechnic University</p>
              <p className="uni-degree">Master's degree</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
