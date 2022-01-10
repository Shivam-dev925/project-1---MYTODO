import "./Todo.css";
import React, { useState } from "react";
import Todomap from "../components/todomap";

function TodoComponent(props) {
  const { title } = props;
  const [value, setValue] = useState("");
  const [listItem, setListItem] = useState([]);

  const ListOfItems = () => {
    setListItem((oldvalue) => {
      return [...oldvalue, value];
    });
    setValue("");
  };

  const deleteItem = (id) => {
    setListItem((oldvalue) => {
      return oldvalue.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <header>
            <h1>{title}</h1>
          </header>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="ADD ITEMS..."
          />
          <button onClick={ListOfItems}>+</button>

          {listItem.map((itemval, index) => {
            return (
              <Todomap
                key={index}
                id={index}
                onSelect={deleteItem}
                text={itemval}
              />
            );
          })}
          <button
            style={{ marginTop: "40px", border: "none", borderRadius: "10px" }}
            onClick={() => setListItem([])}
          >
            REMOVE ITEMS
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoComponent;
