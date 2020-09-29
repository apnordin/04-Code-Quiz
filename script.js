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
var q2H1 = document.createElement("h1");
var q2Opt1 = document.createElement("button");
var q2Opt2 = document.createElement("button");
var q2Opt3 = document.createElement("button");
var q2Opt4 = document.createElement("button");

// Set question 3 variables
var q3H1 = document.createElement("h1");
var q3Opt1 = document.createElement("button");
var q3Opt2 = document.createElement("button");
var q3Opt3 = document.createElement("button");
var q3Opt4 = document.createElement("button");

// Set question 4 variables
var q4H1 = document.createElement("h1");
var q4Opt1 = document.createElement("button");
var q4Opt2 = document.createElement("button");
var q4Opt3 = document.createElement("button");
var q4Opt4 = document.createElement("button");

// Set question 5 variables
var q5H1 = document.createElement("h1");
var q5Opt1 = document.createElement("button");
var q5Opt2 = document.createElement("button");
var q5Opt3 = document.createElement("button");
var q5Opt4 = document.createElement("button");

// Set finish screen variables
var finishH1 = document.createElement("h1");
var finishContent = document.createElement("p");

// Set the content of start screen
startH1.textContent = "Coding Quiz Challenge"
startContent.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will peanlize your score/time by ten seconds!"
startQuiz.textContent = "Start Quiz"

// Set the content of the Q1 screen
q1H1.textContent = "First question here- placeholder text."
q1Opt1.textContent = "Correct answer"
q1Opt2.textContent = "Multiple Choice 2"
q1Opt3.textContent = "Multiple Choice 3"
q1Opt4.textContent = "Multiple Choice 4"

// Set the content of the Q2 screen
q2H1.textContent = "Second question here- placeholder text."
q2Opt1.textContent = "Multiple Choice 1"
q2Opt2.textContent = "Multiple Choice 2"
q2Opt3.textContent = "Correct answer"
q2Opt4.textContent = "Multiple Choice 4"

// Set the content of the Q3 screen
q3H1.textContent = "Third question here- placeholder text."
q3Opt1.textContent = "Multiple Choice 1"
q3Opt2.textContent = "Multiple Choice 2"
q3Opt3.textContent = "Multiple Choice 3"
q3Opt4.textContent = "Correct answer"

// Set the content of the Q4 screen
q4H1.textContent = "Fourth question here- placeholder text."
q4Opt1.textContent = "Multiple Choice 1"
q4Opt2.textContent = "Multiple Choice 2"
q4Opt3.textContent = "Multiple Choice 3"
q4Opt4.textContent = "Correct answer"

// Set the content of the Q5 screen
q5H1.textContent = "Fifth question here- placeholder text."
q5Opt1.textContent = "Multiple Choice 1"
q5Opt2.textContent = "Correct answer"
q5Opt3.textContent = "Multiple Choice 3"
q5Opt4.textContent = "Multiple Choice 4"



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



// Q1 Click Options

//Correct answer Q1
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

q1Opt2.onclick = function Q1toQ2() {
    secondsLeft = secondsLeft - 15;
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

q1Opt3.onclick = function Q1toQ2() {
    secondsLeft = secondsLeft - 15;
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

q1Opt4.onclick = function Q1toQ2() {
    secondsLeft = secondsLeft - 15;
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


// Q2 Click Options

q2Opt1.onclick = function Q2toQ3() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q2H1);
    mainContent.removeChild(q2Opt1);
    mainContent.removeChild(q2Opt2);
    mainContent.removeChild(q2Opt3);
    mainContent.removeChild(q2Opt4);

    mainContent.appendChild(q3H1);
    mainContent.appendChild(q3Opt1);
    mainContent.appendChild(q3Opt2);
    mainContent.appendChild(q3Opt3);
    mainContent.appendChild(q3Opt4);   
}

q2Opt2.onclick = function Q2toQ3() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q2H1);
    mainContent.removeChild(q2Opt1);
    mainContent.removeChild(q2Opt2);
    mainContent.removeChild(q2Opt3);
    mainContent.removeChild(q2Opt4);

    mainContent.appendChild(q3H1);
    mainContent.appendChild(q3Opt1);
    mainContent.appendChild(q3Opt2);
    mainContent.appendChild(q3Opt3);
    mainContent.appendChild(q3Opt4);   
}

