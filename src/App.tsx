import { useState } from "react";
import "./App.css";

interface TaskProps {
  title: string;
}

function App() {
  const [tasks, setTask] = useState<TaskProps[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleAddTask(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTask([...tasks, { title: inputValue }]);
    setInputValue("");
  }
  return (
    <div>
      <h1>To do list</h1>0 task added
      <div>
        <form onSubmit={handleAddTask}>
          <input type="checkbox" />
          <input type="text" onChange={handleChange} />{" "}
          <button type="submit">+</button>
        </form>
      </div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Done</button>
        <div>
          {tasks ? (
            <ul>
              <p>
                {tasks.map((task) => (
                  <li>{task.title}</li>
                ))}
              </p>
            </ul>
          ) : (
            <p>There's no task added</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
