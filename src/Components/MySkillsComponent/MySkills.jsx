import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../PageTransition.css";
import "./MySkills.css";

function MySkills() {
  return (
    <div className="page">
      <div className="tab-container">
        <Tabs defaultActiveKey="profile" className="mb-3">
          <Tab eventKey="home" title="Hard Skills" className="page">
            <div className="skills-container">
              <div className="skills-column">
                <h4 className="tab-section">1. Programming Languages:</h4>
                <ul>
                  <li>JavaScript</li>
                </ul>
                <h4 className="tab-section">2. Front-End Development:</h4>
                <ul>
                  <li>React</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Bootstrap</li>
                </ul>
                <h4 className="tab-section">3. Back-End Service:</h4>
                <ul>
                  <li>Firebase</li>
                </ul>
                <h4 className="tab-section">4. Database:</h4>
                <ul>
                  <li>NoSQL /Firebase Firestore/</li>
                </ul>
                <h4 className="tab-section">5. APIs:</h4>
                <ul>
                  <li>RESTful API</li>
                </ul>
              </div>
              <div className="icons-column">
                <span >
                  <img src="html.png" alt="HTML" className="tech-stack-icons"/>
                  <img src="css.png" alt="CSS" className="tech-stack-icons"/>
                  <img src="js.png" alt="js" className="tech-stack-icons"/>
                  <img src="react2.png" alt="react" className="tech-stack-icons"/>
                  <img src="bootstrap.png" alt="bootstrap" className="tech-stack-icons"/>
                  <img src="firebase.png" alt="firebase" className="tech-stack-icons"/>
                  <img src="firestore.png" alt="firestore" className="tech-stack-icons"/>
                  <img src="rest.png" alt="rest" className="tech-stack-icons"/>
                  <img src="git.png" alt="git" className="tech-stack-icons" href=''/>
                </span>
                <h4 className="tab-section-git">6. Version Control:</h4>
                <ul>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Soft Skills" className="page">
            <div className="soft-skills">
            <h4 >Communication and Teamwork:</h4>
            <ul>
              <li>Exellent communication skills.</li>
              <li>
                Collaborate with team members, contributing to a positive team
                environment.
              </li>
            </ul>
            <h4>Problem-Solving:</h4>
            <ul>
              <li>
                Analyze and troubleshoot issues to identify and implement
                effective solutions.
              </li>
            </ul>
            <h4 >Time Management:</h4>
            <ul>
              <li>
                Prioritize tasks effectively to meet deadlines and deliver
                high-quality work.
              </li>
            </ul>
            <h4 >Learning Ability:</h4>
            <ul>
              <li>
                Demonstrate a strong commitment to continuous learning and
                professional development.
              </li>
              <li>
                Proactively seek opportunities to expand skills and stay
                informed about industry trends.
              </li>
            </ul>
            </div>
          </Tab>
          <Tab eventKey="education" title="Education" className="page">
            <h4 className="education-header">About My Education...</h4>
            <br />
            <h5 className="education-header-p">
              Started my journey as a SoftUni student:
            </h5>
            <br/>
            <ul className="education-list">
              <li>May 2022 - Programming Basics</li>
              <li>September 2022 - Programming Fundamentals with JavaScript</li>
              <li>January 2023 - JS Advanced</li>
              <li>May 2023 - JS Web</li>
              <li>September 2023 - Front-End / React js /</li>
            </ul>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default MySkills;
