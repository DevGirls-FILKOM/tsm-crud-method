import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const { id, title, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  function submitEdit(e) {
    e.preventDefault();
    // TODO: panggil onUpdate(id, newTitle)
    setIsEditing(false);
  }

  return (
    <div className="flex items-center justify-between border border-blue-200 rounded-lg px-3 py-2 mb-2 bg-white shadow-sm">
      {isEditing ? (
        <form onSubmit={submitEdit} className="flex-1 flex gap-2">
          <input
            className="flex-1 border border-blue-300 rounded px-2 py-1 text-sm"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
          />
          <button type="submit" className="text-blue-600 hover:text-blue-800 text-sm">
            Simpan
          </button>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 text-sm"
            onClick={() => { setIsEditing(false); setNewTitle(title); }}
          >
            Batal
          </button>
        </form>
      ) : (
        <>
          <label className="flex items-center gap-2 flex-1">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={completed}
              onChange={() => onToggle(id)} // TODO
            />
            <span className={completed ? "line-through text-gray-400" : ""}>
              {title}
            </span>
          </label>
          <div className="flex gap-3">
            <button
              className="text-blue-500 hover:text-blue-700 text-sm"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:text-red-700 text-sm"
              onClick={() => onDelete(id)} // TODO
            >
              Hapus
            </button>
          </div>
        </>
      )}
    </div>
  );
}
