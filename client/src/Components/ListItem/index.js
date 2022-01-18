import React from "react";
import "./listitem.css"
const ListItem = ({ weekNumber, dispatch }) => {
  return (
    <li
      onClick={() =>
        dispatch({
          type: "set-week-state",
          payload: { week: weekNumber },
        })
      }
      className="menuItem"
    >
      Week {weekNumber}
    </li>
  );
};

export default ListItem;
