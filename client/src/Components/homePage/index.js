import React from "react";
import Header from "../Header/index.js";
import "./homePage.css";
import Dropdown from "../Dropdown/index.js";

// function reducer(state, action) {
//   switch (action.type) {
//     case "set-week-state":
//       return { week: action.payload.week, result: action.payload.result };
//     default:
//       return state;
//   }
// }

const HomePage = () => {
  return (
    <div id="grid">
      <Header />
      <Dropdown />
    </div>
  );
};

export default HomePage;
