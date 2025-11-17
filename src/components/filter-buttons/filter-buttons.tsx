import { FilterButton } from "../button/button";

type Props = {
  filter: string;
  showAllTasks: () => void;
  showActiveTasks: () => void;
  showDoneTasks: () => void;
};

export function FilterButtons({
  filter,
  showAllTasks,
  showActiveTasks,
  showDoneTasks,
}: Props) {
  const buttons = [
    { title: "All", key: "all", onClick: showAllTasks },
    { title: "Active", key: "active", onClick: showActiveTasks },
    { title: "Done", key: "done", onClick: showDoneTasks },
  ];

  return (
    <div className="filter-buttons">
      {buttons.map((b) => (
        <FilterButton
          key={b.key}
          title={b.title}
          active={filter === b.key}
          onClick={b.onClick}
        />
      ))}
    </div>
  );
}