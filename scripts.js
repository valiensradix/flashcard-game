const flashcards = [
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

let currentIndex = 0;

function displayFlashcard(index) {
    const questionText = document.getElementById('question-text');
    const showAnswersButton = document.getElementById('show-answers-button');

    if (index < flashcards.length) {
        const flashcard = flashcards[index];
        const rootWords = flashcard.rootWord.split(',').map(word => `<i>${word.trim()}</i>`).join(' or ');
        questionText.innerHTML = `${rootWords} from the ${flashcard.origin} root means?`;
        showAnswersButton.setAttribute('onclick', `showAnswers(${index})`);
    } else {
        questionText.textContent = 'Refresh to start again, more cards added regularly.';
        showAnswersButton.style.display = 'none';
    }
}

function showAnswers(index) {
    alert(flashcards[index].answers.join(', '));
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.toLowerCase();
    const correctAnswers = flashcards[currentIndex].answers.map(answer => answer.toLowerCase());

    if (correctAnswers.includes(userAnswer)) {
        alert('Correct!   ' + flashcards[currentIndex].answers.join(', '));
    } else {
        alert('The answers are: ' + flashcards[currentIndex].answers.join(', '));
    }

    document.getElementById('user-answer').value = '';
    currentIndex++;
    displayFlashcard(currentIndex);
}

displayFlashcard(currentIndex);