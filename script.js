var highScores = document.querySelector("#highScores");

var timeEl = document.querySelector("#timerDisplay");

var startQuiz = document.querySelector("#startQuiz");

var mainContent = document.querySelector("#mainContent");

    var startH1 = document.createElement("h1");
    var startContent = document.createElement("p");
    var startQuiz = document.createElement("button");



startH1.textContent = "Coding Quiz Challenge"
startContent.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will peanlize your score/time by ten seconds!"
startQuiz.textContent = "Start Quiz"

mainContent.appendChild(startH1);
mainContent.appendChild(startContent);
mainContent.appendChild(startQuiz);






var secondsLeft = 75;

startQuiz.onclick = function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}


