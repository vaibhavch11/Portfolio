import React from 'react';
import { SocialData } from '../data/social';
import "./footer.css";

function Footer(props) {

    const data = SocialData;
    return (
        <div className = "Main-footer">
        <div className = "footer">
            <div className = "footer-Heading">
             <h1 className = "mainHeading">Let's Talk</h1>

             <div className = "footer-content">
             <p className = "subHeading">Want to Connect?<br/></p>
             <p className = "subHeading">My Inbox is always open!</p>

             <div className = "footer-social-contact">
                   {data.map((item)=>{
                       return (
                        <a href = {item.link}>
                     <div className = "social-icon-div">
                         <img src = {item.icon} className = "social-icon" />
                     </div>

                    </a>
                       ) 
                   })}

             </div>
             </div>

            </div>


            <div className = "footer-image">
                 <img src = {require('../../assests/Contact.png').default} className = "picture"/>
            </div>
           
        </div>

        <div >
            <div className = "footer-end" >
            Made with ❤️ by Vaibhav Chauhan
            </div>
            
            </div>
        </div>
         
    );
}

export default Footer;