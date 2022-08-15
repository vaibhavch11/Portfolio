import React from 'react';
import { ProjectData } from '../../data/projects';
import ProjectCard from './project-card';

import "./projects.css";



function Projects(props) {

    const projectItems= ProjectData;
    return (
        <div className = "projects">
        <div className = "seperator-div"></div>
        <label className = "section-title">Projects</label>
        <div className = "projects-container">
        
          <div className = "project-items">
          {projectItems.map((project)=>{
              return (
                  <ProjectCard project = {project}/>
                 
              )
          })}
          </div>
          </div>
          
        </div>
    );
}

export default Projects;