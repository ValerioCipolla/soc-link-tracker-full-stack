import React from "react";
import Accordion from "../Accordion/index.js";
import "./index.css";

const Dropdown = () => {
  return (
    <div>
      <h1>SOC Resource Link Tracker</h1>
      <p>click the + button to see resources</p>
      <div className="accordion">
        <Accordion weekNumber={1}/>
        <Accordion weekNumber={2}/>
        <Accordion weekNumber={3}/>
        <Accordion weekNumber={4}/>
        <Accordion weekNumber={5}/>
        <Accordion weekNumber={6}/>
        <Accordion weekNumber={7}/>
        <Accordion weekNumber={8}/>
        <Accordion weekNumber={9}/>
        <Accordion weekNumber={10} />
        <Accordion weekNumber={11} />
        <Accordion weekNumber={12} />
        <Accordion weekNumber={13} />
        <Accordion weekNumber={14} />
        <Accordion weekNumber={15} />
        <Accordion weekNumber={16} />
      </div>
    </div>
  );
};

export default Dropdown;
