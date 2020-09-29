var body = document.body;

// Set initial elements
var nav = document.querySelector("#olnavy");
var highScoresbtn = document.querySelector("#highScoresbtn");
var timeEl = document.querySelector("#timerDisplay");
var startQuiz = document.querySelector("#startQuiz");
var mainContent = document.querySelector("#mainContent");

// Set start screen elements
var startH1 = document.createElement("h1");
var startContent = document.createElement("p");
var startQuiz = document.createElement("button");

// Set question 1 elements
var q1H1 = document.createElement("h1");
var q1Opt1 = document.createElement("button");
var q1Opt2 = document.createElement("button");
var q1Opt3 = document.createElement("button");
var q1Opt4 = document.createElement("button");

// Set question 2 elements
var q2H1 = document.createElement("h1");
var q2Opt1 = document.createElement("button");
var q2Opt2 = document.createElement("button");
var q2Opt3 = document.createElement("button");
var q2Opt4 = document.createElement("button");

// Set question 3 elements
var q3H1 = document.createElement("h1");
var q3Opt1 = document.createElement("button");
var q3Opt2 = document.createElement("button");
var q3Opt3 = document.createElement("button");
var q3Opt4 = document.createElement("button");

// Set question 4 elements
var q4H1 = document.createElement("h1");
var q4Opt1 = document.createElement("button");
var q4Opt2 = document.createElement("button");
var q4Opt3 = document.createElement("button");
var q4Opt4 = document.createElement("button");

// Set question 5 elements
var q5H1 = document.createElement("h1");
var q5Opt1 = document.createElement("button");
var q5Opt2 = document.createElement("button");
var q5Opt3 = document.createElement("button");
var q5Opt4 = document.createElement("button");

// Set finish screen elements
var finishH1 = document.createElement("h1");
var finishContent = document.createElement("p");
var initialsForm = document.createElement("input");
var submitButton = document.createElement("button");

// Set High Score screen elements
var hsH1 = document.createElement("h1");
var goBack = document.createElement("button");
var clearHS = document.createElement("button");

var hsList1 = document.createElement("p");





// Set the content of start screen
startH1.textContent = "Coding Quiz Challenge"
startContent.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will peanlize your score/time by fifteen seconds!"
startQuiz.textContent = "Start Quiz"

// Set the content of the Q1 screen
q1H1.textContent = "What is NOT one of the five data types used in JavaScript?"
q1Opt1.textContent = "Variables"
q1Opt2.textContent = "Booleans"
q1Opt3.textContent = "Objects"
q1Opt4.textContent = "Arrays"

// Set the content of the Q2 screen
q2H1.textContent = "To denote an array, what syntax should you use?"
q2Opt1.textContent = "{}"
q2Opt2.textContent = "<>"
q2Opt3.textContent = "[]"
q2Opt4.textContent = "()"

// Set the content of the Q3 screen
q3H1.textContent = "JavaScript is one of the three main building blocks of Web Development. What is one of the other three?"
q3Opt1.textContent = "SQL"
q3Opt2.textContent = "Java"
q3Opt3.textContent = "Political Facebook Posts"
q3Opt4.textContent = "HTML"

// Set the content of the Q4 screen
q4H1.textContent = "In 'function myFunction(p1, p2, p3, p4) {}', how many arguments/paramters exist?"
q4Opt1.textContent = "One"
q4Opt2.textContent = "Two"
q4Opt3.textContent = "Three"
q4Opt4.textContent = "Four"

// Set the content of the Q5 screen
q5H1.textContent = "In 'var understands_jQuery = false', what is data type is 'false'?."
q5Opt1.textContent = "String"
q5Opt2.textContent = "Boolean"
q5Opt3.textContent = "Object"
q5Opt4.textContent = "Integer"

// Set the content of the HS screen
hsH1.textContent = "High Scores"
goBack.textContent = "Go Back"
clearHS.textContent = "Clear Highscores"


// Append start screen elements
mainContent.appendChild(startH1);
mainContent.appendChild(startContent);
mainContent.appendChild(startQuiz);

// Set the timer to run on START

var secondsLeft = 75;

