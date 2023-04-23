import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function TodoAddBar({ onTodoAdd }) {
  const [text, setText] = useState("");
  function handleInputChange(e) {
    setText(e.target.value);
  }

  return (
    <Stack>
      <TextField
        sx={{ flexGrow: 1 }}
        label="New task"
        variant="outlined"
        value={text}
        onChange={handleInputChange}
      />

      <Button
        variant="contained"
        onClick={() => {
          onTodoAdd({ id: crypto.randomUUID(), name: text, done: false });
          setText("");
        }}
        disabled = { text === ""}
      >
        Add
      </Button>
    </Stack>
  );
}
