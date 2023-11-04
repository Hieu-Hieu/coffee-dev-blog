import React from "react";
import styles from "./PostItem.module.css";
import Link from "next/link";
import Image from "next/image";

function PostItem({}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Link href={"#"}>
            <Image src="/next.svg" alt="jjjj" width={650} height={280} />
          </Link>
        </div>
        <div className={styles.body}>
          <ul>
            <li>#tag1</li>
            <li>#tag2</li>
            <li>#tag3</li>
          </ul>
          <div className={styles.indentions}>
            <h3 className={styles.title}>
              <Link href={"#"}>
                <span>Đây là title nhé</span>
              </Link>
            </h3>
            <p>
              Lorem iadvav advjandvnwew sdjvwsnvjw jvwjvnj svbjsdbvjsd sjdvjsdv
              sjdvjsdv jsjvsdj jsdvjsjdv jnaljscn jjsjdvsbbb jjbj
              <a href="#">Read more...</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

PostItem.propTypes = {};

export default PostItem;
