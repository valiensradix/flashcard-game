const flashcardsData = [
    { id: 1, rootWord: "sol, solis", answers: ["sun"], origin: "Latin" },
    { id: 2, rootWord: "stella", answers: ["star"], origin: "Latin" },
    { id: 3, rootWord: "terra", answers: ["land", "soil", "earth"], origin: "Latin" },
    { id: 4, rootWord: "dendron", answers: ["tree"], origin: "Greek" },
    { id: 5, rootWord: "ornis, ornithos", answers: ["bird"], origin: "Greek" },
    { id: 6, rootWord: "avis", answers: ["bird"], origin: "Latin" },
    { id: 7, rootWord: "canis", answers: ["dog"], origin: "Latin" },
    { id: 8, rootWord: "hippo", answers: ["horse"], origin: "Greek" },
    { id: 9, rootWord: "caballus", answers: ["horse"], origin: "Latin" },
    { id: 10, rootWord: "equus", answers: ["horse"], origin: "Greek" }
];

let seenFlashcards = new Set();
let currentIndex = 0;

function getRandomFlashcard() {
    if (seenFlashcards.size === flashcardsData.length) {
        seenFlashcards.clear(); // Reset the set when all flashcards have been seen
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * flashcardsData.length);
    } while (seenFlashcards.has(randomIndex));
    
    seenFlashcards.add(randomIndex);
    return flashcardsData[randomIndex];
}

function displayFlashcard(flashcard) {
    const h2Element = document.getElementById('question-text');
    if (!h2Element) {
        console.error('Element with id "question-text" not found.');
        return;
    }

    const rootWords = flashcard.rootWord.split(',').map(word => `<i>${word.trim()}</i>`).join(' or ');
    const question = `What does ${rootWords} from the ${flashcard.origin} mean?`;

    h2Element.innerHTML = question; // Use innerHTML to render HTML tags

    const showAnswersButton = document.getElementById('show-answers-button');
    if (showAnswersButton) {
        showAnswersButton.setAttribute('onclick', `showAnswers(${flashcard.id})`);
    } else {
        console.error('Element with id "show-answers-button" not found.');
    }
}

function showAnswers(id) {
    const flashcard = flashcardsData.find(card => card.id === id);
    if (flashcard) {
        alert(flashcard.answers.join(', '));
    } else {
        console.error('Flashcard with id ' + id + ' not found.');
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.toLowerCase();
    const correctAnswers = flashcardsData[currentIndex].answers.map(answer => answer.toLowerCase());

    if (correctAnswers.includes(userAnswer)) {
        alert('Correct!   ' + flashcardsData[currentIndex].answers.join(', '));
    } else {
        alert('The answers are: ' + flashcardsData[currentIndex].answers.join(', '));
    }

    // Clear input field
    document.getElementById('user-answer').value = '';

    // Move to next random flashcard
    const nextFlashcard = getRandomFlashcard();
    currentIndex = flashcardsData.indexOf(nextFlashcard);
    displayFlashcard(nextFlashcard);
}

// Initialize with the first flashcard
document.addEventListener('DOMContentLoaded', (event) => {
    const initialFlashcard = getRandomFlashcard();
    currentIndex = flashcardsData.indexOf(initialFlashcard);
    displayFlashcard(initialFlashcard);
});