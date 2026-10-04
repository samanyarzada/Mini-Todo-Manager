import { useState } from "react";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: true,
    },
    {
      id: 2,
      title: "Build a project",
      completed: false,
    },
    {
      id: 3,
      title: "Practice Tailwind",
      completed: false,
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos((prevTodos) => [
      ...prevTodos,
      newTodo,
    ]);
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.filter(
        (todo) => todo.id !== id
      )
    );
  }

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "active") {
      return !todo.completed && matchesSearch;
    }

    if (filter === "completed") {
      return todo.completed && matchesSearch;
    }

    return matchesSearch;
  });

  const activeCount = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <main className="max-w-2xl mx-auto px-5 py-10">

        <TodoForm onAddTodo={addTodo} />

        <div className="bg-white rounded-xl shadow mt-6">

          {/* Search */}
          <div className="p-5 border-b">
            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search tasks..."
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter */}
          <TodoFilter
            filter={filter}
            setFilter={setFilter}
          />

          {/* Counter */}
          <div className="px-5 py-3 text-sm text-gray-500 border-b">
            {activeCount} task
            {activeCount !== 1 ? "s" : ""} remaining
          </div>

          {/* Todo List */}
          <div className="p-5">

            {filteredTodos.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-400 text-lg">
                  No tasks found.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;