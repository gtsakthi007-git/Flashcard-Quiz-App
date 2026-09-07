// FlashLearn - Flashcard Quiz App

const flashcards = [
    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language"
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets"
    },
    {
        question: "What does JS stand for?",
        answer: "JavaScript"
    },
    {
        question: "Which language is used to style web pages?",
        answer: "CSS"
    },
    {
        question: "Which language is used to add interactivity to a webpage?",
        answer: "JavaScript"
    },
    {
        question: "What is the capital of India?",
        answer: "New Delhi"
    },
    {
        question: "What does AI stand for?",
        answer: "Artificial Intelligence"
    },
    {
        question: "What does ML stand for?",
        answer: "Machine Learning"
    }
];

let currentCard = 0;
let score = 0;

// Get HTML elements
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const cardElement = document.getElementById("card");

const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
const flipButton = document.getElementById("flipBtn");

const scoreElement = document.getElementById("score");

// Display flashcard
function showCard() {
    if (!questionElement || !answerElement) return;

    questionElement.textContent = flashcards[currentCard].question;
    answerElement.textContent = flashcards[currentCard].answer;

    // Hide answer initially
    answerElement.style.display = "none";

    if (scoreElement) {
        scoreElement.textContent = `Score: ${score}`;
    }
}

// Flip card
function flipCard() {
    if (!answerElement) return;

    if (answerElement.style.display === "none") {
        answerElement.style.display = "block";
    } else {
        answerElement.style.display = "none";
    }
}

// Next card
function nextCard() {
    if (currentCard < flashcards.length - 1) {
        currentCard++;
        score++;
        showCard();
    } else {
        alert(`Quiz Completed! 🎉 Your Score: ${score}/${flashcards.length}`);
        currentCard = 0;
        score = 0;
        showCard();
    }
}

// Previous card
function previousCard() {
    if (currentCard > 0) {
        currentCard--;
        showCard();
    }
}

// Button events
if (flipButton) {
    flipButton.addEventListener("click", flipCard);
}

if (nextButton) {
    nextButton.addEventListener("click", nextCard);
}

if (prevButton) {
    prevButton.addEventListener("click", previousCard);
}

// Load first card
showCard();
