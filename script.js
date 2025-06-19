const sampleQuestions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answerIndex: 1,
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answerIndex: 2,
  },
  {
    question: "Who wrote Romeo and Juliet?",
    options: [
      "Mark Twain",
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
    ],
    answerIndex: 2,
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answerIndex: 1,
  },
  {
    question: "What is H2O commonly known as?",
    options: [
      "Water",
      "Hydrogen Peroxide",
      "Hydrochloric Acid",
      "Sodium Hydroxide",
    ],
    answerIndex: 0,
  },
  {
    question: "In what year did Nigeria gain independence?",
    options: ["1960", "1975", "1980", "1990"],
    answerIndex: 0,
  },
  {
    question: "Which language is most spoken worldwide?",
    options: ["English", "Mandarin", "Spanish", "Hindi"],
    answerIndex: 1,
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2,
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answerIndex: 2,
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answerIndex: 3,
  },
];
const result = JSON.parse(localStorage.getItem("quizResult"));
if (result) {
  const scoreBox = document.getElementById("hide");
  const scoreText = document.getElementById("score");
  const timerMsg = document.getElementById("timer-msg");

  scoreBox.style.display = "block";
  scoreText.innerText = `You scored ${result.score} out of ${result.total}`;

  let timeLeft = 60;
  timerMsg.innerText = `Score disappears in ${timeLeft} seconds...`;

  const countdown = setInterval(() => {
    timeLeft--;
    timerMsg.innerText = `Score disappears in ${timeLeft} seconds...`;
    timerMsg.style.color = timeLeft <= 30 ? "red" : "black";

    if (timeLeft === 0) {
      clearInterval(countdown);
      scoreBox.style.display = "none";
      timerMsg.innerText = "";
      localStorage.removeItem("quizResult");
    }
  }, 1000);
}
