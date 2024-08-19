import React from "react";
import styles from "./index.module.scss";

export const Box = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.marginTop}></div>
        <div className={styles.marginRight}></div>
        <div className={styles.marginBottom}></div>
        <div className={styles.marginLeft}></div>
        <div className={styles.paddingTop}></div>
        <div className={styles.paddingRight}></div>
        <div className={styles.paddingBottom}></div>
        <div className={styles.paddingLeft}></div>
      </div>
    </div>
  );
};
