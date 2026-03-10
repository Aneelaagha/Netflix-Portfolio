function Navbar({ onOpenGame }) {
    return (
      <div className="navbar">
        <div className="brand">
          ANEELA AGHA
        </div>
  
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
  
          <li>
            <a href="/contact" target="_blank" rel="noreferrer">
              Contact Me
            </a>
          </li>
  
          <li>
            <button
              className="nav-game-btn"
              onClick={onOpenGame}
              type="button"
            >
              Play a Game
            </button>
          </li>
  
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;