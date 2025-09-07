export default function TodoForm({ onAdd }) {
  // TODO: pakai useState untuk kontrol input
  const noop = () => {};

  return (
    <form
      className="flex gap-2 mb-6"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: ambil nilai input & panggil onAdd(text)
      }}
    >
      <input
        type="text"
        placeholder="Tulis catatan baru..."
        className="flex-1 border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value=""        // TODO
        onChange={noop} // TODO
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition"
      >
        Tambah
      </button>
    </form>
  );
}
