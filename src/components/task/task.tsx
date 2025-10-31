import "./task.css";

interface TaskProps {
  id: number;
  title: string;
  checked: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

export function Task({ title, checked, onToggle, onRemove }: TaskProps) {
  return (
    <div className="task">
      <input type="checkbox" checked={checked} onChange={onToggle} />
      {title}
      <button className="removeButton" onClick={onRemove}>
        X
      </button>
    </div>
  );
}
