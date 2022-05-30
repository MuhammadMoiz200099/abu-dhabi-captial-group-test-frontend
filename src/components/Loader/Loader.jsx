import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
      <CircularProgress size={100} />
    </div>
  );
};

export default Loader;
