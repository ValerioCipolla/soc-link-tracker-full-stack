import React from "react";

const LinkItem = ({ name, url }) => {
  return (
    <li>
      <a rel="noopener noreferrer" target="_blank" href={url}>
        {name}
      </a>
    </li>
  );
};

export default LinkItem;