startQuiz.onclick = function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

    mainContent.innerHTML = "";

    mainContent.appendChild(q1H1);
    mainContent.appendChild(q1Opt1);
    mainContent.appendChild(q1Opt2);
    mainContent.appendChild(q1Opt3);
    mainContent.appendChild(q1Opt4);



    // Q1 Click Options

    //Correct answer Q1
    q1Opt1.onclick = function Q1toQ2() {
        mainContent.innerHTML = "";

        mainContent.appendChild(q2H1);
        mainContent.appendChild(q2Opt1);
        mainContent.appendChild(q2Opt2);
        mainContent.appendChild(q2Opt3);
        mainContent.appendChild(q2Opt4);
    }

    q1Opt2.onclick = function Q1toQ2() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q2H1);
        mainContent.appendChild(q2Opt1);
        mainContent.appendChild(q2Opt2);
        mainContent.appendChild(q2Opt3);
        mainContent.appendChild(q2Opt4);
    }

    q1Opt3.onclick = function Q1toQ2() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q2H1);
        mainContent.appendChild(q2Opt1);
        mainContent.appendChild(q2Opt2);
        mainContent.appendChild(q2Opt3);
        mainContent.appendChild(q2Opt4);
    }

    q1Opt4.onclick = function Q1toQ2() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q2H1);
        mainContent.appendChild(q2Opt1);
        mainContent.appendChild(q2Opt2);
        mainContent.appendChild(q2Opt3);
        mainContent.appendChild(q2Opt4);
    }


    // Q2 Click Options

    q2Opt1.onclick = function Q2toQ3() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q3H1);
        mainContent.appendChild(q3Opt1);
        mainContent.appendChild(q3Opt2);
        mainContent.appendChild(q3Opt3);
        mainContent.appendChild(q3Opt4);
    }

    q2Opt2.onclick = function Q2toQ3() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q3H1);
        mainContent.appendChild(q3Opt1);
        mainContent.appendChild(q3Opt2);
        mainContent.appendChild(q3Opt3);
        mainContent.appendChild(q3Opt4);
    }

    // Correct answer Q2
    q2Opt3.onclick = function Q2toQ3() {
        mainContent.innerHTML = "";

        mainContent.appendChild(q3H1);
        mainContent.appendChild(q3Opt1);
        mainContent.appendChild(q3Opt2);
        mainContent.appendChild(q3Opt3);
        mainContent.appendChild(q3Opt4);
    }

    q2Opt4.onclick = function Q2toQ3() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q3H1);
        mainContent.appendChild(q3Opt1);
        mainContent.appendChild(q3Opt2);
        mainContent.appendChild(q3Opt3);
        mainContent.appendChild(q3Opt4);
    }


    // Q3 Click Options

    q3Opt1.onclick = function Q3toQ4() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q4H1);
        mainContent.appendChild(q4Opt1);
        mainContent.appendChild(q4Opt2);
        mainContent.appendChild(q4Opt3);
        mainContent.appendChild(q4Opt4);
    }

    q3Opt2.onclick = function Q3toQ4() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q4H1);
        mainContent.appendChild(q4Opt1);
        mainContent.appendChild(q4Opt2);
        mainContent.appendChild(q4Opt3);
        mainContent.appendChild(q4Opt4);
    }

    q3Opt3.onclick = function Q3toQ4() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q4H1);
        mainContent.appendChild(q4Opt1);
        mainContent.appendChild(q4Opt2);
        mainContent.appendChild(q4Opt3);
        mainContent.appendChild(q4Opt4);
    }

    // Correct answer Q3
    q3Opt4.onclick = function Q3toQ4() {
        mainContent.innerHTML = "";

        mainContent.appendChild(q4H1);
        mainContent.appendChild(q4Opt1);
        mainContent.appendChild(q4Opt2);
        mainContent.appendChild(q4Opt3);
        mainContent.appendChild(q4Opt4);
    }


    // Q4 Click Options

    q4Opt1.onclick = function Q4toQ5() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q5H1);
        mainContent.appendChild(q5Opt1);
        mainContent.appendChild(q5Opt2);
        mainContent.appendChild(q5Opt3);
        mainContent.appendChild(q5Opt4);
    }

    q4Opt2.onclick = function Q4toQ5() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q5H1);
        mainContent.appendChild(q5Opt1);
        mainContent.appendChild(q5Opt2);
        mainContent.appendChild(q5Opt3);
        mainContent.appendChild(q5Opt4);
    }

    q4Opt3.onclick = function Q4toQ5() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        mainContent.appendChild(q5H1);
        mainContent.appendChild(q5Opt1);
        mainContent.appendChild(q5Opt2);
        mainContent.appendChild(q5Opt3);
        mainContent.appendChild(q5Opt4);
    }

    // Correct answer Q4
    q4Opt4.onclick = function Q4toQ5() {
        mainContent.innerHTML = "";

        mainContent.appendChild(q5H1);
        mainContent.appendChild(q5Opt1);
        mainContent.appendChild(q5Opt2);
        mainContent.appendChild(q5Opt3);
        mainContent.appendChild(q5Opt4);
    }


    // Q5 Click Options

    q5Opt1.onclick = function Q5toFinish() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        clearInterval(timerInterval);
        timeEl.textContent = '';

        // Set the content of the finish screen
        finishH1.textContent = 'All done!';
        finishContent.textContent = (`Your final score is ` + secondsLeft);
        initialsForm.setAttribute('type', 'text');
        initialsForm.setAttribute('id', 'initials')
        initialsForm.setAttribute('placeholder', 'Enter Your Initials');
        submitButton.textContent = 'Submit';

        mainContent.appendChild(finishH1);
        mainContent.appendChild(finishContent);
        mainContent.appendChild(initialsForm);
        mainContent.appendChild(submitButton);
    }

    // Correct answer Q5
    q5Opt2.onclick = function Q5toFinish() {
        mainContent.innerHTML = "";

        clearInterval(timerInterval);
        timeEl.textContent = '';

        finishH1.textContent = 'All done!';
        finishContent.textContent = (`Your final score is ` + secondsLeft);
        initialsForm.setAttribute('type', 'text');
        initialsForm.setAttribute('id', 'initials')
        initialsForm.setAttribute('placeholder', 'Enter Your Initials');
        submitButton.textContent = 'Submit';

        mainContent.appendChild(finishH1);
        mainContent.appendChild(finishContent);
        mainContent.appendChild(initialsForm);
        mainContent.appendChild(submitButton);

    }

    q5Opt3.onclick = function Q5toFinish() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        clearInterval(timerInterval);
        timeEl.textContent = '';

        finishH1.textContent = 'All done!';
        finishContent.textContent = (`Your final score is ` + secondsLeft);
        initialsForm.setAttribute('type', 'text');
        initialsForm.setAttribute('id', 'initials')
        initialsForm.setAttribute('placeholder', 'Enter Your Initials');
        submitButton.textContent = 'Submit';

        mainContent.appendChild(finishH1);
        mainContent.appendChild(finishContent);
        mainContent.appendChild(initialsForm);
        mainContent.appendChild(submitButton);
    }

    q5Opt4.onclick = function Q5toFinish() {
        secondsLeft = secondsLeft - 15;
        mainContent.innerHTML = "";

        clearInterval(timerInterval);
        timeEl.textContent = '';

        finishH1.textContent = 'All done!';
        finishContent.textContent = (`Your final score is ` + secondsLeft);
        initialsForm.setAttribute('type', 'text');
        initialsForm.setAttribute('id', 'initials');
        initialsForm.setAttribute('placeholder', 'Enter Your Initials');
        submitButton.textContent = 'Submit';

        mainContent.appendChild(finishH1);
        mainContent.appendChild(finishContent);
        mainContent.appendChild(initialsForm);
        mainContent.appendChild(submitButton);
    }

    // Close timer function
};



