import "./button.css";

interface FilterButtonProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

export function FilterButton({ title, active, onClick }: FilterButtonProps) {
  return (
    <div className="buttons">
      <button
        className={active ? "filter-button active" : "filter-button"}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}
