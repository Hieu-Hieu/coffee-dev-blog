import React from "react";
import styles from "./MainPosts.module.css";
import PostItem from "../PostItem/PostItem";

function MainPosts(props) {
  return (
    <div className={styles.container}>
      <ul className={styles.lists}>
        {[1, 2, 3, 4, 5].map((item, idx) => {
          return <PostItem key={item} />;
        })}
      </ul>
    </div>
  );
}

MainPosts.propTypes = {};

export default MainPosts;
