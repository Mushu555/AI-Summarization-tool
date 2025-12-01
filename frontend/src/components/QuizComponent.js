import React, { useState } from 'react';
import styles from '../styles/styles';

const QuizComponent = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (idx) => {
    setSelectedAnswer(idx);
    if (idx === quiz[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quiz.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  if (showResult) {
    return (
      <div style={styles.quizResult}>
        <div style={styles.resultIcon}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#00D9FF" opacity="0.2" />
            <path d="M8 12l3 3 5-6" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 style={styles.resultTitle}>Quiz Complete!</h3>
        <p style={styles.resultScore}>Your Score: {score} / {quiz.length}</p>
        <p style={styles.resultPercentage}>{Math.round((score / quiz.length) * 100)}%</p>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswer(null);
            setScore(0);
            setShowResult(false);
          }}
          style={styles.retakeButton}
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={styles.quizContainer}>
      <div style={styles.quizHeader}>
        <span style={styles.quizProgress}>Question {currentQuestion + 1} of {quiz.length}</span>
        <div style={styles.progressDots}>
          {quiz.map((_, idx) => (
            <div
              key={idx}
              style={{
                ...styles.progressDot,
                ...(idx === currentQuestion ? styles.progressDotActive : {}),
                ...(idx < currentQuestion ? styles.progressDotComplete : {})
              }}
            />
          ))}
        </div>
      </div>

      <h3 style={styles.quizQuestion}>{quiz[currentQuestion].question}</h3>

      <div style={styles.quizOptions}>
        {quiz[currentQuestion].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            disabled={selectedAnswer !== null}
            style={{
              ...styles.quizOption,
              ...(selectedAnswer === idx && idx === quiz[currentQuestion].correct ? styles.quizOptionCorrect : {}),
              ...(selectedAnswer === idx && idx !== quiz[currentQuestion].correct ? styles.quizOptionWrong : {}),
              ...(selectedAnswer !== null && idx === quiz[currentQuestion].correct ? styles.quizOptionCorrect : {})
            }}
          >
            <span style={styles.optionLetter}>{String.fromCharCode(65 + idx)}</span>
            <span style={styles.optionText}>{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizComponent;
