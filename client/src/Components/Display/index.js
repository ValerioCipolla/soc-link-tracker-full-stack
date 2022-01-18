import React from "react";

const Display = ({ week }) => {
  return (
    <div>
      <h4>
        {week
          ? `Displaying results for week ${week}`
          : `Pick the week you want!`}
      </h4>
    </div>
  );
};

export default Display;
