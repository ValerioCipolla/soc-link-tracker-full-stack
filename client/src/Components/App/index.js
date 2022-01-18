import React, { useReducer, useEffect } from "react";
import Header from "../Header/index.js";
import Navbar from "../Navbar/index.js";
import Display from "../Display/index.js";

function reducer(state, action) {
  switch (action.type) {
    case "set-week-state":
      return { week: action.payload.week,
              result: action.payload.result
             };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { week: null, result: null });
    async function fetchdata(week) {
      const res = await fetch (`/api/links/week/${week}`);
      const data = await res.json();
      return data;
    }
  console.log(state)
  return (
    <>
      <Header />
      <Navbar dispatch={dispatch} fetchdata={fetchdata} />
      <Display week={state.week} result={state.result}/>
    </>
  );
};

export default App;
