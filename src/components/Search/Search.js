import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "@/assets/svg/search.svg";
import styles from "./Search.module.css";

function Search(props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input className={styles.inputSearch} placeholder="Search" />
        <span className={styles.searchIcon}>
          <SearchIcon />
        </span>
      </div>
    </div>
  );
}

Search.propTypes = {
  theme: PropTypes.string,
};

Search.defaultProps = {
  theme: "light",
};

export default Search;
