import React from "react";
import "./style.css"

function Button({ handleClick, buttonText }) {
  return(
    <div className = "box">
    <button onClick={handleClick}>{buttonText}</button>;
    </div>
  )
  
}
  
export default Button;
