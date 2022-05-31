import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Search = ({ onInput, search }) => {
  return (
    <Box sx={{ mb: 1 }}>
      <TextField
      sx={{ width: { xs: "100%", sm: "100%", md: 400 }}}
        id="outlined-basic"
        label="Search"
        value={search}
        name="search"
        placeholder="Search"
        variant="outlined"
        onInput={onInput}
      />
    </Box>
  );
};

export default Search;
