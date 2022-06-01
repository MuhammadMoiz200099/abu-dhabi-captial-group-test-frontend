import React, { useRef } from "react";
import classes from "./image-upload.module.scss";

const ImageUpload = ({ picture, setPicture, setFile }) => {
  const inputFile = useRef(null);

  const handlePictureSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
    const image = URL.createObjectURL(file);
    setPicture(image);
  };
  return (
    <div className={classes.image_model}>
      <img
        src={picture}
        alt="profile-pic"
        className={classes.image_model__image}
        onClick={() => inputFile.current.click()}
      />
      <input
        type="file"
        id="file"
        ref={inputFile}
        onChange={handlePictureSelected}
        className={classes.image_model__input_file}
        required
      />
    </div>
  );
};

export default ImageUpload;
