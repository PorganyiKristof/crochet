import React from "react";
import styles from "@styles/loader.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader} />
    </div>
  );
}
