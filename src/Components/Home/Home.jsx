import "./Home.css";
import "../../PageTransition.css";

function Home() {
  return (
    <div className="page">
    <div className="main-container">
      <h1 className="header">I am Adrian Savov!</h1>
          <div className="row-content">
            <div className="summary-text">
              <h2 className="summary">About Me</h2>
              <br/>
              <p className="text">
              Enthusiastic and detail-oriented Junior Front-End Developer with a
              solid foundation in web development and a passion for creating
              engaging user experiences. Proficient in key technologies
              including JavaScript, React, HTML5, CSS and Bootstrap. 
              Well-versed in front-end development best practices and committed
              to staying updated with the latest industry trends. Excited to
              contribute to collaborative projects, leverage problem-solving
              skills, and continue to grow within a dynamic development
              environment.
            </p>
            </div>
            <div className="my-picture">
              <img className='img' src="sav.png"></img>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
