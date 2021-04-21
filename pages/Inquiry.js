const Inquiry = () => {
  return (
    <section className="inquiry-container">
      <div className="inquiry-body">
        <div className="inquiry-message">
          <div className="inquiry-title">
            <h1>Work inquiry</h1>
          </div>
          <div className="inquiry-motto">
            <p>Let's work together!</p>
          </div>
        </div>
        <div className="inquiry-button">
          <button
            onClick={(e) => {
              window.open("mailto:svetlana.n.shkarina@gmail.com", "_blank");
              e.preventDefault();
            }}
          >
            LET'S CHAT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
