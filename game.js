
window.addEventListener("DOMContentLoaded", () => {
    const question = document.getElementById('question');
    const choices = Array.from(document.getElementsByClassName('choice-text'));
    const scoreTab = document.getElementById('score');
    const answeredQuestions = document.querySelector(".answered_questions");
    const progressBarFull = document.getElementById("progressBarFull");
    const loader = document.getElementById('loader');
    const game = document.querySelector('#game');

    let questions = [
        {
            question: "In which time zone is SC?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is WA?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "6"
        },
        {
            question: "In which time zone is OR?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "6"
        },
        {
            question: "In which time zone is ID?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "5"
        },
        {
            question: "In which time zone is MT?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "5"
        },
        {
            question: "In which time zone is CA?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "6"
        },
        {
            question: "In which time zone is CO?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "5"
        },
        {
            question: "In which time zone is UT?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "5"
        },
        {
            question: "In which time zone is NV?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "6"
        },
        {
            question: "In which time zone is WY?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "5"
        },
        {
            question: "In which time zone is SD?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "5"
        },
        {
            question: "In which time zone is AZ?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "5"
        },
        {
            question: "In which time zone is NM?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "5"
        },
        {
            question: "In which time zone is ND?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is MN?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is WI?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is NE?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is IA?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is IL?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is KS?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is MO?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is TN?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is OK?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is AR?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is MS?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is AL?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is TX?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is LA?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "2"
        },
        {
            question: "In which time zone is ME?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is NY?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is VT?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is MA?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is NH?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is CT?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is RI?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is PA?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is NJ?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is MD?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is DE?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is OH?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is MI?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is IN?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is Washington DC?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is WV?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is VA?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is KY?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is NC?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is GA?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is FL?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "3"
        },
        {
            question: "In which time zone is AK?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "1"
        },
        {
            question: "In which time zone is HI?",
            choice1: "Alaskan",
            choice2: "Central",
            choice3: "Eastern",
            choice4: "Hawaiian",
            choice5: "Mountain",
            choice6: "Pacific",
            answer: "4"
        }
    ]    
    game.classList.add("hidden");
    setTimeout(() => {
        startGame()
    }, 2000)

    let currentQuestion = {},
        acceptingAnswers = false,
        score = 0,
        questionCounter = 0,
        availableQuestions = [];

    const CORRECT_SCORE = 1;
    const MAX_QUESTIONS = 51;

    const startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        game.classList.remove('hidden');
        loader.classList.add('hidden');
        getNewQuestion();
    };
   function getNewQuestion() {
        if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem("mostRecentScore", score);
            return window.location.assign('/end.html');
        }
        questionCounter++;
        answeredQuestions.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question
        
        choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });
    
        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
    };
    
    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) return;
    
            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];
            const correctAnswer = choices.filter(choice => choice.dataset['number'] == currentQuestion.answer)
            if(selectedAnswer == currentQuestion.answer){
                score += CORRECT_SCORE
                scoreTab.innerText = `Score: ${score}/50`
                selectedChoice.style = 'background-color: green; color: white'
                setTimeout(() => {
                    selectedChoice.style = 'background-color: white; color: black'
                }, 500)
            } else {
                selectedChoice.style = 'background-color: red; color: white'
                selectedChoice.classList.add("shaking_animation")
                correctAnswer[0].style = 'background-color:green; color: white'
                correctAnswer[0].classList.add("vertical-shake")
                setTimeout(() => {
                    selectedChoice.style = 'background-color: white; color: black'
                    correctAnswer[0].style = 'background-color:white; color: black'
                    correctAnswer[0].classList.remove("vertical-shake")
                    selectedChoice.classList.remove("shaking_animation")
                }, 500)
            }
            setTimeout(() => {
                getNewQuestion();
            }, 500)
        });
    });

    setTimeout(() => {
        startGame();
    },5000)
})