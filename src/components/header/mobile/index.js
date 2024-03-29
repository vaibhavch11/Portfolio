import React from 'react';
import "./mobile.css";

function Mobile({isOpen,setIsOpen}) {
    return (
        <div className = "mobile">
             
               <div className = "close-icon" onClick= {()=> setIsOpen(!isOpen)}>
                   <i class="fi-rr-cross-circle"></i>
               </div>

               <div className = "mobile-options">

               <div className = "mobile-option">
               <a href = "#Projects">
                 <i class="fi-rr-edit-alt option-icon"></i>Projects

                </a>
                
                </div>

             <div className = "mobile-option">

                <a href = "#Skills">
                 <i class="fi-rr-laptop option-icon"></i>Skills

                 </a>
                
             </div>

             <div className = "mobile-option">
                <a href = "#Work">
                  <i class="fi-rr-briefcase option-icon"></i>Work
                  </a>
             </div>

             <div className = "mobile-option">
               <a href = "#Contacts">
                 <i class="fi-rr-user option-icon"></i>Contacts
                 </a>
                 
             </div>
         
            
        </div>
   </div>
           
            
    );
}

export default Mobile;