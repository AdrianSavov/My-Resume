import "./Home.css";
import "../../PageTransition.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-container">
      <div className="header-and-img">
        <div className="headers-and-buttons">
          <h1 className="header">Hi,</h1>
          <h2 className="header-two">I'm Adrian</h2>
          <h2 className="header-three">React.js Developer</h2>
          <div className="buttons">
            <Link as={Link} to="my-work">
            <button type="button" className="btn btn-warning">Portfolio</button>
            </Link>
            <Link as={Link} to="my-skills">
            <button type="button" className="btn btn-warning">Skills</button>
            </Link>
            <Link
              target="_blank"
              as={Link}
              to="https://drive.google.com/file/d/1Zpqtk6BtkzLqzhENLvFjXFZ8DEjDhQlT/view?usp=sharing"
            >
              <button type="button" className="btn btn-warning">CV Link</button>
            </Link>
          </div>
        </div>
        <img className="img" src="web-dev.png"></img>
      </div>
    </div>
  );
}

export default Home;
