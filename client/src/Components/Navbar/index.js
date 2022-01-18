import React from "react";
import ListItem from "../ListItem";
import "./navbar.css"
const Navbar = ({ dispatch }) => {
  
  return (
    <ul id="navBar">
      <ListItem dispatch={dispatch} weekNumber={1} />
      <ListItem dispatch={dispatch} weekNumber={2} />
      <ListItem dispatch={dispatch} weekNumber={3} />
      <ListItem dispatch={dispatch} weekNumber={4} />
      <ListItem dispatch={dispatch} weekNumber={5} />
      <ListItem dispatch={dispatch} weekNumber={6} />
      <ListItem dispatch={dispatch} weekNumber={7} />
      <ListItem dispatch={dispatch} weekNumber={8} />
      <ListItem dispatch={dispatch} weekNumber={9} />
      <ListItem dispatch={dispatch} weekNumber={10} />
      <ListItem dispatch={dispatch} weekNumber={11} />
      <ListItem dispatch={dispatch} weekNumber={12} />
      <ListItem dispatch={dispatch} weekNumber={13} />
      <ListItem dispatch={dispatch} weekNumber={14} />
      <ListItem dispatch={dispatch} weekNumber={15} />
      <ListItem dispatch={dispatch} weekNumber={16} />

    </ul>
  );
};

export default Navbar;

