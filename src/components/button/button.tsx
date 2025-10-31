import "./button.css";

interface FilterButtonProps {
  title: string;
  onClick: () => void;
}

export function FilterButton({ title, onClick }: FilterButtonProps) {
  return (
    <div className="buttons">
      <button className="button" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
