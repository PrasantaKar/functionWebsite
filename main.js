// Define variables in the global scope
let score = 0;

// Button Event Listener
let submitButton = document
  .getElementById("click")
  .addEventListener("click", btnClicked);

// Function to mark the quiz
function btnClicked() {
  // Reset the score for a new quiz attempt
  score = 0;

  // Use the markQuestion function to mark each question
  score += markQuestion("answer1", "answerOut1", "singles");
  score += markQuestion("answer2", "answerOut2", "birdy");
  score += markQuestion("answer3", "answerOut3", "practice");
  score += markQuestion("answer4", "answerOut4", "3");

  function displayResults() {
    // Encouragement
    let percentage = Math.round((score / 4) * 100);
    let scoreText = `<br>You got ${score}/4 (${percentage}%)`;

    let feedback = "";

    if (percentage >= 75) {
      feedback += "<p>Great job!</p>";
    } else if (percentage >= 50) {
      feedback += "<p>You can do better next time</p>";
    } else {
      feedback += "<p>Keep practicing!</p>";
    }

    // Output of Score
    document.getElementById("resultDiv").innerHTML = scoreText + feedback;
  }
  // Display the results
  displayResults();
}

// Function to mark a quiz question and provide feedback
function markQuestion(inputID, outputID, correctAnswer) {
  // Get user's answer for the question
  let userAnswer = document.getElementById(inputID).value.toLowerCase();
  // Update the necessary HTML element to indicate correctness
  let feedbackElement = document.getElementById(outputID);

  // Check if the answer is correct
  if (userAnswer === correctAnswer) {
    score++;
    feedbackElement.innerHTML = "Correct!";
  } else {
    feedbackElement.innerHTML = "Incorrect!";
  }

  // Return the number of marks earned for the question
  if (userAnswer === correctAnswer) {
    return 1; // User answered correctly
  } else {
    return 0; // User answered incorrectly
  }
}
