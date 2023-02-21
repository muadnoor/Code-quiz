// welcome section
const welcome = document.querySelector(".welcome")
const startBtn = document.querySelector(".startBtn")

// quiz section
const quiz = document.querySelector(".quiz")
const timer = document.querySelector(".timer")
const questionDiv = document.querySelector(".questionDiv")
const choicesDiv = document.querySelector(".choicesDiv")

// save section
const save = document.querySelector(".save")
save.style.display = "none"

const index = 0;
const score = 0;
const startTime = 60;
startBtn.addEventListener("click", start(index))

const api = [
    {
        question: "Where does a script tag go, in an html file?",
        choices: ["in the body", "in the head", "in a link tag", "in a tyle tag"],
        correct: "in the body"
    },
    {
        question: "Where does a car park?",
        choices: ["in the playground", "in a parking lot", "in a zoo", "on the sky"],
        correct: "in a parking lot"
    },
    {
        question: "What color is the sky?",
        choices: ["blue", "green", "orange", "purple"],
        correct: "blue"
    },{
        question: "What is the shape of a pizza slice?",
        choices: ["circle", "square", "rectangle", "triangle"],
        correct: "triangle"
    },{
        question: "What color is the grass?",
        choices: ["green", "purple", "pink"],
        correct: "green"
    },
]

function start(index) {
    
}