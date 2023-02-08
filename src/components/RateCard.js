import styles from "./RateCard.module.css";

const rates = [1, 2, 3, 4, 5];

function RateCard({ setStep, rate, setRate }) {
  return (
    <div className={styles.mainCard}>
      <div className={styles.imgDiv}>
        <img src="../icon-star.svg" alt="star img" />
      </div>
      <h1 className={styles.cardHeading}>How did we do?</h1>
      <p className={styles.cardDescription}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styles.rateButtonsContainer}>
        {rates.map((el) => {
          return (
            <button
              onClick={() => {
                setRate(el);
              }}
              className={`${
                el === rate ? `${styles.active} ` : styles.rateButton
              }`}
              key={el}
            >
              {el}
            </button>
          );
        })}
      </div>
      <button
        className={`${rate !== 0 ? styles.submitButton : styles.disableButton}`}
        disabled={rate === 0}
        onClick={() => setStep("result")}
      >
        SUBMIT
      </button>
    </div>
  );
}
export default RateCard;
