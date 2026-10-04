function TodoFilter({
  filter,
  setFilter,
}) {
  const filters = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "active",
      label: "Active",
    },
    {
      value: "completed",
      label: "Completed",
    },
  ];

  return (
    <div className="flex gap-2 p-5 border-b">

      {filters.map((item) => (
        <button
          key={item.value}
          onClick={() =>
            setFilter(item.value)
          }
          className={
            filter === item.value
              ? "bg-blue-600 text-white px-4 py-2 rounded-lg"
              : "bg-gray-100 text-gray-600 px-4 py-2 rounded-lg"
          }
        >
          {item.label}
        </button>
      ))}

    </div>
  );
}

export default TodoFilter;