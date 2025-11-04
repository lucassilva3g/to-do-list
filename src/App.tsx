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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

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

  function viewTask(id: number) {
    setSelectedTask(id);
    setIsModalOpen(true);
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

  function getEmptyMessage() {
    if (filter === "active") return "🎉 All tasks completed!";
    if (filter === "done") return "There are no completed tasks";
    return "There's no task added";
  }

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
        <FilterButton
          title="All"
          active={filter === "all"}
          onClick={showAllTasks}
        />
        <FilterButton
          title="Active"
          active={filter === "active"}
          onClick={showActiveTasks}
        />
        <FilterButton
          title="Done"
          active={filter === "done"}
          onClick={showDoneTasks}
        />
      </div>
      <div className="tasks">
        {filteredTasks.length > 0 ? (
          <div className="task-list">
            {filteredTasks.map((task, index) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                checked={task.checked}
                onToggle={() => handleCheckBoxChange(index)}
                onRemove={() => handleRemoveTask(task.id)}
                onView={viewTask}
              />
            ))}
          </div>
        ) : (
          <p>{getEmptyMessage()}</p>
        )}
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Task Details</h2>
            {tasks
              .filter((t) => t.id === selectedTask)
              .map((task) => (
                <p className="title" key={task.id}>{task.title}</p>
              ))}
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
