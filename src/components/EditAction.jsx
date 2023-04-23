import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditDialog from "./EditDialog";
import { useState } from "react";

export default function EditAction({todo, onTodoEdit}) {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(true)
    }


    function handleClose() {
        setOpen(false)
    }
  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <EditDialog onClose={handleClose} open={open} onTodoEdit={onTodoEdit} todo={todo}/>
    </Box>
  );
}
