type ProjectSearchProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export function ProjectSearch({ value, onValueChange,}: ProjectSearchProps) {
  return (
    <label>
      Поиск проектов
      <input
        type="search"
        value={value}
        onChange={(event) =>
          onValueChange(event.currentTarget.value)
        }
      />
    </label>
  );
}