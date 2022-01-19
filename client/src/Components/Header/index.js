import React from "react";
import "./header.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <h2>School of Code<br/> Link Tracker</h2>
      <p>A website to display links posted on the<br/> course in an easy to read format </p>
      <Link to="Form" id="AddButton">
        <Button  buttonText="Add New Resource" />
      </Link>
    </div>
  );
};

export default Header;

// if (x.style.display === "none"){
//   x.style.display = "none"

// }
// else{
//   x.style.display = "none"
