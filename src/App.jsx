import { useRef, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/Service/Service";

function App() {
  const cursor1 = useRef();
  const cursor2 = useRef();
  let menu = document.querySelector("#menu-bars");
  let header = document.querySelector("header");

  window.onscroll = () => {
    menu?.classList.remove("fa-times");
    header?.classList.remove("active");
  };

  const mouseMoveHandler = (e) => {
    cursor1.current.style.top = e.pageY + "px";
    cursor1.current.style.left = e.pageX + "px";
    cursor2.current.style.top = e.pageY + "px";
    cursor2.current.style.left = e.pageX + "px";
  };

  document.querySelectorAll("a").forEach((links) => {
    links.onmouseenter = () => {
      cursor1.current.classList.add("active");
      cursor2.current.classList.add("active");
    };

    links.onmouseleave = () => {
      cursor1.current.classList.remove("active");
      cursor2.current.classList.remove("active");
    };
  });

  const [isNavShow, setIsNavShow] = useState(false);
  const handleNavShow = () => {
    setIsNavShow(!isNavShow);
  };
  return (
    <div className="App" onMouseMoveCapture={mouseMoveHandler}>
      {/* custom cursors   */}
      <div ref={cursor1} className="cursor-1"></div>
      <div ref={cursor2} className="cursor-2"></div>
      <button
        onClick={handleNavShow}
        id="menu-bars"
        className="fas fa-bars"
      ></button>
      <Header isNavShow={isNavShow} />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
