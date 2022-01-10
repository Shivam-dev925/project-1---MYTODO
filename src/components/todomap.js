import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todomap(props) {
  const { text, onSelect, id } = props;

  return (
    <li>
      {text}
      <FontAwesomeIcon
        onClick={() => onSelect(id)}
        style={{ cursor: "pointer", marginLeft: "100px" }}
        icon={faTrash}
      />
    </li>
  );
}

export default Todomap;
