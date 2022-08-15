import React from 'react';
import SocialContact from '../../common/social-contact';
import "./about.css";

function About(props) {
    return (
        <div className = "about">
          <div className = "about-top">
                 <div className = "about-info">
                 {/* <span className="about-heading"></span> */}
                    Hi all, I'm<span className = "info-name"> Vaibhav Chauhan</span><br />
                     A passionate MERN Stack Developer 🚀 <br />
                      experience of building Web and Mobile<br /> applications
                       with JavaScript / Reactjs.<br />
                        

                 </div>
                  <div className = "about-picture">
                      <img src = {require('../../../assests/coding.png').default} className = "picture"/>
                  </div>
          </div>

          <div className = "about-bottom">
                 <SocialContact />
          </div>
            
        </div>
    );
}

export default About;