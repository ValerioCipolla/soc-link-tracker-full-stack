import React from "react";
import Accordion from "../Accordion/index.js";
import "./index.css";

const Dropdown = () => {
  return (
    <div>
      <h1>SOC Resource Link Tracker</h1>
      <p>click the + button to see resources</p>
      <div className="accordion">
        <Accordion title="Week 1" />
        <Accordion title="Week 2" />
        <Accordion title="Week 3" />
        <Accordion title="Week 4" />
        <Accordion title="Week 5" />
        <Accordion title="Week 6" />
        <Accordion title="Week 7" />
        <Accordion title="Week 8" />
        <Accordion title="Week 9" />
        <Accordion title="Week 10" />
        <Accordion title="Week 11" />
        <Accordion title="Week 12" />
        <Accordion title="Week 13" />
        <Accordion title="Week 14" />
        <Accordion title="Week 15" />
        <Accordion title="Week 16" />
      </div>
    </div>
  );
};

export default Dropdown;
