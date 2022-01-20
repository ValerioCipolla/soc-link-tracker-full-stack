import React from "react";
import "./index.css";

const LinkItem = ({ name, url, tag }) => {
  return (
    <li className="dropdown-list-item">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={url}
      >
        {name} 
        {tag}
      </a>
    </li>
  );
};

export default LinkItem;
