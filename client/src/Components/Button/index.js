import React from "react";
import "./style.css"


function Button({  buttonText }) {
  return(
    <div className = "box">
    <button data-testid="button-test">{buttonText}</button>
    </div>
  )
  
}
  
export default Button;
