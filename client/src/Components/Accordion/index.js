import React, { useState } from "react";
import LinkItem from "../LinkItem";

const Accordion = ({ weekNumber }) => {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState([]);

  async function handleClick() {
    const newContent = await fetchdata(weekNumber);
    console.log(newContent.payload);
    setContent(newContent.payload);
    setIsActive(!isActive);
  }

  async function fetchdata(week) {
    const res = await fetch(`/api/links/week/${week}`);
    const data = await res.json();
    return data;
  }

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={handleClick}>
        <div>Week {weekNumber}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map(function (item) {
            return <LinkItem name={item.name} url={item.link} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
