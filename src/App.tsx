import { Task } from "./components/task/task";
import { Form } from "./components/form/form";

import "./App.css";
import { TaskDetails } from "./components/task-details/task-details";
import { useTasks } from "./hooks/useTasks";
import { FilterButtons } from "./components/filter-buttons/filter-buttons";

function App() {
  const {
    tasks,
    filteredTasks,
    filter,
    inputValue,
    handleAddTask,
    handleRemoveTask,
    handleCheckBoxChange,
    viewTask,
    addDescription,
    inputDescription,
    inputDescriptionValue,
    getEmptyMessage,
    isModalOpen,
    setIsModalOpen,
    selectedTask,
    showAllTasks,
    showActiveTasks,
    showDoneTasks,
    handleChange,
  } = useTasks();
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
        <FilterButtons
          filter={filter}
          showAllTasks={showAllTasks}
          showActiveTasks={showActiveTasks}
          showDoneTasks={showDoneTasks}
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
        <TaskDetails
          inputDescription={inputDescription}
          onClose={() => setIsModalOpen(false)}
          tasks={tasks}
          selectedTask={selectedTask}
          onChange={inputDescriptionValue}
          onSubmit={addDescription}
        />
      )}
    </div>
  );
}

export default App;
