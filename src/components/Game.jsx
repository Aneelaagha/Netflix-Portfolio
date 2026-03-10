import { useState } from "react";

function Game({ onClose }) {
  const questions = [
    {
      code: `for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}`,
      question: "What is the bug in this code?",
      options: [
        "i should start at 1",
        "The loop should use < instead of <=",
        "console.log is wrong",
        "arr[i] should be arr.length",
      ],
      answer: "The loop should use < instead of <=",
    },
    {
      code: `function addNumbers(a, b) {
  a + b;
}`,
      question: "What is the bug in this function?",
      options: [
        "The parameters are wrong",
        "The function should use const",
        "It is missing a return statement",
        "The function name is invalid",
      ],
      answer: "It is missing a return statement",
    },
    {
      code: `const name = "Aneela";

if (name = "Aneela") {
  console.log("Hello");
}`,
      question: "What is the bug in this condition?",
      options: [
        "The string is wrong",
        "It should use === instead of =",
        "console.log should be outside the if block",
        "const should be let",
      ],
      answer: "It should use === instead of =",
    },
    {
      code: `const numbers = [10, 20, 30];
console.log(numbers[3]);`,
      question: "What is the bug here?",
      options: [
        "Array indexes start at 1",
        "numbers should be a string",
        "Index 3 is out of bounds",
        "console.log cannot print arrays",
      ],
      answer: "Index 3 is out of bounds",
    },
    {
      code: `let total = 5;

function updateTotal() {
  let total = total + 10;
  console.log(total);
}`,
      question: "What is the bug in this function?",
      options: [
        "The function name is invalid",
        "The inner total variable is referencing itself before initialization",
        "console.log should come first",
        "The number 10 should be a string",
      ],
      answer: "The inner total variable is referencing itself before initialization",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answered, setAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const question = questions[currentQuestion];

  function checkAnswer(option) {
    if (answered) return;

    setSelectedAnswer(option);
    setAnswered(true);

    if (option === question.answer) {
      setResult("Correct!");
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult("Not quite.");
    }
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setResult("");
      setSelectedAnswer("");
      setAnswered(false);
    } else {
      setGameOver(true);
    }
  }

  function restartGame() {
    setCurrentQuestion(0);
    setScore(0);
    setResult("");
    setSelectedAnswer("");
    setAnswered(false);
    setGameOver(false);
  }

  function getButtonClass(option) {
    if (!answered) return "game-option";

    if (option === question.answer) return "game-option correct";

    if (option === selectedAnswer && option !== question.answer) {
      return "game-option wrong";
    }

    return "game-option disabled";
  }

  return (
    <div className="game-overlay" onClick={onClose}>
      <div className="game-modal" onClick={(e) => e.stopPropagation()}>
        <section className="game" id="game">
          <div className="game-card">
            <button
              className="game-close-btn"
              onClick={onClose}
              type="button"
            >
              ✕ Close
            </button>

            <div className="game-top">
              <h2 className="game-title">Bug Finder</h2>
              {!gameOver && (
                <p className="game-score">
                  Score: {score} / {questions.length}
                </p>
              )}
            </div>

            {gameOver ? (
              <div className="game-feedback">
                <p className="game-finish">Game Complete</p>
                <p className="game-score">
                  You scored {score} out of {questions.length}
                </p>

                <button
                  className="game-next-btn"
                  onClick={restartGame}
                  type="button"
                >
                  Play Again
                </button>
              </div>
            ) : (
              <>
                <p className="game-progress">
                  Question {currentQuestion + 1} of {questions.length}
                </p>

                <pre className="game-code">
                  <code>{question.code}</code>
                </pre>

                <p className="game-question">{question.question}</p>

                <div className="game-options">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      className={getButtonClass(option)}
                      onClick={() => checkAnswer(option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {answered && (
                  <div className="game-feedback">
                    <p
                      className={
                        result === "Correct!"
                          ? "feedback-correct"
                          : "feedback-wrong"
                      }
                    >
                      {result}
                    </p>

                    {result !== "Correct!" && (
                      <p className="game-answer">
                        Correct answer: <strong>{question.answer}</strong>
                      </p>
                    )}

                    <button
                      className="game-next-btn"
                      onClick={nextQuestion}
                      type="button"
                    >
                      {currentQuestion === questions.length - 1
                        ? "Finish Game"
                        : "Next Question"}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Game;