// Correct answer Q2
q2Opt3.onclick = function Q2toQ3() {
    mainContent.removeChild(q2H1);
    mainContent.removeChild(q2Opt1);
    mainContent.removeChild(q2Opt2);
    mainContent.removeChild(q2Opt3);
    mainContent.removeChild(q2Opt4);

    mainContent.appendChild(q3H1);
    mainContent.appendChild(q3Opt1);
    mainContent.appendChild(q3Opt2);
    mainContent.appendChild(q3Opt3);
    mainContent.appendChild(q3Opt4);   
}

q2Opt4.onclick = function Q2toQ3() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q2H1);
    mainContent.removeChild(q2Opt1);
    mainContent.removeChild(q2Opt2);
    mainContent.removeChild(q2Opt3);
    mainContent.removeChild(q2Opt4);

    mainContent.appendChild(q3H1);
    mainContent.appendChild(q3Opt1);
    mainContent.appendChild(q3Opt2);
    mainContent.appendChild(q3Opt3);
    mainContent.appendChild(q3Opt4);   
}


// Q3 Click Options

q3Opt1.onclick = function Q3toQ4() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q3H1);
    mainContent.removeChild(q3Opt1);
    mainContent.removeChild(q3Opt2);
    mainContent.removeChild(q3Opt3);
    mainContent.removeChild(q3Opt4);

    mainContent.appendChild(q4H1);
    mainContent.appendChild(q4Opt1);
    mainContent.appendChild(q4Opt2);
    mainContent.appendChild(q4Opt3);
    mainContent.appendChild(q4Opt4);   
}

q3Opt2.onclick = function Q3toQ4() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q3H1);
    mainContent.removeChild(q3Opt1);
    mainContent.removeChild(q3Opt2);
    mainContent.removeChild(q3Opt3);
    mainContent.removeChild(q3Opt4);

    mainContent.appendChild(q4H1);
    mainContent.appendChild(q4Opt1);
    mainContent.appendChild(q4Opt2);
    mainContent.appendChild(q4Opt3);
    mainContent.appendChild(q4Opt4);   
}

q3Opt3.onclick = function Q3toQ4() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q3H1);
    mainContent.removeChild(q3Opt1);
    mainContent.removeChild(q3Opt2);
    mainContent.removeChild(q3Opt3);
    mainContent.removeChild(q3Opt4);

    mainContent.appendChild(q4H1);
    mainContent.appendChild(q4Opt1);
    mainContent.appendChild(q4Opt2);
    mainContent.appendChild(q4Opt3);
    mainContent.appendChild(q4Opt4);   
}

// Correct answer Q3
q3Opt4.onclick = function Q3toQ4() {
    mainContent.removeChild(q3H1);
    mainContent.removeChild(q3Opt1);
    mainContent.removeChild(q3Opt2);
    mainContent.removeChild(q3Opt3);
    mainContent.removeChild(q3Opt4);

    mainContent.appendChild(q4H1);
    mainContent.appendChild(q4Opt1);
    mainContent.appendChild(q4Opt2);
    mainContent.appendChild(q4Opt3);
    mainContent.appendChild(q4Opt4);   
}


// Q4 Click Options

q4Opt1.onclick = function Q4toQ5() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q4H1);
    mainContent.removeChild(q4Opt1);
    mainContent.removeChild(q4Opt2);
    mainContent.removeChild(q4Opt3);
    mainContent.removeChild(q4Opt4);

    mainContent.appendChild(q5H1);
    mainContent.appendChild(q5Opt1);
    mainContent.appendChild(q5Opt2);
    mainContent.appendChild(q5Opt3);
    mainContent.appendChild(q5Opt4);
}

