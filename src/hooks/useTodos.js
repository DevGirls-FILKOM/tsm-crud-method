// TODO: Lengkapi semua fitur CRUD dengan useState + useEffect.
// API saran: https://jsonplaceholder.typicode.com/todos

// import { useEffect, useState } from "react";

export function useTodos() {
  // const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // READ (initial fetch)
  // useEffect(() => {
  //   // TODO: fetch todos (limit secukupnya)
  // }, []);

  // CREATE
  // async function addTodo(title) {
  //   // TODO: POST -> update state
  // }

  // TOGGLE (completed)
  // async function toggleTodo(id) {
  //   // TODO: PATCH -> update state
  // }

  // UPDATE (edit title)
  // async function updateTodo(id, newTitle) {
  //   // TODO: PATCH -> update state
  // }

  // DELETE
  // async function deleteTodo(id) {
  //   // TODO: DELETE -> update state
  // }

  // Placeholder supaya app tidak error sebelum diisi.
  return {
    todos: [
      { id: 1, title: "Contoh todo 1", completed: false },
      { id: 2, title: "Contoh todo 2", completed: true },
    ],
    loading: false,
    error: "",
    addTodo: () => {},      // TODO
    toggleTodo: () => {},   // TODO
    updateTodo: () => {},   // TODO
    deleteTodo: () => {},   // TODO
  };
}
