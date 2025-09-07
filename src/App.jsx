// import { useTodos } from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default function App() {
  // const { todos, loading, error, addTodo, toggleTodo, updateTodo, deleteTodo } = useTodos();

  // sementara pakai dummy agar UI muncul
  const todos = [
    { id: 1, title: "Contoh todo 1", completed: false },
    { id: 2, title: "Contoh todo 2", completed: true },
  ];
  const loading = false;
  const error = "";

  const noop = () => {};

  return (
    <div className="w-full min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          📝 To-Do Notes
        </h1>

        {/* Form tambah todo */}
        <TodoForm onAdd={noop /* TODO: ganti dengan addTodo */} />

        {/* Status */}
        {loading && <p className="text-sm text-blue-500">Memuat...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}

        {/* List Todo */}
        <div>
          {todos.map((t) => (
            <TodoItem
              key={t.id}
              todo={t}
              onToggle={noop /* TODO: connect toggleTodo */}
              onDelete={noop /* TODO: connect deleteTodo */}
              onUpdate={noop /* TODO: connect updateTodo */}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
