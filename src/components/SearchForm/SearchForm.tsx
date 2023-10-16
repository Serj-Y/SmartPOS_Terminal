import React, { ChangeEvent, useState } from "react";
import styles from "./SearchForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const OnHandleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);
  const OnHandleSubmit = (e: { preventDefault: () => void }) => {
    if (searchValue) {
      toast.info("Our input:" + searchValue);
      setSearchValue("");
    }
    e.preventDefault();
  };
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        id="search"
        onBlur={OnHandleSubmit}
        type="search"
        placeholder={"Search..."}
        value={searchValue}
        onChange={OnHandleChange}
      />
      <FontAwesomeIcon
        className={styles.icon}
        onClick={OnHandleSubmit}
        icon={faSearch}
      />
    </div>
  );
};
