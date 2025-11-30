function checkAnswer() {
  const checkAnswer = 4;
  const userAnswer = document.querySelector('[name="quiz"]').value;
  const feedback = document.getElementById("feedback");
  if (Number(userAnswer) === checkAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}
document.getElementById("submit-answer").addEventListener("click", function () {
  checkAnswer;
});
