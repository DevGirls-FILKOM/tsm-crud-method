import { useTodos } from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default function App() {
  const { todos, loading, error, addTodo, toggleTodo, updateTodo, deleteTodo } = useTodos();

  return (
    <div className="w-full min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">📝 To-Do Notes</h1>

        <TodoForm onAdd={addTodo} />

        {loading && <p className="text-sm text-blue-500">Memuat...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}

        <div>
          {todos.map((t) => (
            <TodoItem
              key={t.id}
              todo={t}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
