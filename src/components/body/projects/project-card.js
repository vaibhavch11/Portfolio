import React from "react";
import "./project-card.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
     
      <label className="project-label">{project.title}</label>
     
       

        <div className="project-link">
          <a href={project.link}>
          <div className = "Demo">
            <i class="fi-rr-globe link-icons"></i>Demo
          </div>
          </a>
          
          <a href={project.link}>
          <div className = "github">
            <i class="devicon-github-original colored link-icons"></i>GitHub
          </div>
          </a>
          
        </div>

        <p className = "project-about">{project.about}</p>
        <div className = "project-tags">
            {project.tags.map((tag)=>{
                return (
                    <label className = "tag link-icons">{tag}</label>
                )
            })}
        </div>
      </div>

      
      {/* <img src = {project.image} className = "project-image"  /> */}
         

    </div>
  );
}

export default ProjectCard;
