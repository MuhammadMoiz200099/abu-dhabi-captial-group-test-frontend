import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./base-component.module.scss";

const BaseComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default BaseComponent;
