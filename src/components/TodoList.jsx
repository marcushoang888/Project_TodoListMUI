import { List } from "@mui/material";
import TodoRow from "./TodoRow";

export default function TodoList({
  todos,
  status,
  onTodoStatusChange,
  onTodoDelete,
  onTodoEdit
}) {
  let filterTodos;
  if (status === "all") {
    filterTodos = todos;
  } else if (status === "done") {
    filterTodos = todos.filter((todo) => todo.done);
  } else if (status === "undone") {
    filterTodos = todos.filter((todo) => !todo.done);
  }

  return (
    <List>
      {filterTodos.map((todo) => (
        <TodoRow
          key={todo.id}
          todo={todo}
          onTodoDelete={onTodoDelete}
          onTodoStatusChange={onTodoStatusChange}
          onTodoEdit = {onTodoEdit}
        />
      ))}
    </List>
  );
}