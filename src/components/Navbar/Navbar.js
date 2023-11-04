import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Search from "@/components/Search/Search";
import styles from "./navbar.module.css";
import GithubIcon from "@/assets/svg/github.svg";

const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.logo}>
          <Image src="/logo.svg" alt="my logo" width={60} height={60} />
        </span>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.menu}>
          <Link className={styles.navlink} href="/">
            Bài mới
          </Link>
          <Link className={styles.navlink} href="/contact">
            Nổi bật
          </Link>
          <Link className={styles.navlink} href="/">
            No codes
          </Link>
          <Link className={styles.navlink} href="/">
            Khác
          </Link>
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link href={"/"} className={`${styles.actionsIcon} button-hover`}>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
