import React from "react";

const Display = ({ week, result}) => {
  return (
    <div>
      <h4>
        {week
          ? `Displaying results for week ${week}`
          : `Pick the week you want!`}
      </h4>
      <ul>
        {result===null? "No results to display" : result.payload.map(function (link) {
          return <li key={link.id}>
            {link.name}
          </li>
        })}
      </ul>
    </div>
  );
};

export default Display;
