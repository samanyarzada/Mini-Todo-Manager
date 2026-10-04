import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task.");
      return;
    }

    onAddTodo(title.trim());

    setTitle("");
    setError("");
  }

  return (
    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-bold mb-4">
        Add New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex gap-3"
      >
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="What do you need to do?"
          className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error}
        </p>
      )}

    </div>
  );
}

export default TodoForm;