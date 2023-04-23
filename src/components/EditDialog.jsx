import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function EditDialog({ todo, onTodoEdit, onClose, open }) {
  const [text, setText] = useState(todo.name);
  function handleInputChange(e) {
    setText(e.target.value);
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={text}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setText(todo.name);
            onClose();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onTodoEdit({ ...todo, name: text });
            onClose();
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
