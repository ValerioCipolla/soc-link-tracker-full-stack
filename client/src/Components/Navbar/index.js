import React from "react";
import ListItem from "../ListItem";
import "./navbar.css"

const Navbar = ({ dispatch, fetchdata }) => {
  return (
    <ul id="navBar">
      <ListItem dispatch={dispatch} fetchdata = {fetchdata} weekNumber={1} />
      <ListItem dispatch={dispatch} fetchdata = {fetchdata} weekNumber={2} />
      <ListItem dispatch={dispatch} fetchdata = {fetchdata} weekNumber={3} />
      <ListItem dispatch={dispatch} fetchdata = {fetchdata} weekNumber={4} />
      <ListItem dispatch={dispatch} fetchdata = {fetchdata} weekNumber={5} />
      <ListItem dispatch={dispatch} fetchdata = {fetchdata} weekNumber={6} />
    </ul>
  );
};

export default Navbar;

