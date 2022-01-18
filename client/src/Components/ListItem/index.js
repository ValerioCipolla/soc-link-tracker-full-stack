import React from "react";
import "./listitem.css"

const ListItem = ({ weekNumber, dispatch, fetchdata }) => {
  return (
    <li
      onClick={async() =>
        dispatch({
          type: "set-week-state",
          payload: { week: weekNumber, result: await fetchdata(weekNumber) },
        
        })
      }
      className="menuItem"
    >
      Week {weekNumber}
    </li>
  );
};

export default ListItem;
