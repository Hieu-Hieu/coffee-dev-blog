import React from "react";
import styles from "./RightSide.module.css";
import Image from "next/image";

function RightSide(props) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.imageWrap}>
          <Image
            src={"https://media4.giphy.com/media/VbAFrrDVGAvZu/giphy.gif"}
            alt="aaa"
            width={300}
            height={300}
          />
        </div>
        <p>Xin chào! Tôi là coffe dev</p>
        <p>Đây là blog của tôi, thật vui khi bạn đến đây</p>
      </div>
    </div>
  );
}

RightSide.propTypes = {};

export default RightSide;
