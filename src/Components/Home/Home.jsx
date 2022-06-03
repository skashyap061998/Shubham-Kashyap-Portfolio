import { Link } from "react-router-dom";
import { HomeDiv } from "../../Styles/Homestyles";
import { AbtMe } from "../../Styles/AboutMeStyles"


export function Home() {
  return (
    <HomeDiv>
      <div className="linksContainerHome">
        <a target="_blank" rel="noreferrer" href="./Shubham.docx.pdf">
          Resume
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/skashyap061998"
        >
          <img id="githubImg" src="./GitHub-Mark-Light-32px.png" alt="" />{" "}
          <p>Github</p>
        </a>
      </div>
      <div className="details">
        <span>Full Stack Developer</span>
        <h1>Hi I'm Shubham Kashyap.</h1>
        <p>
          It's nice to meet you. I design and code <br />
          beautifully and I love what I do.
        </p>
        <AbtMe>
        <div className="details">
            <h1>About Me</h1>
            <div>
                <p>"Creativity is Intelligence having Fun...!"</p>
                <h6>Highly Motivated web developer with the ability to write efficient
codes using the MERN stack. <br /> Having built several projects
in this field, <br /> I am seeking an opportunity to grow and learn
from other experienced team members.</h6>
            </div>

            </div>
            </AbtMe>
        <Link to="../Contact/contact">LET'S CONNECT!</Link>
      </div>
      <div className="profilePhoto">
        <img width="350px"
        src="../../../../ResumeImage.png" alt="" />
      </div>
    </HomeDiv>
  );
}
