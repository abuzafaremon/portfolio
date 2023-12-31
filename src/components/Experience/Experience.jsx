import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1 className="heading">
        <span> my </span> experience
      </h1>

      <div className="box-container">
        {/* <div className="box">
          <div className="content">
            <span> 2019 - 2020 </span>
            <h3>HTML, CSS</h3>
            <p>
              HTML (the Hypertext Markup Language) and CSS (Cascading Style
              Sheets) are two of the core technologies for building Web pages.
              HTML provides the structure of the page, CSS the (visual and
              aural) layout, for a variety of devices.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <span> 2020 - 2021 </span>
            <h3>Responsive Web Design</h3>
            <p>
              Responsive Web Design Or Responsive Design Is An Approach To Web
              Design That Aims To Make Web Pages Render Well On A Variety Of
              Devices And Window Or Screen Sizes From Minimum To Maximum Display
              Size To Ensure Usability And Satisfaction.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <span> 2021 - 2022 </span>
            <h3>Bootstrap, Tailwind, SCSS</h3>
            <p>
              Bootstrap and Tailwind are CSS Frameworks and SCSS is CSS
              Pre-Processor
            </p>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <span> 2022 - 2023 </span>
            <h3>Front End Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel
              quasi consectetur expedita ipsam similique maiores ipsa? Error,
              debitis ullam.
            </p>
          </div>
        </div> */}

        <div className="box">
          <div className="content">
            <span> Oct 2022 - Jan 2023 </span>
            <h3>Intern - Frontend Development</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <p>Company: Kodeeo Limited</p>
                <p>Location: Uttara Dhaka</p>
              </div>
              <div>
                <h2>Task I have done</h2>
                <p>Landing Page Design</p>
                <p>Learn React Js</p>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <span> Feb 2023 - May 2023 </span>
            <h3>Front End Developer</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <p>Company: Lets Make</p>
                <p>Location: Remote</p>
              </div>
              <div>
                <h2>Task I have done</h2>
                <p>Landing Page Design</p>
                <p>Pages Design</p>
                <p>API Implementation</p>
                <p>Reporting at Click Up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
