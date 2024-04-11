import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../PageTransition.css";
import "./MyWork.css";

function MyWork() {
  return (
    <div className="my-work-container">
      <div className="card-container">
        <Card>
          <Card.Img variant="top" src="logo.jpg"/>
          <Card.Body>
            <Card.Title>A-Mobile</Card.Title>
            <Card.Text className="card-text-contain">
              A-Mobile is a web application to manage an online smart devices
              store.
            </Card.Text>
            <div className="card-btn-container">
              <Button
                target="_blank"
                variant="primary"
                as={Link}
                to="https://github.com/AdrianSavov/A-Mobile/tree/main/app"
              >
                GitHub Link
              </Button>
              <Button
                target="_blank"
                variant="primary"
                as={Link}
                to="https://project-defence.web.app/"
              >
                Project Link
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="logo2.png" />
          <Card.Body>
            <Card.Title>AS-Gaming</Card.Title>
            <Card.Text className="card-text-contain">AS-Gaming is a web application for high end gaming setups and accessories store.</Card.Text>
            <div className="card-btn-container">
              <Button variant="primary"
              target="_blank"
              as={Link}
              to="https://github.com/AdrianSavov/PC.com">
              GitHub Link
                </Button>
              <Button variant="primary"
              target="_blank"
              as={Link}
              to="https://as-gaming-a7063.web.app/">
                Project Link
                </Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="404.png" />
          <Card.Body>
            <Card.Title>Coming Soon...</Card.Title>
            <Card.Text className="card-text-contain">
            As soon as there is more projects, you'll see them listed here.
            </Card.Text>
            <div className="card-btn-container">
              <Button
                target="_blank"
                variant="primary"
                as={Link}
                to="https://github.com/AdrianSavov/A-Mobile/tree/main/app"
              >
                GitHub Link
              </Button>
              <Button
                variant="primary"
                as={Link}
                to="https://project-defence.web.app/"
              >
                Project Link
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default MyWork;
