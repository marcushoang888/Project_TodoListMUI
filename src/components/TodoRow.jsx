import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteDialog from "./DeleteDialog";
import DeleteAction from "./DeleteAction";
import EditAction from "./EditAction";
export default function TodoRow({ todo, onTodoDelete, onTodoStatusChange, onTodoEdit }) {
  return (
    <ListItem
      secondaryAction={
        <Stack direction="row"> 
          <EditAction todo={todo} onTodoEdit={onTodoEdit} />
          <DeleteAction todo={todo} onTodoDelete={onTodoDelete} />
        </Stack>
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
            checked={todo.done}
            onChange={() => onTodoStatusChange(todo.id)}
          />
        </ListItemIcon>
        <ListItemText
          primary={todo.name}
          sx={{ textDecoration: todo.done ? "line-through" : "none" }}
        />
      </ListItemButton>
    </ListItem>
  );
}
