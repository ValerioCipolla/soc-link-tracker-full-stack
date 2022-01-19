import React, { useReducer } from "react";


import HomePage from "../homePage";
import Form from "../Form";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App = () => {

  return (

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="Form" element={<Form/>}/>
    </Routes>)
}


export default App;
