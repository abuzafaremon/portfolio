import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        about <span> me </span>
      </h1>

      <div className="row-1">
        <div className="image">
          <img src="/about-img.png" alt="Emon" />
        </div>

        <div className="content">
          <h3> my name is Zafar Emon</h3>
          <p>
            A motivated junior front-end developer with curiosity of learning
            and exploring new languages and development tools, besides looking
            for a position in a growth-oriented company where I can use my
            skills to the advantage of the company while developing my own
            skills.
          </p>
          <div className="box-container">
            <div className="box">
              <p>
                <span> age : </span> 25
              </p>
              <p>
                <span> gender : </span> male
              </p>
              <p>
                <span> language : </span> bengali, english, hindi
              </p>
              <p>
                <span> work : </span> front-end developer
              </p>
            </div>
            <div className="box">
              <p>
                <span> freelance : </span> available
              </p>
              <p>
                <span> phone : </span> 01707894381
              </p>
              <p>
                <span> email : </span> zafaremon@gmail.com
              </p>
              <p>
                <span> country : </span> Bangladesh
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
        {/* <div className="skills">
          <div className="progress">
            <h3>
              web design <span> 95% </span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Responsive Design <span> 90% </span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Front End Development <span> 85% </span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Web Development <span> 80% </span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div> */}
        <div className="skills">
          <div>HTML</div>
          <div>CSS</div>
          <div>SCSS</div>
          <div>Javascript</div>
          <div>Bootstrap</div>
          <div>Tailwind</div>
          <div>Daisy UI</div>
          <div>React Js</div>
          <div>Next Js</div>
          <div>Firebase</div>
          <div>Redux/Zustand</div>
          <div>Typescript</div>
          <div>Node Js</div>
          <div>Express Js</div>
          <div>MongoDB</div>
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
