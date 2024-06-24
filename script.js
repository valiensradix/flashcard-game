// Embeded JSON data directly, make sep file to scale
const flashcards = [
    {
        "id": 1,
        "question": "sol",
        "answers": ["sun"]
    },
    {
        "id": 2,
        "question": "stella",
        "answers": ["star"]
    },
    {
        "id": 3,
        "question": "terra",
        "answers": ["land", "earth", "soil", "ground"]
    }
];

let currentIndex = 0;

// display single flashcard
function displayFlashcard(index) {
    const questionText = document.getElementById('question-text');
    const showAnswersButton = document.getElementById('show-answers-button');

    if (index < flashcards.length) {
        const flashcard = flashcards[index];
        console.log('Displaying question:', flashcard.question); // Debugging log
        questionText.textContent = `${flashcard.id}. ${flashcard.question}`;
        showAnswersButton.setAttribute('onclick', `showAnswers(${index})`);
    } else {
        questionText.textContent = 'Refresh to start again, more cards added regularly.';
        showAnswersButton.style.display = 'none';
    }
}

// show answers
function showAnswers(index) {
    alert(flashcards[index].answers.join(', '));
}

// check user answer
function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.toLowerCase();
    const correctAnswers = flashcards[currentIndex].answers.map(answer => answer.toLowerCase());

    if (flashcards[currentIndex].answers.includes(userAnswer)) {
        alert('Correct!   ' + flashcards[currentIndex].answers.join(', '));
    } else {
        alert('The answers are: ' + flashcards[currentIndex].answers.join(', '));
    }

    // Clear input field
    document.getElementById('user-answer').value = '';

    // Move to next flashcard
    currentIndex++;
    displayFlashcard(currentIndex);
}

// Initial display of first flashcard
displayFlashcard(currentIndex);
