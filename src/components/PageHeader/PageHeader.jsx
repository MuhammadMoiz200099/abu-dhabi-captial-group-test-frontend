import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const PageHeader = ({ title, config, navigate }) => {
  const router = useNavigate();
  const routeTo = (url) => router(url);

  return (
    <Box
      component="div"
      variant="div"
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack spacing={1} direction="row">
        {navigate && (
          <IconButton aria-label="keyboard-back" onClick={() => routeTo(navigate)}>
            <KeyboardBackspaceIcon />
          </IconButton>
        )}
        <h1>{title}</h1>
      </Stack>
      {config && config.length ? (
        <Stack spacing={2} direction="row">
          {config.map((button, idx) => (
            <Button
              key={idx}
              variant="contained"
              onClick={() => routeTo(button.url)}
              sx={{
                height: 40,
              }}
            >
              {button.name}
            </Button>
          ))}
        </Stack>
      ) : null}
    </Box>
  );
};

export default PageHeader;
