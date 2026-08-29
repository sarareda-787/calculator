function calculate() {
    const num1Input = document.getElementById("num1").value;
    const num2Input = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;
    const resultElement = document.getElementById("result");

    if (num1Input === "" || num2Input === "") {
        resultElement.textContent = "Please enter both numbers.";
        return;
    }

    const num1 = Number(num1Input);
    const num2 = Number(num2Input);

    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;

        case "subtract":
            result = num1 - num2;
            break;

        case "multiply":
            result = num1 * num2;
            break;

        case "divide":
            if (num2 === 0) {
                resultElement.textContent = "Cannot divide by zero.";
                return;
            }

            result = num1 / num2;
            break;
    }

    resultElement.textContent = `Result: ${result}`;
}