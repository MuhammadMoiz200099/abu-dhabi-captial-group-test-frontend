import React, { useRef } from "react";
import Box from "@mui/material/Box";

const ImageUpload = ({ picture, setPicture, setFile }) => {
  const inputFile = useRef(null);

  const handlePictureSelected = (event) => {
    const file = event.target.files[0];
    setFile(file)
    const image = URL.createObjectURL(file);
    setPicture(image);
  };

  return (
    <Box
      component="div"
      variant="div"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <img
        src={picture}
        alt="profile-pic"
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={() => inputFile.current.click()}
      />
      <input
        type="file"
        id="file"
        ref={inputFile}
        onChange={handlePictureSelected}
        style={{ display: "none" }}
        required
      />
    </Box>
  );
};

export default ImageUpload;
