import React, { useState } from "react";
import styles from "./Main.module.css";
import ResultCard from "./components/ResultCard";
import RateCard from "./components/RateCard";

function App() {
  const [step, setStep] = useState("rate");
  const [rate, setRate] = useState(0);
  console.log(rate);

  return (
    <div className={styles.container}>
      {step === "rate" ? (
        <RateCard setStep={setStep} rate={rate} setRate={setRate} />
      ) : (
        <ResultCard rate={rate} />
      )}
    </div>
  );
}

export default App;
