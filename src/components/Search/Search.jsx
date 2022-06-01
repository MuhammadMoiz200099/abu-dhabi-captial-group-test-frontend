import React from "react";
import classes from "./search.module.scss";

const Search = ({ onInput, search }) => {
  return (
    <div className={classes.page}>
      <input
        className={classes.page__input}
        type="text"
        value={search}
        name="search"
        placeholder="Search"
        onInput={onInput}
      />
    </div>
  );
};

export default Search;
