var startTime = 75;
var count = document.getElementById("timer")
var start = document.getElementById("start")
var score = 0
var Q = 0
var A = document.getElementById("A")
var B = document.getElementById("B")
var C = document.getElementById("C")
var D = document.getElementById("D")
var quiz = document.getElementById("quiz")
var questionEl = document.getElementById("question")
var answers = document.getElementById("answers")
var start = document.getElementById("start")
var next = document.getElementById("next")
var retry = document.getElementById("retry")
var questions =[ 
    {
    question: "What color is yoda",
    options: [ 
        {a: "green"},
        {b: "yellow"},
        {c: "brown"},
        {d: "red"},
    ],
    answer: "green"
    //correct: document.getElementById("A")
},
{
    question: "who is Darth Maul?",
    options: [
        {a: "Bounty Hunter"},
        {b: "Jedi"},
        {c: "Smuggler"},
        {d: "Sith"}
    ],
    answer: "Sith"
},
{
    question: "what role does Mace Windu fill at the Jedi Temple?",
    options: [
        {a: "Battle Master"},
        {b: "Consilor"},
        {c: "Head Teacher"},
        {d: "Light Saber builder"}
    ],
    answer: "Battle Master"
},
{
    question: "What is Count Doku's Sith name?",
    options: [
        {a: "Darth Plagius"},
        {b: "Darth Tyranis"},
        {c: "Darth Vader"},
        {d: "Darth Tenabris"}
    ],
    answer: "Darth Tyranis"
},
{
    question: "What species is Chewy",
    options: [
        {a: "Twilek"},
        {b: "Jawa"},
        {c: "Wookie"},
        {d: "Ewok"}
    ],
    answer: "Wookie"
},
{
    question: "fin"
}

]

function showQuestion(Q) {
    if(questions[Q].question == "fin"){ 
        Q=0;
        retry.classList.remove("display"); 
        document.getElementById("score").innerHTML = "your score is " + score + "/5"}
        else{
        questionEl.innerHTML = questions[Q].question
        var buttonA = document.createElement("p")
        buttonA.innerHTML = questions[Q].options[0].a
        buttonA.classList.add("button")
        A.appendChild(buttonA)
        var buttonB = document.createElement("p")
        buttonB.innerHTML = questions[Q].options[1].b
        buttonB.classList.add("button")
        B.appendChild(buttonB)
        var buttonC = document.createElement("p")
        buttonC.innerHTML = questions[Q].options[2].c
        buttonC.classList.add("button")
        C.appendChild(buttonC)
        var buttonD = document.createElement("p")
        buttonD.innerHTML = questions[Q].options[3].d
        buttonD.classList.add("button")
        D.appendChild(buttonD)
    }}
    
var clearQuestion = async () => {
    next.classList.add("display")
    questionEl.innerHTML = ""
        console.log(answers.firstChild)
        A.removeChild(A.firstChild)
        B.removeChild(B.firstChild)
        C.removeChild(C.firstChild)
        D.removeChild(D.firstChild)

}

function select(e){
    console.log(e.target.innerHTML)
    console.log(questions[Q].answer)
    if(e.target.innerHTML == questions[Q].answer){
        score++
        console.log(score)
    }
console.log("yay")
next.classList.remove("display")
}

function redo() {
    location.reload()
}

function counting() {

// count.innerHTML = startTime--;
start.classList.add("display")
quiz.classList.remove("display")
//next.classList.remove("display")
// if (startTime <= 0){
//     count.innerHTML = 0
//     setInterval(counting, 1000);
// }

}

start.addEventListener("click", counting);
start.addEventListener("click", () => {
showQuestion(Q)
});
next.addEventListener("click", async () => {
    await clearQuestion()
    Q++
    showQuestion(Q)})
retry.addEventListener("click", redo)
A.addEventListener("click", select)
B.addEventListener("click", select)
C.addEventListener("click", select)
D.addEventListener("click", select)

