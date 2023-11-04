"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import SunIcon from "@/assets/svg/sun.svg";
import MoonIcon from "@/assets/svg/moon.svg";

import styles from "./ThemeToggle.module.css";

function ThemeToggle(props) {
  const [theme, setTheme] = useState("light");
  return (
    <div className={styles.container}>
      <div
        className={`${styles.wrapper} button-hover`}
        onClick={() => setTheme((pre) => (pre === "light" ? "dark" : "light"))}
      >
        <span
          className={`${styles.moonIcon} ${
            theme === "light" ? styles.show : ""
          }`}
        >
          <MoonIcon />
        </span>

        <span
          className={`${styles.sunIcon} ${theme === "dark" ? styles.show : ""}`}
        >
          <SunIcon />
        </span>
      </div>
    </div>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.string,
};

ThemeToggle.default = {
  theme: "light",
};

export default ThemeToggle;
