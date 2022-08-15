import React from 'react';
import "./web.css";

function Web(props) {
    return (
        <div className = "web">

               <div className = "webMenu-option">
               <a href = "#Projects">
                 <i class="fi-rr-edit-alt option-icon"></i>Projects

                </a>
                
                </div>

             <div className = "webMenu-option">

                <a href = "#Skills">
                 <i class="fi-rr-laptop option-icon"></i>Skills

                 </a>
                
             </div>

             <div className = "webMenu-option">
                <a href = "#Work">
                  <i class="fi-rr-briefcase option-icon"></i>Work
                  </a>
             </div>

             <div className = "webMenu-option">
               <a href = "#Contacts">
                 <i class="fi-rr-user option-icon"></i>Contacts
                 </a>
                 
             </div>
         
            
        </div>
    );
}

export default Web;