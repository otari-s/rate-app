import React from "react";
import styles from "./ResultCard.module.css";

function ResultCard({ rate }) {
  return (
    <div className={styles.container}>
      <div className={styles.resultCardMain}>
        <img className={styles.resultCardImg} src="../image.svg" alt="img" />
        <div className={styles.result}>You selected {rate} out of 5</div>
      </div>
      <h1 className={styles.resultCardHeading}>Thank you!</h1>
      <p className={styles.resultCardDescription}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
export default ResultCard;
