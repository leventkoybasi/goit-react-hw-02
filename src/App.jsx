import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Option from "./components/Option";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={`d-flex align-items-center justify-content-center ${styles.container}`}>
        <div className={styles.card}>
          <Description />
          <Option />
          <Feedback />
        </div>
      </div>
    </>
  );
}

export default App;
