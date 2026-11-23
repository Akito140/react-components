const filters = [
  { value: "all", label: "Everyone" },
  { value: "active", label: "Active only" },
];

export default function StudentFilter({ value, onChange }) {
  return (
    <div className="filter-control" role="group" aria-label="Filter students">
      {filters.map((filter) => (
        <button
          className={`filter-button${value === filter.value ? " selected" : ""}`}
          key={filter.value}
          type="button"
          aria-pressed={value === filter.value}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
