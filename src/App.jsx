import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label>New Item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">Todo List</h1>

      <ul className="header">
        <li>
          <label>
            <input type="checkbox">
              Item 1
            </input>
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}