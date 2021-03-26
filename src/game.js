
var userInputForm = document.getElementById("user-input-form");
var userInputBox = document.getElementById("user-input-box");
var displayEquation = document.getElementById("equation");
var displayPoints = document.getElementById("points");

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

// generateRandomEquation();
main();