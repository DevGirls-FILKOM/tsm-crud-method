export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const { id, title, completed } = todo;

  return (
    <div className="flex items-center justify-between border border-blue-200 rounded-lg px-3 py-2 mb-2 bg-white shadow-sm">
      {/* TODO: Tambahkan mode edit */}
      <label className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)} // TODO: toggle
          className="accent-blue-500"
        />
        <span className={completed ? "line-through text-gray-400" : ""}>
          {title}
        </span>
      </label>
      <div className="flex gap-3">
        <button
          className="text-blue-500 hover:text-blue-700 text-sm"
          onClick={() => onUpdate(id, "New Title")} // TODO: edit judul
        >
          Edit
        </button>
        <button
          className="text-red-500 hover:text-red-700 text-sm"
          onClick={() => onDelete(id)} // TODO: delete
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
