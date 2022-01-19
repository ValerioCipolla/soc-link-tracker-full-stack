import React from "react";
import ListItem from "../ListItem";
import "./navbar.css";

const Navbar = ({ dispatch, fetchdata }) => {
  return (
    <ul id="navBar">
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={1} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={2} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={3} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={4} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={5} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={6} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={6} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={7} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={8} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={9} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={10} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={11} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={12} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={13} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={14} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={15} />
      <ListItem dispatch={dispatch} fetchdata={fetchdata} weekNumber={16} />
    </ul>
  );
};

export default Navbar;
