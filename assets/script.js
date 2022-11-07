var startTime = 75;
var count = document.getElementById("timer")
var start = document.getElementById("start")
var score = 0
var quiz = document.getElementById("quiz")
var A = document.getElementById("A")
var B = document.getElementById("B")
var C = document.getElementById("C")
var D = document.getElementById("D")
var questions =[ 
    {
    question: "Who is yoda",
    a: "green",
    b: "yellow",
    c: "orange",
    d: "blue",
    answer: c,
},
{
    question: "who is maul?",
}
]

function quizz(){
    for (i=0; i<questions.length; i++){
        quiz.innerHTML = questions[0].question
    }
}
quiz.innerHTML = questions
quiz.innerHTML = questions[0].b

count.innerHTML = startTime
setInterval(counting, 1000);
function counting() {

count.innerHTML = startTime--;
if (startTime <= 0){
    count.innerHTML = 0
}
}

button.addEventListener("click", quizz);

