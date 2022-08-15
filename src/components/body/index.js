import React from 'react';
import About from './about';
import "./body.css";
import Projects from './projects';
import Skills from './skills';
import Works from './works';

function Body(props) {
    return (
        <div className = "body">
           <section id = "about">
              <About />
           </section>

           <section id = "projects">
              <Projects />
           </section>

           
           <section id = "skills">
              <Skills />
           </section>

           <section id = "works">
              <Works />
           </section>

               
           
        </div>
    );
}

export default Body;