// 'Submit' onclick
submitButton.onclick = function FinishtoHS() {
    mainContent.innerHTML = "";
    body.removeChild(nav);

    var displayInitials = {
        userInput: initialsForm.value,
    };
    console.log(displayInitials);

    hsList1.textContent = displayInitials.userInput;

    body.appendChild(hsH1);
    body.appendChild(hsList1)
    body.appendChild(goBack);
    body.appendChild(clearHS);



}



// 'Go back' onclick
goBack.onclick = function reload() {
    location.reload();
}

// 'View highscores' onclick
highScoresbtn.onclick = function anytoHS() {
    mainContent.innerHTML = "";
    body.removeChild(nav);

    body.appendChild(hsH1);
    body.appendChild(hsList1);
    body.appendChild(goBack);
    body.appendChild(clearHS);
}


// 'Clear highscores' onclick

// Element Styling

mainContent.setAttribute("style", "text-align:center;");

startQuiz.setAttribute("class", "btn-success m-3");

q1Opt1.setAttribute("class", "btn-primary m-3");
q1Opt2.setAttribute("class", "btn-primary m-3");
q1Opt3.setAttribute("class", "btn-primary m-3");
q1Opt4.setAttribute("class", "btn-primary m-3");

q2Opt1.setAttribute("class", "btn-primary m-3");
q2Opt2.setAttribute("class", "btn-primary m-3");
q2Opt3.setAttribute("class", "btn-primary m-3");
q2Opt4.setAttribute("class", "btn-primary m-3");

q3Opt1.setAttribute("class", "btn-primary m-3");
q3Opt2.setAttribute("class", "btn-primary m-3");
q3Opt3.setAttribute("class", "btn-primary m-3");
q3Opt4.setAttribute("class", "btn-primary m-3");

q4Opt1.setAttribute("class", "btn-primary m-3");
q4Opt2.setAttribute("class", "btn-primary m-3");
q4Opt3.setAttribute("class", "btn-primary m-3");
q4Opt4.setAttribute("class", "btn-primary m-3");

q5Opt1.setAttribute("class", "btn-primary m-3");
q5Opt2.setAttribute("class", "btn-primary m-3");
q5Opt3.setAttribute("class", "btn-primary m-3");
q5Opt4.setAttribute("class", "btn-primary m-3");

submitButton.setAttribute("class", "btn-info m-3");

