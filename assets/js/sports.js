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
        question: 'Who ran the first four-minute mile?',
        choice1: 'Jesse Owens',
        choice2: 'Abebe Bikila',
        choice3: 'Roger Bannister',
        choice4: 'Lee Evans',
        answer: 3,
    },
    {
        question: "In tennis, what follows a deuce?",
        choice1: "30",
        choice2: "Game",
        choice3: "Love",
        choice4: "Advantage",
        answer: 4,
    },
    {
        question: "In which country was golf invented?",
        choice1: "Scotland",
        choice2: "England",
        choice3: "America",
        choice4: "Australia",
        answer: 1,
    },
    {
        question: "What is the object that hockey players send across the ice called?",
        choice1: "Stone",
        choice2: "Puck",
        choice3: "Ball",
        choice4: "Pip",
        answer: 2,
    },
    {
        question: "What sport was the first to be made an event in the Winter Olympic Games?",
        choice1: "Cross country skiing",
        choice2: "Curling",
        choice3: "Figure skating",
        choice4: "Ice hockey",
        answer: 3,
    },
    {
        question: "When was the first football World Cup played?",
        choice1: "1930",
        choice2: "1934",
        choice3: "1938",
        choice4: "1926",
        answer: 1,
    },
    {
        question: "How many rings are there on the Olympic flag?",
        choice1: "4",
        choice2: "5",
        choice3: "6",
        choice4: "7",
        answer: 2,
    },
    {
        question: "How many players are on a side in international cricket matches?",
        choice1: "12",
        choice2: "10",
        choice3: "11",
        choice4: "13",
        answer: 3,
    },
    {
        question: "In the United States, what sport is known as “the national pastime?",
        choice1: "Hockey",
        choice2: "American football",
        choice3: "Basketball",
        choice4: "Baseball",
        answer: 4,
    },
    {
        question: "How often are the Olympic Games held?",
        choice1: "5 years",
        choice2: "3 years",
        choice3: "6 years",
        choice4: "4 years",
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
        localStorage.setItem('mostRecentScore', score);
        //takes you to end page
        return window.location.assign('love-quizzing/end.html');
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