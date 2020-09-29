// Set initial variables

var highScores = document.querySelector("#highScores");
var timeEl = document.querySelector("#timerDisplay");
var startQuiz = document.querySelector("#startQuiz");
var mainContent = document.querySelector("#mainContent");

// Set start screen variables
var startH1 = document.createElement("h1");
var startContent = document.createElement("p");
var startQuiz = document.createElement("button");

// Set question 1 variables
var q1H1 = document.createElement("h1");
var q1Opt1 = document.createElement("button");
var q1Opt2 = document.createElement("button");
var q1Opt3 = document.createElement("button");
var q1Opt4 = document.createElement("button");

// Set question 2 variables
// Set question 3 variables
// Set question 4 variables
// Set question 5 variables

// Set the content of start screen
startH1.textContent = "Coding Quiz Challenge"
startContent.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will peanlize your score/time by ten seconds!"
startQuiz.textContent = "Start Quiz"

// Set the content of the Q1 screen
q1H1.textContent = "First question here- placeholder text."
q1Opt1.textContent = "Multiple Choice 1"
q1Opt2.textContent = "Multiple Choice 2"
q1Opt3.textContent = "Multiple Choice 3"
q1Opt4.textContent = "Multiple Choice 4"

// Set the content of the Q2 screen

// Set the content of the Q3 screen
// Set the content of the Q4 screen
// Set the content of the Q5 screen

// Append start screen elements
mainContent.appendChild(startH1);
mainContent.appendChild(startContent);
mainContent.appendChild(startQuiz);

// Set the timer to run on START

var secondsLeft = 75;

startQuiz.onclick = function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

    mainContent.removeChild(startH1);
    mainContent.removeChild(startContent);
    mainContent.removeChild(startQuiz);

    mainContent.appendChild(q1H1);
    mainContent.appendChild(q1Opt1);
    mainContent.appendChild(q1Opt2);
    mainContent.appendChild(q1Opt3);
    mainContent.appendChild(q1Opt4);
}

q1Opt1.onclick = function Q1toQ2() {
    mainContent.removeChild(q1H1);
    mainContent.removeChild(q1Opt1);
    mainContent.removeChild(q1Opt2);
    mainContent.removeChild(q1Opt3);
    mainContent.removeChild(q1Opt4);

    mainContent.appendChild(q2H1);
    mainContent.appendChild(q2Opt1);
    mainContent.appendChild(q2Opt2);
    mainContent.appendChild(q2Opt3);
    mainContent.appendChild(q2Opt4);
    
}


