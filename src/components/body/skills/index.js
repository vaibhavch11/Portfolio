import React from 'react';
import "./skills.css";

function Skills(props) {
    return (
        <div className = "skills">
         <div className = "seperator-div"></div>
         <label className = "section-title">Skills</label>

            <p className = "skill-heading">Proficiency</p>

            <div className = "progress-bars">

            <div className = "skill-bar ">
                    <p><span><i class="devicon-java-plain-wordmark"></i></span> Java</p>
                    <div className = "meter">
                        <span style={{width:'80%'}}></span>
                    </div>  
                </div>

                <div className = "skill-bar ReactJS">
                
                    <p><span><i class="devicon-react-original colored skill-icons"></i></span> ReactJS</p>
                    <div className = "meter">
                        <span style={{width:'80%'}}></span>
                    </div>  
                </div>

                <div className = "skill-bar Javascript">
                    <p><span><i class="devicon-javascript-plain colored skill-icons"></i></span> Javascript</p>
                    <div className = "meter">
                        <span style={{width:'70%'}} ></span>
                    </div>  
                </div>

                <div className = "skill-bar DSA">
                    <p><span><i class="devicon-thealgorithms-plain colored skill-icons"></i></span> Data Structure & Algorithms</p>
                    <div className = "meter">
                        <span style={{width:'80%'}}></span>
                    </div>  
                </div>

                <div className = "skill-bar Javascript">
                    <p><span><i class="devicon-github-original colored skill-icons"></i></span> GitHub</p>
                    <div className = "meter">
                        <span style={{width:'90%'}} ></span>
                    </div>  
                </div>


            </div>

            
               
                 
               

                
            
         
        </div>
    );
}

export default Skills;
