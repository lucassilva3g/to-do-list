import "./form.css";

interface FormProps {
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export function Form({ onSubmit, onChange, value }: FormProps) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          placeholder="Add a new task..."
          value={value}
          type="text"
          onChange={onChange}
          maxLength={70}
        />{" "}
        <button className="add-button" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
