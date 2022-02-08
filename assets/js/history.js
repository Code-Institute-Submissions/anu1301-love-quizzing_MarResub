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
        question: 'Which member of the British royal family was murdered by IRA in 1979?',
        choice1: 'Princess Margaret',
        choice2: 'Lord Mountbatten',
        choice3: 'Prince Philip',
        choice4: 'The Queen Mother',
        answer: 2,
    },
    {
        question: "Golda Mer was the Prime Minister of which country from 1970-1974?",
        choice1: "Jordan",
        choice2: "Syria",
        choice3: "Lebanon",
        choice4: "Isreal",
        answer: 4,
    },
    {
        question: "What was the meaning of Mahatma Gandhi’s message ‘Satyagraha’?",
        choice1: "Freedom",
        choice2: "Inclusion",
        choice3: "Non-violence",
        choice4: "Harmony",
        answer: 3,
    },
    {
        question: "Whose presidency was known as the businessman’s administration?",
        choice1: "Eisenhower",
        choice2: "Truman",
        choice3: "Kenedy",
        choice4: "Hoover",
        answer: 1,
    },
    {
        question: "In the 1970s, because of the Watergate scandal, who became the first Us attorney general to serve prison time?",
        choice1: "Ramsay Clark",
        choice2: "John Mitchell",
        choice3: "Richard Kleindienst",
        choice4: "Richard Nixon",
        answer: 2,
    },
    {
        question: "In which year was Margaret Thatcher first elected Prime Minister in Britain?",
        choice1: "1980",
        choice2: "1979",
        choice3: "1978",
        choice4: "1977",
        answer: 2,
    },
    {
        question: "Who, in 1978, was disclosed as ‘the fourth man’ following the defection of Burgess and MacLean in 1951??",
        choice1: "Kim Philby",
        choice2: "John Cairncross",
        choice3: "Victor Rothschild",
        choice4: "Sir Anthony Blunt",
        answer: 4,
    },
    {
        question: "What nationality was Sir Edmund Hillary, with Sherpa Tenzing, was the first to reach the summit of Everest in 1953?",
        choice1: "British",
        choice2: "American",
        choice3: "New Zealander",
        choice4: "Australian",
        answer: 3,
    },
    {
        question: "In which country, in 1989 was opposition leader Aung San Suu Kyi placed under house arrest for her outspoken attacks on the country military rulers?",
        choice1: "Burma (Myanmar)",
        choice2: "Vietnam",
        choice3: "Cambodia",
        choice4: "Laos",
        answer: 1,
    },
    {
        question: "Who was president when the USA entered the first World War?",
        choice1: "William Taft",
        choice2: "Calvin Coolidge",
        choice3: "Woodrow Wilson",
        choice4: "Warren Harding",
        answer: 3,
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

        if(classToApply === 'correct') {
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
    score +=num;
    scoreText.innerText = score;
};


startGame();