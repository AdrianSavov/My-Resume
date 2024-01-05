import Card from "react-bootstrap/Card";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <Card.Body className="footer-card-body">
        <Card.Title>Contacts:</Card.Title>
        <div className="contacts">
          <span>&#9742; Phone: +359 885 058 231</span>
          <p>&#x1F4E7; adrian.savov@yahoo.com</p>
        </div>
        <Card.Text>All Rights Reserved &copy;</Card.Text>
      </Card.Body>
    </div>
  );
}

export default Footer;
