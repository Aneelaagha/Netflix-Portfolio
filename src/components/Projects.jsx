import devsyncLogo from "../assets/devsync-logo.png";
import paperlyLogo from "../assets/paperly-logo.png";
import wisewalletLogo from "../assets/Wisewallet.png";
import codementorLogo from "../assets/Codementor.png";
import { useState } from "react";
import { desc } from "framer-motion/m";

function Projects() {
  const[selectedProject, setSelectedProject] = useState(null);
  const devsyncProject = {
    name : "Devsync",
    description: "DevSync is a full stack AI developer assistant that integrates with repositories to analyze code diffs, detect vulnerabilities, and provide intelligent feedback to improve code quality and deployment reliability.",
    github: "https://github.com/Aneelaagha/devsync",
    demo: "https://devsync-seven.vercel.app/",


  };
  const paperlyProject ={
    name: "Paperly",
    description:"Paperly is an AI-powered Chrome extension that assists with research and writing by summarizing articles, generating citations, and refining text into more natural human-like language. It streamlines academic workflows and helps users process large amounts of information more efficiently.",
    github: "https://github.com/Aneelaagha/Paperly",
    demo: "https://chromewebstore.google.com/detail/paperly/nhbhpnedlocbicahkelidchjdanidnjf?pli=1",
  };
  const wisewalletProject ={
    name: "WiseWallet",
    description: "WiseWallet is a full stack financial dashboard that helps users track subscriptions, analyze spending patterns, and manage recurring expenses. It provides visual insights into financial habits and helps users make more informed budgeting decisions.",
    github: "https://github.com/Aneelaagha/WiseWallet",
    demo: "https://github.com/Aneelaagha/WiseWallet",
  };
  const codementorProject ={
    name: "CodeMentor",
    description: "CodeMentor is an AI-powered application that analyzes code snippets and generates clear explanations of the underlying logic. It helps developers understand unfamiliar code faster and supports learning by breaking down complex programming concepts into simple explanations.",
    github: "https://github.com/Aneelaagha?tab=repositories",
    demo: "http://codementor.live/",
  }
  return (
    <>
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-row">
        <div className="projects-track">
          <div className="project-card" tabIndex={0}>
            <div className="project-media">
              <img src={devsyncLogo} alt="DevSync Logo" className="project-logo" />
            </div>
            <h3 className="project-name">DevSync</h3>
            <button className="project-info-btn" onClick={()=>setSelectedProject(devsyncProject)}>More Info</button>
          </div>

          <div className="project-card" tabIndex={0}>
            <div className="project-media">
              <img src={paperlyLogo} alt="Paperly Logo" className="project-logo" />
            </div>
            <h3 className="project-name">Paperly</h3>
            <button className="project-info-btn" onClick= {()=>setSelectedProject(paperlyProject)}>
              More Info
            </button>
          </div>

          <div className="project-card" tabIndex={0}>
            <div className="project-media">
              <img src={wisewalletLogo} alt="WiseWallet Logo" className="project-logo" />
            </div>
            <h3 className="project-name">WiseWallet</h3>
            <button className="project-info-btn" onClick={()=> setSelectedProject(wisewalletProject)}>
              More Info
            </button>
          </div>

          <div className="project-card" tabIndex={0}>
            <div className="project-media">
              <img src={codementorLogo} alt="CodeMentor Logo" className="project-logo" />
            </div>
            <h3 className="project-name">CodeMentor</h3>
            <button className="project-info-btn" onClick={()=> setSelectedProject(codementorProject)}>
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
    {selectedProject && (
      <div className="project-modal-overlay"
      onClick={()=>setSelectedProject(null)}>
        <div className="project-modal"
        onClick={(e)=>e.stopPropagation()}>

        <button className="project-modal-close"
        onClick={() =>setSelectedProject(null)}>
          x
        </button>
        <h2>{selectedProject.name}</h2>
        <p>{selectedProject.description}</p>
        <div className="project-modal-links">
          <a 
          href={selectedProject.github}
          target= "_blank"
          rel= "noreferrer">
            Github</a>
            <a href={selectedProject.demo}
            target="_blank"
            rel="noreferrer">
              Demo
            </a>
          </div>
          
        </div>
        
        </div>



      
        
       
       
    )}
    </>
  );
}

export default Projects;