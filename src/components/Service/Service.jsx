import "./Service.css";

const Service = () => {
  const services = [
    {
      id: 2,
      icon: <i className="fas fa-mobile"></i>,
      name: "Responsive Design",
      description:
        "Responsive web design or responsive design is an approach to web design that aims to make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability and satisfaction.",
    },
    {
      id: 4,
      icon: <i className="fas fa-code"></i>,
      name: "Front-end Development",
      description:
        "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.",
    },
    {
      id: 6,
      icon: <i className="fas fa-chart-line"></i>,
      name: "Full stack Development",
      description:
        "Full stack development is the end-to-end development of applications. It includes both the front end and back end of an application. The front end is usually accessed by a client, and the back end forms the core of the application where all the business logic is applied.",
    },
  ];
  return (
    <section className="service" id="service">
      <h1 className="heading">
        <span> my </span> services
      </h1>

      <div className="box-container">
        {services.map(({ id, name, description, icon }) => (
          <div key={id} className="box">
            <span> {icon}</span>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}

        {/* <div className="box">
          <i className="fas fa-paint-brush"></i>
          <h3>web development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            facere?
          </p>
        </div>

        <div className="box">
          <i className="fas fa-mobile"></i>
          <h3>responsive design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            facere?
          </p>
        </div>

        <div className="box">
          <i className="fas fa-bullhorn"></i>
          <h3>front-end development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            facere?
          </p>
        </div>

        <div className="box">
          <i className="fas fa-chart-line"></i>
          <h3>back-end development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            facere?
          </p>
        </div>

        <div className="box">
          <i className="fas fa-envelope"></i>
          <h3>Full stack development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            facere?
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Service;
