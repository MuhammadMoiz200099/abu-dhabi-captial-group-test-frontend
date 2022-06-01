import React from "react";
import classes from "./button.module.scss";

const Button = ({ children, ...other }) => {
  return (
    <button className={classes.button} {...other}>
      {children}
    </button>
  );
};

export default Button;
