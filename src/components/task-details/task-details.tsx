import type { TaskProps } from "../../App";
import "./task-details.css";

interface DetailsProps {
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  inputDescription: string;
  tasks: TaskProps[];
  selectedTask: number | null;
}

export function TaskDetails({
  onClose,
  onChange,
  onSubmit,
  inputDescription,
  tasks,
  selectedTask,
}: DetailsProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>Close</button>

        {tasks
          .filter((t) => t.id === selectedTask)
          .map((task) => (
            <div key={task.id}>
              <p className="title">{task.title}</p>
              <p>{task.description || "No description yet"}</p>

              <form onSubmit={onSubmit}>
                <input
                  value={inputDescription}
                  onChange={onChange}
                  type="text"
                  placeholder="Add Description"
                />
                <button type="submit">add</button>
              </form>
            </div>
          ))}
      </div>
    </div>
  );
}
