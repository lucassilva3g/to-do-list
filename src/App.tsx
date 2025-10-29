import { useState } from "react";
import "./App.css";

interface TaskProps {
  id: number;
  title: string;
  checked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [taskId, setTaskId] = useState(1);

  function showDoneTasks() {
    const doneTasks = tasks.filter((task) => task.checked === true);
    setTasks(doneTasks);
  }

  function showActiveTasks() {
    const activeTasks = tasks.filter((task) => task.checked === false);
    setTasks(activeTasks);
  }

  function showAllTasks() {
    const allTasks = tasks.filter((task) => task.checked === false || true);
    setTasks(allTasks);
  }

  function handleCheckBoxChange(index: number) {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleAddTask(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTasks([...tasks, { title: inputValue, id: taskId, checked: false }]);
    setTaskId(taskId + 1);
    setInputValue("");
  }

  function handleRemoveTask(idToRemove: number) {
    const updateTasks = tasks.filter((item) => item.id !== idToRemove);
    setTasks(updateTasks);
  }

  return (
    <div className="content">
      {JSON.stringify(tasks)}
      <h1>To do list</h1>
      {tasks.length} task added
      <div>
        <form onSubmit={handleAddTask}>
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
        <button className="button" onClick={showAllTasks}>
          All
        </button>
        <button className="button" onClick={showActiveTasks}>
          Active
        </button>
        <button className="button" onClick={showDoneTasks}>
          Done
        </button>
      </div>
      <div className="tasks">
        {tasks ? (
          <ul>
            {tasks.map((task, index) => (
              <div className="task">
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => handleCheckBoxChange(index)}
                />
                {task.title}
                <button
                  className="removeButton"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  X
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <p>There's no task added</p>
        )}
      </div>
    </div>
  );
}

export default App;
