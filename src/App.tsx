import { useState } from "react";
import "./App.css";

interface TaskProps {
  id: number;
  title: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [taskId, setTaskId] = useState(1);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleAddTask(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTasks([...tasks, { title: inputValue, id: taskId }]);
    setTaskId(taskId + 1);
    setInputValue("");
  }
  function handleRemoveTask(idToRemove: number) {
    const updateTasks = tasks.filter((item) => item.id !== idToRemove);
    setTasks(updateTasks);
  }
  return (
    <div className="content">
      <h1>To do list</h1>0 task added
      <div>
        <form onSubmit={handleAddTask}>
          {/* <input type="checkbox" /> */}
          <input
            className="input"
            placeholder="Add a new task..."
            value={inputValue}
            type="text"
            onChange={handleChange}
          />{" "}
          <button className="add-button" type="submit">
            +
          </button>
        </form>
      </div>
      <div className="buttons">
        <button className="button">All</button>
        <button className="button">Active</button>
        <button className="button">Done</button>
        <div>
          {tasks ? (
            <ul>
              {tasks.map((task) => (
                <p>
                  {task.title}
                  <button onClick={() => handleRemoveTask(task.id)}>X</button>
                </p>
              ))}
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
