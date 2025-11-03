import { FaEye, FaRegTrashCan } from "react-icons/fa6";
import "./task.css";

interface TaskProps {
  id: number;
  title: string;
  checked: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

export function Task({ id, title, checked, onToggle, onRemove }: TaskProps) {
  return (
    <div className="task-row">
      <div className="task">
        <input
          id={`task-${id}`}
          type="checkbox"
          checked={checked}
          onChange={onToggle}
        />
        <label htmlFor={`task-${id}`} className="custom-checkbox"></label>
        <p className="task-text">{title}</p>
        <button className="removeButton" onClick={onRemove}>
          <FaRegTrashCan />
        </button>
      </div>
      <FaEye />
    </div>
  );
}
