import { useState, useEffect } from "react";
import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Option from "./components/Option";
import styles from "./App.module.css";

function App() {
  const [score, setScore] = useState(() => {
    const storedScore = window.localStorage.getItem("score");
    try {
      return storedScore ? JSON.parse(storedScore) : { good: 0, neutral: 0, bad: 0 };
    } catch (error) {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  const updateFeedback = (feedbackType) => {
    const updatedScore = { ...score, [feedbackType]: score[feedbackType] + 1 };
    setScore(updatedScore);
    window.localStorage.setItem("score", JSON.stringify(updatedScore));
  };

  const resetScore = () => {
    window.localStorage.removeItem("score");
    setScore({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = score.good + score.neutral + score.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((score.good / totalFeedback) * 100) : 0;

  return (
    <>
      <div className={`d-flex align-items-center justify-content-center ${styles.container}`}>
        <div className={styles.card}>
          <Description />
          <Option updateFeedback={updateFeedback} resetScore={resetScore} />
          <Feedback
            score={score}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </div>
      </div>
    </>
  );
}

export default App;
