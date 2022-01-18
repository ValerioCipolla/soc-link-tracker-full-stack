import React from "react";

const ListItem = ({ weekNumber, dispatch }) => {
  return (
    <li
      onClick={() =>
        dispatch({
          type: "set-week-state",
          payload: { week: weekNumber },
        })
      }
    >
      Week {weekNumber}
    </li>
  );
};

export default ListItem;
