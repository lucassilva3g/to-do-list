import { useState } from "react";
import type { TaskProps } from "../App";

export function useTasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [taskId, setTaskId] = useState(1);
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  const [inputDescription, setInputDescription] = useState("");

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

  const filteredTasks: TaskProps[] = tasks.filter((task) => {
    if (filter === "active") return !task.checked;
    if (filter === "done") return task.checked;
    return true;
  });

  function getEmptyMessage() {
    if (filter === "active") return "🎉 All tasks completed!";
    if (filter === "done") return "There are no completed tasks";
    return "There's no task added";
  }

  function addDescription(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputDescription.trim() === "") return;
    if (selectedTask === null) return;

    const updatedTasks = tasks.map((task) =>
      task.id === selectedTask
        ? { ...task, description: inputDescription }
        : task
    );

    setTasks(updatedTasks);
    setInputDescription("");
  }

  function inputDescriptionValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputDescription(e.target.value);
  }

  return {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    inputValue,
    setInputValue,
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
  };
}
