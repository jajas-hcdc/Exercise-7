import { useState } from "react";
import { questions } from "../data/questions";

const Quiz = ({ setShowResult, setScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScore(correctAnswers + (selectedAnswer === questions[currentQuestion].answer ? 1 : 0));
      setShowResult(true);
    }
  };

  return (
    <div>
      <h2>{questions[currentQuestion].question}</h2>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => setSelectedAnswer(index)}
              style={{
                backgroundColor: selectedAnswer === index ? "lightblue" : "white",
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
        Next
      </button>
    </div>
  );
};

export default Quiz;
