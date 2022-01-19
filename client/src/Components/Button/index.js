import React from "react";
import "./style.css"


function Button({  buttonText }) {
  return(
    <div className = "box">
    <button>{buttonText}</button>
    </div>
  )
  
}
  
export default Button;
