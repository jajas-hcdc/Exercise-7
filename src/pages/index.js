import { useState } from "react";
import Quiz from "../components/Quiz";
import Result from "../components/Result";

export default function Home() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const resetQuiz = () => {
    setShowResult(false);
    setScore(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Quiz App on ADV</h1>
      {!showResult ? (
        <Quiz setShowResult={setShowResult} setScore={setScore} />
      ) : (
        <Result score={score} resetQuiz={resetQuiz} />
      )}
    </div>


  );
}
