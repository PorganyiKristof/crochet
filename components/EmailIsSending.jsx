import React from "react";
import styles from '@styles/loaderemail.module.css'

export default function EmailIsSending() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-40 bg-gray-400 bg-opacity-20 flex justify-center items-center">
        <span className={styles.loader} />
    </div>
  );
}
