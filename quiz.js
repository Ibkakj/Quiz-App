let score = 0;
let currentIndex = 0;

const quizData = JSON.parse(localStorage.getItem("quizQuestions"));
const questionId = document.getElementById("questionId");
const questionBox = document.getElementById("questions");
const nextButton = document.getElementById("terminate");

function displayQuestion(index) {
  const question = quizData[index];

  questionId.textContent = `Question ${index + 1} Of ${quizData.length}`;
  questionBox.innerHTML = `
        <p>${question.question}</p>
         ${question.options
           .map(
             (option, i) => `
      <label>
        <input type="radio" name="option" value="${i}" />
        ${String.fromCharCode(65 + i)}. ${option}
      </label><br/>
    `
           )
           .join("")}
  `;

  if (index === quizData.length - 1) {
    nextButton.textContent = "End";
  } else {
    nextButton.textContent = "Next";
  }
}
displayQuestion(currentIndex);

nextButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (selectedOption) {
    const selectedValue = parseInt(selectedOption.value);
    if (selectedValue === quizData[currentIndex].answerIndex) {
      score++;
    }
    currentIndex++;

    if (currentIndex < quizData.length) {
      displayQuestion(currentIndex);
    } else {
      // Save result & go home
      localStorage.setItem(
        "quizResult",
        JSON.stringify({ score, total: quizData.length })
      );
      alert("Test completed!");
      window.location.href = "index.html";
    }
  } else {
    alert("Please select an option before moving on.");
  }
});
