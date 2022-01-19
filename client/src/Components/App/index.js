import React from "react";
import HomePage from "../homePage";
import Form from "../Form";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="Form" element={<Form />} />
    </Routes>
  );
};

export default App;
