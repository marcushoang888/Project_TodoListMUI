import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteDialog from "./DeleteDialog";

export default function DeleteAction({ todo, onTodoDelete }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <DeleteDialog
        open={open}
        onClose={handleClose}
        todo={todo}
        onTodoDelete={onTodoDelete}
      />
    </Box>
  );
}
