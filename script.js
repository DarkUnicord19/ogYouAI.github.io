// Define the questions and options
const questions = [
    {
      question: "Do you like art?",
      options: ["Yes", "No", "I don't know"]
    },
    {
      question: "Would you like to go to an art gallery?",
      options: ["Yes", "No", "Maybe"]
    },
    {
      question: "What is your favorite color?",
      options: ["Blue", "Red", "Yellow"]
    }
  ];
  
  // Initialize variables
  let currentQuestion = 0;
  let score = 0;
  
  // Function to load the next question
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const option1Element = document.getElementById("option-1");
    const option2Element = document.getElementById("option-2");
    const option3Element = document.getElementById("option-3");
  
    questionElement.textContent = questions[currentQuestion].question;
    option1Element.textContent = questions[currentQuestion].options[0];
    option2Element.textContent = questions[currentQuestion].options[1];
    option3Element.textContent = questions[currentQuestion].options[2];
  }
  
  // Function to handle user selection
  function selectOption(option) {
    const resultElement = document.getElementById("result");
  
    if (option === 0) {
      // User selected the correct option
      score++;
      resultElement.textContent = "You won Squidward's heart!";
    } else {
      resultElement.textContent = "Sorry, you didn't win Squidward's heart.";
    }
  
    // Display the result
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
  
    // Disable the buttons
    const option1Element = document.getElementById("option-1");
    const option2Element = document.getElementById("option-2");
    const option3Element = document.getElementById("option-3");
    option1Element.disabled = true;
    option2Element.disabled = true;
    option3Element.disabled = true;
  }
  
  // Load the first question
  loadQuestion();
  