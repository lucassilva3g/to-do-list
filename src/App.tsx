import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTask(inputValue);
    setInputValue("");
  }
  return (
    <div>
      <h1>To do list</h1>0 task added
      <div>
        <input type="checkbox" />
        <input type="text" onChange={handleChange} />{" "}
        <button type="submit" onClick={handleAddTask}>
          +
        </button>
      </div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Done</button>
        {task ? <p>{task}</p> : <p>There's no task added</p>}
      </div>
    </div>
  );
}

export default App;
