import { useState } from "react";
import TodoAddBar from "./TodoAddBar";
import TodoList from "./TodoList";
import TodoSelect from "./TodoSelect";
import { Box, Container } from "@mui/material";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Clean house", done: true },
    { id: 2, name: "Learn Javascript", done: false },
  ]);
  const [status, setStatus] = useState("all");

  function handleTodoAdd(newTodo) {
    setTodos([...todos, newTodo]);
  }
  function handleTodoDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleTodoEdit(updateTodo) {
    setTodos(todos.map( (todo)  => todo.id === updateTodo.id ? updateTodo: todo))
  }

  function handleTodoStatusChange(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }

  function handleTodoSelectChange(e) {
    setStatus(e.target.value);
  }

  return (
    <Box mt={6}>
      <Container maxWidth="sm">
        <TodoSelect
          onTodoSelectChange={handleTodoSelectChange}
          status={status}
        />
        <TodoAddBar onTodoAdd={handleTodoAdd} />
        <TodoList
          todos={todos}
          status={status}
          onTodoStatusChange={handleTodoStatusChange}
          onTodoDelete={handleTodoDelete}
          onTodoEdit = {handleTodoEdit}
        />
      </Container>
    </Box>
  );
}
