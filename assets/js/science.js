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
        question: 'The stirrup, the smallest bone in humans, is found in which part of the body?',
        choice1: 'The nose',
        choice2: 'The ear',
        choice3: 'The foot',
        choice4: 'The hand',
        answer: 2,
    },
    {
        question: "An ohm is a unit that measures what?",
        choice1: "Wind speed",
        choice2: "Magnetic field",
        choice3: "Thermal resistance",
        choice4: "Electrical resistance",
        answer: 4,
    },
    {
        question: "Which four planets of the Solar System have rings?",
        choice1: "Saturn, Mars, Neptune, Pluto",
        choice2: "Jupiter, Mars, Venus, Neptune",
        choice3: "Jupiter, Saturn, Uranus, Neptune",
        choice4: "Mars, Venus, Pluto, Earth",
        answer: 3,
    },
    {
        question: "The name of which type of rock derives from the Latin for ﬁre?",
        choice1: "Igneous",
        choice2: "Metamorphic",
        choice3: "Sedimentary",
        choice4: "Geyserite",
        answer: 1,
    },
    {
        question: "Someone with anosmia is lacking what?",
        choice1: "Sleep",
        choice2: "Sense of hearing",
        choice3: "Sense of smell",
        choice4: "Sense of taste",
        answer: 3,
    },
    {
        question: "Which acid is also known as aqua fortis?",
        choice1: "Hydrochloric Acid",
        choice2: "Sulfuric Acid",
        choice3: "Citric Acid",
        choice4: "Nitric Acid",
        answer: 4,
    },
    {
        question: "Mark Cahill became the ﬁrst Briton to undergo which pioneering medical operation in 2013?",
        choice1: "A foot transplant",
        choice2: "A hand transplant",
        choice3: "Hair transplant",
        choice4: "Ear transplant",
        answer: 2,
    },
    {
        question: "What was the name of the ﬁrst Space Shuttle?",
        choice1: "Columbia",
        choice2: "Endeavour",
        choice3: "Discovery",
        choice4: "Atlantis",
        answer: 1,
    },
    {
        question: "Where are more than a quarter of the bones in the human body found?",
        choice1: "The ears",
        choice2: "The rib cage",
        choice3: "The feet",
        choice4: "The hands",
        answer: 4,
    },
    {
        question: "What type of creature was the first to be launched into space?",
        choice1: "Rhesus monkey",
        choice2: "Fruit flies",
        choice3: "Dog",
        choice4: "Chimpanzee",
        answer: 2,
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
        localStorage.setItem('mostRecentScore', score);
        //takes you to end page
        return window.location.assign('/end.html');
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