q4Opt2.onclick = function Q4toQ5() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q4H1);
    mainContent.removeChild(q4Opt1);
    mainContent.removeChild(q4Opt2);
    mainContent.removeChild(q4Opt3);
    mainContent.removeChild(q4Opt4);

    mainContent.appendChild(q5H1);
    mainContent.appendChild(q5Opt1);
    mainContent.appendChild(q5Opt2);
    mainContent.appendChild(q5Opt3);
    mainContent.appendChild(q5Opt4);
}

q4Opt3.onclick = function Q4toQ5() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q4H1);
    mainContent.removeChild(q4Opt1);
    mainContent.removeChild(q4Opt2);
    mainContent.removeChild(q4Opt3);
    mainContent.removeChild(q4Opt4);

    mainContent.appendChild(q5H1);
    mainContent.appendChild(q5Opt1);
    mainContent.appendChild(q5Opt2);
    mainContent.appendChild(q5Opt3);
    mainContent.appendChild(q5Opt4);
}

// Correct answer Q4
q4Opt4.onclick = function Q4toQ5() {
    mainContent.removeChild(q4H1);
    mainContent.removeChild(q4Opt1);
    mainContent.removeChild(q4Opt2);
    mainContent.removeChild(q4Opt3);
    mainContent.removeChild(q4Opt4);

    mainContent.appendChild(q5H1);
    mainContent.appendChild(q5Opt1);
    mainContent.appendChild(q5Opt2);
    mainContent.appendChild(q5Opt3);
    mainContent.appendChild(q5Opt4);
}


// Q5 Click Options

q5Opt1.onclick = function Q5toFinish() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q5H1);
    mainContent.removeChild(q5Opt1);
    mainContent.removeChild(q5Opt2);
    mainContent.removeChild(q5Opt3);
    mainContent.removeChild(q5Opt4);

    mainContent.appendChild(finishH1);
    mainContent.appendChild(finishContent);
    clearInterval(timerInterval);
    timeEl.textContent = '';

    // Set the content of the finish screen
    finishH1.textContent = "All done!"
    finishContent.textContent = (`Your final score is ` + secondsLeft);
}

// Correct answer Q2
q5Opt2.onclick = function Q5toFinish() {
    mainContent.removeChild(q5H1);
    mainContent.removeChild(q5Opt1);
    mainContent.removeChild(q5Opt2);
    mainContent.removeChild(q5Opt3);
    mainContent.removeChild(q5Opt4);

    mainContent.appendChild(finishH1);
    mainContent.appendChild(finishContent);
    clearInterval(timerInterval);
    timeEl.textContent = '';

    // Set the content of the finish screen
    finishH1.textContent = "All done!"
    finishContent.textContent = (`Your final score is ` + secondsLeft);
}

q5Opt3.onclick = function Q5toFinish() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q5H1);
    mainContent.removeChild(q5Opt1);
    mainContent.removeChild(q5Opt2);
    mainContent.removeChild(q5Opt3);
    mainContent.removeChild(q5Opt4);

    mainContent.appendChild(finishH1);
    mainContent.appendChild(finishContent);
    clearInterval(timerInterval);
    timeEl.textContent = '';

    // Set the content of the finish screen
    finishH1.textContent = "All done!"
    finishContent.textContent = (`Your final score is ` + secondsLeft);    
}

q5Opt4.onclick = function Q5toFinish() {
    secondsLeft = secondsLeft - 15;
    mainContent.removeChild(q5H1);
    mainContent.removeChild(q5Opt1);
    mainContent.removeChild(q5Opt2);
    mainContent.removeChild(q5Opt3);
    mainContent.removeChild(q5Opt4);

    mainContent.appendChild(finishH1);
    mainContent.appendChild(finishContent);
    clearInterval(timerInterval);
    timeEl.textContent = '';

    // Set the content of the finish screen
    finishH1.textContent = "All done!"
    finishContent.textContent = (`Your final score is ` + secondsLeft);
}



// Close timer
}