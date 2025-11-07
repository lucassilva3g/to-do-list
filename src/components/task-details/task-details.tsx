import { IoMdCloseCircle } from "react-icons/io";
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
        <IoMdCloseCircle className="close-icon" onClick={onClose} />

        {tasks
          .filter((t) => t.id === selectedTask)
          .map((task) => (
            <div className="modal-content" key={task.id}>
              <p className="title">{task.title}</p>
              <p className="description">
                {task.description || "No description yet"}
              </p>

              <form onSubmit={onSubmit}>
                <input
                  maxLength={150}
                  value={inputDescription}
                  onChange={onChange}
                  type="text"
                  placeholder="Add Description"
                  className="description-input"
                />
                <button type="submit">add</button>
              </form>
            </div>
          ))}
      </div>
    </div>
  );
}
