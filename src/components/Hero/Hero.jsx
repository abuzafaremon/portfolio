import "./Hero.css";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <span className="hi"> hi there... </span>
        <h3>
          i am <span> Zafar Emon </span>
        </h3>
        <p className="info"> i am a front-end developer </p>
        <p className="text">
          As a passionate developer, I love to learn and explore new features of
          websites. I am a fast learner and a hard-working person who has been
          doing development for over a year. My goal is to become an awesome web
          developer.
        </p>
        <a href="#about" className="btn">
          about me
        </a>
      </div>

      <div className="image">
        <img src="/home-img.png" alt="Emon" />
      </div>
    </section>
  );
};

export default Hero;
