import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../PageTransition.css";
import "./MyWork.css";

function MyWork() {
  return (
    <div className="page">
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
        <Card>
          <Card.Img variant="top" src="404.png" />
          <Card.Body>
            <Card.Title>Coming Soon...</Card.Title>
            <Card.Text className="card-text-contain">As soon as there is more projects, you'll see them listed here.</Card.Text>
            <div className="card-btn-container">
              <Button variant="primary">GitHub Link</Button>
              <Button variant="primary">Project Link</Button>
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
