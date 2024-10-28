const Result = ({ score, resetQuiz }) => {
    return (
      <div>
        <h2>Your score is: {score}</h2>
        <button onClick={resetQuiz}>Retake Quiz?</button>
      </div>
    );
  };
  
  export default Result;
  