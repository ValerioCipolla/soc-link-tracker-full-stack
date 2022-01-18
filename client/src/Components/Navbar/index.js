import React from "react";
import ListItem from "../ListItem";

const Navbar = ({ dispatch, fetchdata }) => {
  return (
    <ul>
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

