import React from "react";

const ListItem = ({ weekNumber, dispatch, fetchdata }) => {
  return (
    <li
      onClick={async() =>
        dispatch({
          type: "set-week-state",
          payload: { week: weekNumber, result: await fetchdata(weekNumber) },
        
        })
      }
    >
      Week {weekNumber}
    </li>
  );
};

export default ListItem;
