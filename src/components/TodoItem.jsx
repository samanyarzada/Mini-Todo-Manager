function TodoItem({
  todo,
  onToggle,
  onDelete,
}) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4">

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5"
        />

        <span
          className={
            todo.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }
        >
          {todo.title}
        </span>

      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>

    </div>
  );
}

export default TodoItem;