const questions =[
   { 
    question: "Which is the largest animal in the world",
    answers:[
        {text:"Shark", correct: false},
        {text: "BlueWhale", correct: true},
        {text: "Elephant", correct: false},
        {text: "Giraffe", correct: false},
    ]
   },
   {
    question: "Which is the smallest country in the world",
    answers:[
        {text:"Vatican City", correct: true},
        {text: "Bhutan", correct: false},
        {text: "Napla", correct: false},
        {text: "Shri Lanka", correct: false},
    ]
   },
   {
    question: "Which is the largest desert in the world",
    answers:[
        {text:"Kalahari", correct: false},
        {text: "Gobi", correct: false},
        {text: "Sahara", correct: false},
        {text: "Antatctica", correct: true},
    ]
   },
   {
    question: "Which is the smallest continent in the world",
    answers:[
        {text:"Asia", correct: false},
        {text: "Austraila", correct: true},
        {text: "Arctica", correct: false},
        {text: "Africa", correct: false},
    ]
   }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHtml = "Next";
    showQuestion();
}
function showQuestion(){
    resetState(); //reset the previous question
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild)
        }
    }

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");

        }else{
            selectedBtn.classList.add("incorrect");
        }
    }

startQuiz();