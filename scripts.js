const flashcardsData = [
    {
        "id": 1,
        "rootWord": "sol, solis",
        "answers": ["sun"],
        "origin": "Latin"
    },
    {
        "id": 2,
        "rootWord": "stella",
        "answers": ["star"],
        "origin": "Latin"
    },
    {
        "id": 3,
        "rootWord": "terra",
        "answers": ["land", "soil", "earth"],
        "origin": "Latin"
    },
    {
        "id": 4,
        "rootWord": "dendron",
        "answers": ["tree"],
        "origin": "Greek"
    },
    {
        "id": 5,
        "rootWord": "ornis, ornithos",
        "answers": ["bird"],
        "origin": "Greek"
    },
    {
        "id": 6,
        "rootWord": "avis",
        "answers": ["bird"],
        "origin": "Latin"
    },
    {
        "id": 7,
        "rootWord": "canis",
        "answers": ["dog"],
        "origin": "Latin"
    },
    {
        "id": 8,
        "rootWord": "hippo",
        "answers": ["horse"],
        "origin": "Greek"
    },
    {
        "id": 9,
        "rootWord": "caballus",
        "answers": ["horse"],
        "origin": "Latin"
    },
    {
        "id": 10,
        "rootWord": "equus",
        "answers": ["horse"],
        "origin": "Greek"
    }
];

let currentIndex = 0;

// Function to get a random flashcard
function getRandomFlashcard() {
    const randomIndex = Math.floor(Math.random() * flashcardsData.length);
    return flashcardsData[randomIndex];
}

// Display a single flashcard
function displayFlashcard(flashcard) {
    const questionText = document.getElementById('question-text');
    const showAnswersButton = document.getElementById('show-answers-button');

    const question = `<i>${flashcard.rootWord}</i> from the ${flashcard.origin} root means?`;
    questionText.innerHTML = question;
    showAnswersButton.setAttribute('onclick', `showAnswers(${flashcard.id})`);
}

// Show answers
function showAnswers(id) {
    const flashcard = flashcardsData.find(f => f.id === id);
    alert(flashcard.answers.join(', '));
}

// Check user answer
function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.toLowerCase();
    const flashcard = flashcardsData[currentIndex];
    const correctAnswers = flashcard.answers.map(answer => answer.toLowerCase());

    if (correctAnswers.includes(userAnswer)) {
        alert('Correct! The answers are: ' + flashcard.answers.join(', '));
    } else {
        alert('The answers are: ' + flashcard.answers.join(', '));
    }

    // Clear input field
    document.getElementById('user-answer').value = '';

    // Move to next random flashcard
    currentIndex = Math.floor(Math.random() * flashcardsData.length);
    displayFlashcard(flashcardsData[currentIndex]);
}

// Initial display of a random flashcard
currentIndex = Math.floor(Math.random() * flashcardsData.length);
displayFlashcard(flashcardsData[currentIndex]);