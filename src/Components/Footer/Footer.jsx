import "./footer.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <Navbar bg="dark" data-bs-theme="dark">
        <div className="icons">
          <span>
          <Link target="_blank" className="fa fa-linkedin" as={Link} to='https://www.linkedin.com/in/adrian-savov/'></Link>
          </span>
          <span>
          <Link target="_blank" className="fa fa-github" as={Link} to='https://github.com/AdrianSavov'></Link>
          </span>
        </div>
      </Navbar>
    </div>
  );
}

export default Footer;
