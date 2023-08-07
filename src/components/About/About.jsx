import "./About.css";

const About = () => {
  const skills = [
    { name: "HTML", img: "/assets/images/Skillicons/html.png" },
    { name: "CSS", img: "/assets/images/Skillicons/css.png" },
    { name: "SCSS", img: "/assets/images/Skillicons/sass.png" },
    { name: "Javascript", img: "/assets/images/Skillicons/js-file.png" },
    { name: "Bootstrap", img: "/assets/images/Skillicons/bootstrap.png" },
    { name: "Tailwind", img: "/assets/images/Skillicons/tailwaind.png" },
    { name: "GitHub", img: "/assets/images/Skillicons/github.png" },
    { name: "React Js", img: "/assets/images/Skillicons/react.png" },
    { name: "Next Js", img: "/assets/images/Skillicons/nextjs.png" },
    { name: "Firebase", img: "/assets/images/Skillicons/firebase.png" },
    { name: "Redux", img: "/assets/images/Skillicons/redux.png" },
    { name: "Zustand", img: "/assets/images/Skillicons/zustand.png" },
    { name: "Typescript", img: "/assets/images/Skillicons/typescript.png" },
    { name: "Node Js", img: "/assets/images/Skillicons/node-js.png" },
    { name: "Express Js", img: "/assets/images/Skillicons/express.png" },
    { name: "MongoDB", img: "/assets/images/Skillicons/mongodb.png" },
  ];
  return (
    <section className="about" id="about">
      <h1 className="heading">
        about <span> me </span>
      </h1>

      <div className="row-1">
        <div className="image">
          <img src="/assets/images/home-pic.png" alt="Emon" />
        </div>

        <div className="content">
          <h3> my name is Zafar Emon</h3>
          <p>
            A motivated front-end developer with curiosity of learning and
            exploring new languages and development tools, besides looking for a
            position in a growth-oriented company where I can use my skills to
            the advantage of the company while developing my own skills.
          </p>
          <div className="box-container">
            <div className="box">
              <p>
                <span> country : </span> Bangladesh
              </p>
              <p>
                <span> Language : </span> Bengali, English, Hindi
              </p>
              <p>
                <span> phone : </span>
                <a href="tel:+8801707894381">01707894381</a>
              </p>
            </div>
            <div className="box">
              <p>
                <span> Work : </span> Front-End Developer
              </p>
              <p>
                <span> Freelance : </span> Available
              </p>
              <p>
                <span> Email : </span>
                <a href="mailto:zafaremon@gmail.com">zafaremon@gmail.com</a>
              </p>
            </div>
          </div>
          <a
            href="React-Developer-Emon.pdf"
            download="/React-Developer-Emon.pdf"
            className="btn"
          >
            download Resume
          </a>
          <a href="https://fiver.com/zafaremon" className="btn">
            hire me
          </a>
        </div>
      </div>

      <h1 className="heading">
        <span> my </span> skills
      </h1>

      <div className="row-2">
        <div className="skills">
          {skills.map((skill, i) => (
            <div>
              <img width={40} src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* <div className="box-container">
          <div className="box">
            <h3> &gt; 1+ </h3>
            <p>years of experience</p>
          </div>
          <div className="box">
            <h3> &gt; 5+ </h3>
            <p>happy clients</p>
          </div>
          <div className="box">
            <h3> &gt; 15+ </h3>
            <p>projects completed</p>
          </div>
          <div className="box">
            <h3> &gt; 2 </h3>
            <p>awards won</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
