import Card from "react-bootstrap/Card";
import "./footer.css";

function Footer() {
  return (
      <div className="footer-container">
        <div className="footer-header"></div>
        <Card.Body className="footer-card-body">
          <Card.Title>Contacts:</Card.Title>
          <div className="contacts">
          <p>&#9742; Phone:  +359 885 058 231</p>
          <p>&#x1F4E7;  adrian.savov@yahoo.com</p>
          </div>
          <Card.Text>
          All Rights Reserved &copy;
          </Card.Text>
        </Card.Body>
      </div>
  );
}

export default Footer;