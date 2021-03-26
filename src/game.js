
var userInputForm = document.getElementById("user-input-form");
var userInputBox = document.getElementById("user-input-box");
var displayEquation = document.getElementById("equation");
var displayPoints = document.getElementById("points");
var displayTimer = document.getElementById("time");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");

function main() {
    let user_string = "";
    let points = 0;
    let equation = generateRandomEquation();
    displayEquation.textContent = equation;

    userInputForm.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log(userInputBox.value);
        user_string = userInputBox.value;
        // if user string matches equation on form submission
        if (user_string == equation) {
            points += 1;
            console.log(points);
            displayPoints.textContent = points.toString();
            equation = generateRandomEquation();
            displayEquation.textContent = equation;
            userInputForm.reset();
            userInputBox.className = "form-control mx-auto mt-3 shadow-none"
        }
        else {
            userInputBox.className = "form-control mx-auto mt-3 is-invalid";
        }
    });

    userInputBox.addEventListener("input", function(event) {
        userInputBox.className = "form-control mx-auto mt-3 shadow-none"
    });

    startButton.addEventListener("click", () => {
        startTimer();
        startButton.disabled = true;
    });
    stopButton.addEventListener("click", () => {
        stopTimer();
        startButton.disabled = false;
    });
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function generateRandomEquation() {
    let len = getRandomIntInclusive(4, 6);
    let operators = ['+', '-', '/', '*', '^'];
    let equation = "";

    if (len % 2 == 0) {
        len += 1;
    }

    for (i = 0; i < len; i++) {
        if (i % 2 == 0) {
            let num = getRandomIntInclusive(1, 100);
            equation += num.toString();
        }
        else {
            operator = operators[Math.floor(Math.random() * operators.length)];
            equation += operator;
        }
    }

    console.log(equation);

    return equation;
}

let timerInterval;

function startTimer() {
    let startTime;
    let elapsedTime = 0;

    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      displayTimer.innerHTML = formatTime(elapsedTime);
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function formatTime(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    // return `${formattedMM}:${formattedSS}:${formattedMS}`;
    return `${formattedMM}:${formattedSS}`;
}

// generateRandomEquation();
main();