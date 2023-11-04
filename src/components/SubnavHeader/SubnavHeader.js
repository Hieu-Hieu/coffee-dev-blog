import React from "react";
import Link from "next/link";
import styles from "./SubnavHeader.module.css";

const items = [
  "Javascript",
  "Reactjs",
  "CSS",
  "Vue",
  "Books",
  "Life",
  "Stock",
  "News",
  "Tech",
  "Mobile",
  "Nodejs",
  "Web Design",
];

const SubnavHeader = ({}) => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {items.map((i, key) => {
            return (
              <li className={styles.item} key={key}>
                <Link href={""} className={styles.Itemlink}>
                  {i}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

SubnavHeader.propTypes = {};

export default SubnavHeader;
