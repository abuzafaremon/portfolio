import "./Header.css";

const Header = ({ isNavShow }) => {
  return (
    <header className={isNavShow ? "active" : ""}>
      <a href="#home" className="logo">
        <span>Zafar</span> Emon
      </a>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#service">service</a>
        <a href="#experience">experience</a>
        <a href="#portfolio">portfolio</a>
        <a href="#contact">contact</a>
      </nav>

      <div className="follow">
        <a
          href="https://facebook.com/zafaremon"
          target="_blank"
          rel="noreferrer"
          className="fab fa-facebook-f"
        >
          <span></span>
        </a>
        <a
          href="https://github.com/abuzafaremon"
          target="_blank"
          rel="noreferrer"
          className="fab fa-github"
        >
          <span></span>
        </a>
        <a
          href="https://linkedin.com/in/zafaremon"
          target="_blank"
          rel="noreferrer"
          className="fab fa-linkedin"
        >
          <span></span>
        </a>
        <a
          href="https://twitter.com/abuzafaremon"
          target="_blank"
          rel="noreferrer"
          className="fab fa-twitter"
        >
          <span></span>
        </a>
      </div>
    </header>
  );
};

export default Header;
