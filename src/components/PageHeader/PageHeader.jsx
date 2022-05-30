import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, config }) => {
  const navigate = useNavigate();
  const routeTo = (url) => navigate(url);

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
      <h1>{title}</h1>
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
