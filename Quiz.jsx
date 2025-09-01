import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

const questions = [
  {
    question: "Qual é o valor de log₂(8)?",
    options: ["2", "3", "4", "8"],
    answer: "3",
    explanation: "Porque 2³ = 8, logo log₂(8) = 3.",
  },
  {
    question: "A soma dos ângulos internos de um hexágono é:",
    options: ["360°", "540°", "720°", "1080°"],
    answer: "720°",
    explanation: "Fórmula: (n-2)×180 → (6-2)×180 = 720°.",
  },
  {
    question: "O termo geral da PA (3,7,11,15,...) é:",
    options: ["an = 3+4n", "an = 3+4(n-1)", "an = 7+4n", "an = 4n"],
    answer: "an = 3+4(n-1)",
    explanation: "Fórmula da PA: an = a1 + (n-1)r → 3 + (n-1)×4.",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
      setTotalTime((t) => t + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    handleNext();
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setTimeLeft(15);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return <Result score={score} total={questions.length} time={totalTime} />;
  }

  return (
    <QuestionCard
      data={questions[current]}
      onAnswer={handleAnswer}
      current={current}
      total={questions.length}
      timeLeft={timeLeft}
    />
  );
}
