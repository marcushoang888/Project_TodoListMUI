import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function TodoSelect({ status, onTodoSelectChange }) {
  return (
    <Box sx={{ minWidth: 120, maxWidth: 200, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          onChange={onTodoSelectChange}
        >
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="done">done</MenuItem>
          <MenuItem value="undone">undone</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
