import React, { useReducer } from "react";
import Header from "../Header/index.js";
import Navbar from "../Navbar/index.js";
import Display from "../Display/index.js";

function reducer(state, action) {
  switch (action.type) {
    case "set-week-state":
      return { week: action.payload.week };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { week: null });
  return (
    <>
      <Header />
      <Navbar dispatch={dispatch} />
      <Display week={state.week} />
    </>
  );
};

export default App;
