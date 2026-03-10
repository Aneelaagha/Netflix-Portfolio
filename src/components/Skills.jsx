import reactLogo from "../assets/react.mp4";
import pythonLogo from "../assets/python.mp4";
import javascriptLogo from "../assets/javascript.mp4";
import csharpLogo from "../assets/csharp.mp4";
import javaLogo from "../assets/Java.mp4";
import awsLogo from "../assets/Aws.mp4";
import nodejsLogo from "../assets/Nodejs.mp4";
import githubLogo from "../assets/Github.mp4";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-row">
        <div className="skills-track">
        <div className="skill-card">
            <video autoPlay loop muted playsInline>
              <source src={pythonLogo} type="video/mp4" />
            </video>
            <p>Python</p>
          </div>
          <div className="skill-card">
            <video autoPlay loop muted playsInline>
              <source src={csharpLogo} type="video/mp4" />
            </video>
            <p>C#</p>
          </div>
          <div className="skill-card">
            <video autoPlay loop muted playsInline>
              <source src={javaLogo} type="video/mp4" />
            </video>
            <p>Java</p>
          </div>
          <div className="skill-card">
            <video autoPlay loop muted playsInline>
              <source src={javascriptLogo} type="video/mp4" />
            </video>
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <video autoPlay loop muted playsInline>
              <source src={reactLogo} type="video/mp4" />
            </video>
            <p>React</p>
          </div>
          <div className="skill-card">
            <video autoPlay loop muted playsInline>
              <source src={nodejsLogo} type="video/mp4" />
            </video>
            <p>Node JS</p>
          </div>
          <div className="skill-card">
            <video autoPlay loop muted playsInline>
              <source src={awsLogo} type="video/mp4" />
            </video>
            <p>AWS</p>
          </div>
          
          <div className="skill-card">
            <video autoPlay loop muted playsInline>
              <source src={githubLogo} type="video/mp4" />
            </video>
            <p>Github</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;