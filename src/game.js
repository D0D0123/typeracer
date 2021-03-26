function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function generateRandomEquation() {
    let len = getRandomIntInclusive(4, 10);
    let operators = ['+', '-', '/', '*', '^'];
    let equation = "";

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
