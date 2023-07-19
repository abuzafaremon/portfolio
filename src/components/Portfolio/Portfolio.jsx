import { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [modalData, setModalData] = useState({});
  const portfolios = [
    {
      id: 1,
      title: "Leader Board",
      description: ["This is a landing page", "Mobile Responsive"],
      technology: ["HTML", "CSS"],
      liveLink: "https://leaderboard-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/leader-board-css3",
      thumb: "/assets/images/portfolio/leaderboard.PNG",
    },
    {
      id: 2,
      title: "Panda Commerce",
      description: ["This is a landing page", "Mobile Responsive"],
      technology: ["HTML", "CSS", "Bootstrap"],
      liveLink: "https://panda-commerce-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/panda-commerce",
      thumb: "/assets/images/portfolio/panda-commerce.PNG",
    },
    {
      id: 3,
      title: "Palki",
      description: ["This is a landing page", "Mobile Responsive"],
      technology: ["HTML", "CSS", "Bootstrap"],
      liveLink: "https://palki-convention-center-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/convention-center",
      thumb: "/assets/images/portfolio/palki.PNG",
    },
    {
      id: 4,
      title: "Glozzome",
      description: ["This is a multiple page website", "Mobile Responsive"],
      technology: ["HTML", "CSS", "Bootstrap"],
      liveLink: "https://glozzom-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/",
      thumb: "/assets/images/portfolio/glozzome.PNG",
    },
    {
      id: 5,
      title: "Netbook",
      description: ["This is a landing page", "Mobile Responsive"],
      technology: ["React Js", "Javascript", "SCSS"],
      liveLink: "https://netbook-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/",
      thumb: "/assets/images/portfolio/netbook.PNG",
    },
    {
      id: 6,
      title: "Bangla Puzzle",
      description: ["This is a landing page", "Mobile Responsive"],
      technology: ["React Js", "Javascript", "Tailwind"],
      liveLink: "https://bangla-puzzle-task1-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/bangla-puzzle-task",
      thumb: "/assets/images/portfolio/bangla-puzzle.PNG",
    },
    {
      id: 7,
      title: "Airbnb",
      description: ["This is a landing page", "Mobile Responsive"],
      technology: ["React Js", "Javascript", "Tailwind"],
      liveLink: "https://bangla-puzzle-task2-emon.netlify.app",
      githubClient: "https://github.com/abuzafaremon/bangla-puzzle-task2",
      thumb: "/assets/images/portfolio/airbnb.PNG",
    },
    {
      id: 11,
      title: "Flex-IT",
      description: ["This is a landing page", "All Device Responsive"],
      technology: ["Next Js", "Javascript", "Tailwind"],
      liveLink: "https://flex-it-abuzafaremon.vercel.app/",
      githubClient:
        "https://github.com/abuzafaremon/flexIt-landingPage-letsmake",
      thumb: "/assets/images/portfolio/flex-it.PNG",
    },
    {
      id: 12,
      title: "O-Digital",
      description: ["This is a landing page", "All Device Responsive"],
      technology: ["Next Js", "Javascript", "Tailwind"],
      liveLink: "https://odigital-abuzafaremon.vercel.app/",
      githubClient: "https://github.com/abuzafaremon/innvaVerse-ODigital",
      thumb: "/assets/images/portfolio/o-digital.PNG",
    },
    {
      id: 8,
      title: "Nike",
      description: [
        "It's a shoe warehouse website, not an e-commerce website.",
        "Mobile Responsive",
        "Authentication system using firebase.",
        "Logged in user can add their product to this website and they are able to delete their product and update product quantity. And don’t able to delete other user products.",
      ],
      technology: [
        "React Js",
        "Javascript",
        "Bootstrap",
        "Node Js",
        "Express Js",
        "MongoDB",
        "Firebase",
      ],
      liveLink: "https://nike-warehouse.web.app",
      githubClient: "https://github.com/abuzafaremon/nike-warehouse-client",
      githubServer: "https://github.com/abuzafaremon/nike-warehouse-server",
      thumb: "/assets/images/portfolio/nike-warehouse.PNG",
    },
    {
      id: 9,
      title: "Doctors Portal",
      description: [
        "In this website people can create an account using Gmail and a password. After creating an account they need to verify their Gmail. People also create an account using their logged-in Gmail and don’t need to verify Gmail.",
        "People take a doctor's appointment on a different date. They see their appointment list on the dashboard.",
        "Admin can make a user an admin. And admin Add a doctor to this website. And delete doctors if needed.",
      ],
      technology: [
        "React Js",
        "Javascript",
        "Tailwind",
        "DaisyUI",
        " Node Js",
        "Express Js",
        "MongoDB",
        "Firebase",
      ],
      liveLink: "https://doctors-portal-39a0f.web.app/",
      githubClient: "https://github.com/abuzafaremon/doctors-portal-client",
      githubServer: "https://github.com/abuzafaremon/doctors-portal-server",
      thumb: "/assets/images/portfolio/doctors-portal.PNG",
    },
    {
      id: 10,
      title: "Lets Make",
      description: [
        "This is a Mobile Responsive blog website ",
        "Authentication is required for creating a new blog. Authentication using firebase",
        "Logged in users can create, update, delete their posts",
      ],
      technology: [
        "React Js",
        "Javascript",
        "Tailwind",
        "DaisyUI",
        "Firebase",
        "Firestore",
      ],
      liveLink: "https://blog-letsmake.web.app/",
      githubClient: "https://github.com/abuzafaremon/blog-letsmake",
      thumb: "/assets/images/portfolio/blogx.PNG",
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
          .slice(0, 10)
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
            <div className="details">
              <div className="links">
                <h2>Links</h2>
                <a
                  href={modalData?.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fa fa-link"
                >
                  LiveLink
                </a>
                <a
                  href={modalData?.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fab fa-github"
                >
                  {modalData?.githubServer ? "Client" : "GitHub"}
                </a>
                {modalData?.githubServer && (
                  <a
                    href={modalData?.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fab fa-github"
                  >
                    Server
                  </a>
                )}
              </div>
              <div className="description">
                <h2>Description</h2>
                <ul>
                  {modalData?.description.map((item, index) => (
                    <li key={index}>
                      {index + 1} {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="details2">
                <h2>Technology Used</h2>
                <div>
                  {modalData?.technology.map((item, index) => (
                    <h5 key={index}>{item}, </h5>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
