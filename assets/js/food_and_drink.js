const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//Question and answer section
let questions = [{
        question: 'What type of pastry are profiteroles made from?',
        choice1: 'Puff pastry',
        choice2: 'Short crust pastry',
        choice3: 'Choux pastry',
        choice4: 'Filo pastry',
        answer: 3,
    },
    {
        question: "What is the main flavour of aioli?",
        choice1: "Anchovy",
        choice2: "Ginger",
        choice3: "Lemon",
        choice4: "Garlic",
        answer: 4,
    },
    {
        question: "Which vegetable can be Oyster, Chestnut or Shitaki?",
        choice1: "Mushroom",
        choice2: "Peppers",
        choice3: "Tomatoes",
        choice4: "Aubergine",
        answer: 1,
    },
    {
        question: "What is Wiener Schnitzel?",
        choice1: "Pork",
        choice2: "Beef",
        choice3: "Venison",
        choice4: "Veal",
        answer: 4,
    },
    {
        question: "How is steak tartare cooked?",
        choice1: "Barbecued",
        choice2: "Served Raw",
        choice3: "Baked",
        choice4: "Fried",
        answer: 2,
    },
    {
        question: "Which drink is Worcester sauce traditionally added to?",
        choice1: "Dirty Martini",
        choice2: "Black Russian",
        choice3: "Bloody Mary",
        choice4: "Caipiroska",
        answer: 3,
    },
    {
        question: "Which fish is the main ingredient of Scotch Woodcock?",
        choice1: "Anchovy",
        choice2: "Sardines",
        choice3: "Whitebait",
        choice4: "Tuna",
        answer: 1,
    },
    {
        question: "What is beef fillet cooked in puff pastry called?",
        choice1: "Beef in puff pastry",
        choice2: "Beef Wellington",
        choice3: "Puff pastry parcel",
        choice4: "Beef fillet en croute",
        answer: 2,
    },
    {
        question: "Where is Red Windsor cheese from?",
        choice1: "Windsor",
        choice2: "Chedder",
        choice3: "Leicestershire",
        choice4: "Lancashire",
        answer: 3,
    },
    {
        question: "What is a Worcester Pearmain?",
        choice1: "Pear",
        choice2: "Plum",
        choice3: "Cherry",
        choice4: "Apple",
        answer: 4,
    },
];

//Number of points scored for each correct answer
const SCORE_POINTS = 10;
// Max number of question asked
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // displays final score in end page
        localStorage.setItem("mostRecentScore", score);
        //takes you to end page
        return window.location.assign('./end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    // updates progress bar
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    // randomises the question order
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};
// returns with colour change according to correct or incorrect answer
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);

    });
});
// increments score for correct answers
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};


startGame();