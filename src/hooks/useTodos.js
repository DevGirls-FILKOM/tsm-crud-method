// TODO: Implementasikan CRUD To-Do di sini
// gunakan useState + useEffect
// API bebas, misalnya https://jsonplaceholder.typicode.com/todos

export function useTodos() {
  // const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   // TODO: Fetch initial todos dari API
  // }, []);

  // function addTodo(title) {
  //   // TODO: Create todo baru
  // }

  // function toggleTodo(id) {
  //   // TODO: Update completed true/false
  // }

  // function updateTodo(id, newTitle) {
  //   // TODO: Update judul todo
  // }

  // function deleteTodo(id) {
  //   // TODO: Delete todo
  // }

  return {
    todos: [],         // TODO: return real todos
    loading: false,
    error: "",
    addTodo: () => {}, 
    toggleTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {}
  };
}
