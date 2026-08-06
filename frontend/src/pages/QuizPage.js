import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../services/api";

const QuizPage = () => {
    const { video_id } = useParams();
    const [quiz, setQuiz] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState({});

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/videos/quiz/${video_id}`)
            .then(res => res.json())
            .then(data => {
                setQuiz(data.quiz || []);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [video_id]);

    const handleAnswer = (qIndex, option) => {
        setSelectedAnswers((prev) => ({ ...prev, [qIndex]: option }));
        setShowResults((prev) => ({ ...prev, [qIndex]: true }));
    };

    if (loading)
        return <h2 style={{ color: "white", padding: 20 }}>Loading Quiz...</h2>;

    return (
        <div style={{
            padding: "40px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#fff"
        }}>
            <h1 style={{ color: "#00D9FF" }}>Quiz</h1>

            {quiz.length === 0 ? (
                <p style={{ color: "#ff9b9b", marginTop: 20 }}>⚠️ No quiz questions found.</p>
            ) : (
                <div style={{ marginTop: 30 }}>
                    {quiz.map((q, index) => {
                        const userAnswer = selectedAnswers[index];
                        const correctAnswer = q.answer;
                        const reveal = showResults[index];

                        return (
                            <div
                                key={index}
                                style={{
                                    background: "#1E293B",
                                    padding: "20px",
                                    borderRadius: "12px",
                                    marginBottom: "20px",
                                    border: "1px solid #334155"
                                }}
                            >
                                <h3 style={{ color: "#00D9FF" }}>
                                    Question {index + 1}
                                </h3>

                                <p style={{ fontSize: "18px" }}>{q.question}</p>

                                <ul style={{ marginTop: 10, paddingLeft: "10px" }}>
                                    {q.options.map((opt, i) => {
                                        let bg = "#334155";
                                        let textColor = "white";

                                        // If results are shown
                                        if (reveal) {
                                            if (opt === correctAnswer) {
                                                bg = "#16a34a"; // green
                                            } else if (opt === userAnswer) {
                                                bg = "#dc2626"; // red
                                            }
                                        }

                                        return (
                                            <li
                                                key={i}
                                                onClick={() => !reveal && handleAnswer(index, opt)}
                                                style={{
                                                    marginBottom: "8px",
                                                    fontSize: "16px",
                                                    padding: "10px",
                                                    borderRadius: "8px",
                                                    cursor: reveal ? "not-allowed" : "pointer",
                                                    background: bg,
                                                    color: textColor,
                                                    transition: "0.2s"
                                                }}
                                            >
                                                {opt}

                                                {reveal && opt === userAnswer && opt !== correctAnswer && (
                                                    <span style={{ marginLeft: 10 }}>❌</span>
                                                )}
                                                {reveal && opt === correctAnswer && (
                                                    <span style={{ marginLeft: 10 }}>✔️</span>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>

                                {reveal && (
                                    <p style={{ marginTop: 10, color: "#00D9FF" }}>
                                        ✅ Correct Answer: <strong>{correctAnswer}</strong>
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default QuizPage;
