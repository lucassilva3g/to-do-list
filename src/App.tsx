import { useState } from "react";
import { Task } from "./components/task/task";
import { Form } from "./components/form/form";
import { FilterButton } from "./components/button/button";

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
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");

  function showAllTasks() {
    setFilter("all");
  }

  function showActiveTasks() {
    setFilter("active");
  }

  function showDoneTasks() {
    setFilter("done");
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.checked;
    if (filter === "done") return task.checked;
    return true;
  });

  return (
    <div className="content">
      <h1>To do list</h1>
      {tasks.length} task added
      <Form
        value={inputValue}
        onChange={handleChange}
        onSubmit={handleAddTask}
      />
      <div className="filter-buttons">
        <FilterButton title="All" onClick={showAllTasks} />
        <FilterButton title="Active" onClick={showActiveTasks} />
        <FilterButton title="Done" onClick={showDoneTasks} />
      </div>
      <div className="tasks">
        {filteredTasks.length > 0 ? (
          <ul>
            {filteredTasks.map((task, index) => (
              <Task
                id={task.id}
                title={task.title}
                checked={task.checked}
                onToggle={() => handleCheckBoxChange(index)}
                onRemove={() => handleRemoveTask(task.id)}
              />
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
