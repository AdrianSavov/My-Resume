import "../../PageTransition.css";
import "./MySkills.css";

function MySkills() {
  return (
    <div className="my-skills-container">
      <div className="skills-container">
        <h1 className="headers">Tech Stack:</h1>
        <div className="icons-column">
          <div>
            <img src="html.png" alt="HTML" className="tech-stack-icons" />
            <span className="icons-text">HTML</span>
          </div>
          <div>
            <img src="css.png" alt="CSS" className="tech-stack-icons" />
            <span className="icons-text">CSS3</span>
          </div>
          <div>
            <img src="js.png" alt="js" className="tech-stack-icons" />
            <span className="icons-text">JavaScript</span>
          </div>
          <div>
            <img src="react2.png" alt="react" className="tech-stack-icons" />
            <span className="icons-text">React</span>
          </div>
          <div>
            <img
              src="bootstrap.png"
              alt="bootstrap"
              className="tech-stack-icons"
            />
            <span className="icons-text">Bootstrap</span>
          </div>
          <div>
            <img
              src="firebase.png"
              alt="firebase"
              className="tech-stack-icons"
            />
            <span className="icons-text">Firebase</span>
          </div>
          <div>
            <img src="rest.png" alt="rest" className="tech-stack-icons" />
            <span className="icons-text">REST Api</span>
          </div>
          <div>
            <img src="git.png" alt="git" className="tech-stack-icons" href="" />
            <span className="icons-text">GitHub</span>
          </div>
        </div>
        <div className="soft-skills">
          <h1 className="headers">Soft Skills:</h1>
          <ul>
            <li> Excellent communication skills</li>
            <li> Team Player</li>
            <li> Problem Solving</li>
            <li> Time Management</li>
            <li> Prioritize tasks effectively to meet deadlines and deliver high-quality work
            </li>
            <li> Fast Learning Ability</li>
          </ul>
        </div>
        <div className="education">
          <h1 className="headers">About My Education...</h1>
          <ul className="education-list">
            <li> May 2022 - Programming Basics  at (SoftUni)</li>
            <li> September 2022 - Programming Fundamentals with JavaScript at (SoftUni)</li>
            <li> January 2023 - JS Advanced  at (SoftUni)</li>
            <li> May 2023 - JS Web  at (SoftUni)</li>
            <li> September 2023 - Front-End / React.js  at (SoftUni)</li>
          </ul>
        </div>
      </div>
      </div>
  );
}

export default MySkills;
