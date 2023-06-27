import { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [modalData, setModalData] = useState({});
  const portfolios = [
    {
      id: 1,
      title: "Glozzome",
      description: [
        "This is a landing page",
        "Mobile Responsive",
        "Technology Used: HTML, CSS, Bootstrap, Javascript",
      ],
      liveLink: "https://leaderboard-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/glozzome",
      githubServer: "https://github.com/abuzafaremon/glozzome",
      thumb: "/leaderboard.png",
    },
    {
      id: 2,
      title: "Panda Commerce",
      description: [
        "This is a landing page",
        "Mobile Responsive",
        "Technology Used: HTML, CSS, Bootstrap, Javascript",
      ],
      liveLink: "https://panda-commerce-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/glozzome",
      githubServer: "https://github.com/abuzafaremon/glozzome",
      thumb: "/panda-commerce.png",
    },
    {
      id: 3,
      title: "Palki",
      description: [
        "This is a landing page",
        "Mobile Responsive",
        "Technology Used: HTML, CSS, Bootstrap, Javascript",
      ],
      liveLink: "https://palki-convention-center-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/glozzome",
      githubServer: "https://github.com/abuzafaremon/glozzome",
      thumb: "/palki.png",
    },
    {
      id: 4,
      title: "Glozzome",
      description: [
        "This is a landing page",
        "Mobile Responsive",
        "Technology Used: HTML, CSS, Bootstrap, Javascript",
      ],
      liveLink: "https://glozzom-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/glozzome",
      githubServer: "https://github.com/abuzafaremon/glozzome",
      thumb: "/glozzome.png",
    },
    {
      id: 5,
      title: "Netbook",
      description: [
        "This is a landing page",
        "Mobile Responsive",
        "Technology Used: HTML, CSS, Bootstrap, Javascript",
      ],
      liveLink: "https://netbook-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/glozzome",
      githubServer: "https://github.com/abuzafaremon/glozzome",
      thumb: "/netbook.png",
    },
    {
      id: 6,
      title: "Bangla Puzzle",
      description: [
        "This is a landing page",
        "Mobile Responsive",
        "Technology Used: HTML, CSS, Bootstrap, Javascript",
      ],
      liveLink: "https://bangla-puzzle-task1-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/glozzome",
      githubServer: "https://github.com/abuzafaremon/glozzome",
      thumb: "/bangla-puzzle.png",
    },
    {
      id: 7,
      title: "Airbnb",
      description: [
        "This is a landing page",
        "Mobile Responsive",
        "Technology Used: HTML, CSS, Bootstrap, Javascript",
      ],
      liveLink: "https://bangla-puzzle-task2-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/glozzome",
      githubServer: "https://github.com/abuzafaremon/glozzome",
      thumb: "/airbnb.png",
    },
    {
      id: 8,
      title: "Nike",
      description: [
        "This is a landing page",
        "Mobile Responsive",
        "Technology Used: HTML, CSS, Bootstrap, Javascript",
      ],
      liveLink: "https://nike-warehouse.web.app",
      githubClient: "https://github.com/abuzafaremon/glozzome",
      githubServer: "https://github.com/abuzafaremon/glozzome",
      thumb: "/nike-warehouse.png",
    },
    {
      id: 9,
      title: "Doctors Portal",
      description: [
        "This is a landing page",
        "Mobile Responsive",
        "Technology Used: HTML, CSS, Bootstrap, Javascript",
      ],
      liveLink: "https://doctors-portal-39a0f.web.app/",
      githubClient: "https://github.com/abuzafaremon/glozzome",
      githubServer: "https://github.com/abuzafaremon/glozzome",
      thumb: "/doctors-portal.png",
    },
    {
      id: 10,
      title: "Lets Make",
      description: [
        "This is a landing page",
        "Mobile Responsive",
        "Technology Used: HTML, CSS, Bootstrap, Javascript",
      ],
      liveLink: "https://blog-letsmake.web.app/",
      githubClient: "https://github.com/abuzafaremon/glozzome",
      githubServer: "https://github.com/abuzafaremon/glozzome",
      thumb: "/blogx.png",
    },
  ];
  const handleModalShow = (id) => {
    setIsModalShow(true);
    const modalData = portfolios.find((item) => item.id === id);
    setModalData(modalData);
  };
  const handleModalClose = () => {
    setIsModalShow(false);
  };
  window.onscroll = () => {
    setIsModalShow(false);
  };
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        <span> my </span> portfolio
      </h1>

      <div className="box-container">
        {portfolios
          .reverse()
          .slice(0, 6)
          .map(({ id, thumb, title, liveLink }) => (
            <div key={id} className="box">
              <img src={thumb} alt={title} />
              <h3> {title} </h3>
              <div className="icons">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="fas fa-link"
                  title="Live Link"
                >
                  <span></span>
                </a>
                <a
                  onClick={() => handleModalShow(id)}
                  className="fas fa-share"
                  title="Details"
                >
                  <span></span>
                </a>
              </div>
            </div>
          ))}
      </div>
      {isModalShow && (
        <div className="modal">
          <button
            onClick={handleModalClose}
            className="close fa fa-times"
          ></button>
          <div className="modal-body">
            <div className="img-container">
              <img src={modalData?.thumb} alt={modalData?.title} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
