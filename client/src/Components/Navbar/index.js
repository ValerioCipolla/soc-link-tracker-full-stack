import React from "react";
import ListItem from "../ListItem";

const Navbar = ({ dispatch }) => {
  return (
    <ul>
      <ListItem dispatch={dispatch} weekNumber={1} />
      <ListItem dispatch={dispatch} weekNumber={2} />
      <ListItem dispatch={dispatch} weekNumber={3} />
      <ListItem dispatch={dispatch} weekNumber={4} />
      <ListItem dispatch={dispatch} weekNumber={5} />
      <ListItem dispatch={dispatch} weekNumber={6} />
    </ul>
  );
};

export default Navbar;

