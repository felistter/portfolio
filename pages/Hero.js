const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Svetlana Shkarina</h1>
        <h3>Frontend Developer</h3>
        <p>from Physics to Software Engineering</p>
        <p className="hero-location">Based in Berlin, Germany</p>
        <button
          onClick={(e) => {
            window.open("mailto:svetlana.n.shkarina@gmail.com", "_blank");
            e.preventDefault();
          }}
        >
          LET'S CHAT
        </button>
      </div>
      <div className="hero-right">
        <img src="/Portrait.jpg" alt="Svetlana Shkarina" />
      </div>
    </div>
  );
};

export default Hero;
