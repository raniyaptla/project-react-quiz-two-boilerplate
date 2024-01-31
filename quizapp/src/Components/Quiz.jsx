// componenets/quiz.jsx
import questions from "../questions.json"; 
import React, { useState} from "react";


export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleQuit = () => {
    const confirmQuit = window.confirm("Are you sure you want to quit?");
    if (confirmQuit) {
      // Perform quit actions or redirect to another page
      console.log("User has quit the quiz.");
    }
  };

  return (
    <div className="qz">
      <h2>Question</h2>

      <div>
        <span>{currentQuestionIndex + 1} of {questions.length}</span>
        <h5>{currentQuestion.question}</h5>
      </div>

      <div className="opts">
        <p className="opt">{currentQuestion.optionA}</p>
        <p className="opt">{currentQuestion.optionB}</p>
      </div>

      <div className="opts">
        <p className="opt">{currentQuestion.optionC}</p>
        <p className="opt">{currentQuestion.optionD}</p>
      </div>

      <div className="btns">
        <button className="prev" onClick={handlePrevious}>
          Previous
        </button>
        <button className="nxt" onClick={handleNext}>
          Next
        </button>
        <button className="quit" onClick={handleQuit}>
          Quit
        </button>
      </div>
    </div>
  );
}
