import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import DefaultImage from "./../../assets/user.png";

const ImageUpload = ({ setPicture }) => {
  const [image, setImage] = useState(DefaultImage);
  const inputFile = useRef(null);

  const handlePictureSelected = (event) => {
    const file = event.target.files[0];
    const image = URL.createObjectURL(file);
    setPicture(image);
    setImage(image);
  };

  return (
    <Box
      component="div"
      variant="div"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <img
        src={image}
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
      />
    </Box>
  );
};

export default ImageUpload;
