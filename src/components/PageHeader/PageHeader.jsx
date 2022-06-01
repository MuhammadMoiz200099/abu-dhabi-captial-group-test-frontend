import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./pageheader.module.scss";
import { BiArrowBack } from "react-icons/bi";
import Button from "../Button/Button";

const PageHeader = ({ title, config, navigate }) => {
  const router = useNavigate();
  const routeTo = (url) => router(url);
  return (
    <div className={classes.page}>
      <div className={classes.page__title}>
        {navigate && (
          <BiArrowBack
            size={28}
            className={classes.page__title__back_button}
            onClick={() => routeTo("/customer?page=0&rowsPerPage=5&search=")}
          />
        )}
        <h1>{title}</h1>
      </div>
      {config && config.length ? (
        <div className={classes.page__buttons}>
          {config.map((button, idx) => (
            <Button type="button" key={idx} onClick={() => routeTo(button.url)}>
              {button.name}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PageHeader;
