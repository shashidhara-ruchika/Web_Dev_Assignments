const isValidNum = (value) => {
  return !isNaN(value) && isFinite(value);
};

const validateInput = (input, errorId) => {
  const errorElement = $(`#${errorId}`);
  if (input.trim() === "") {
    errorElement.text("This field is required").show();
    return false;
  }
  if (!isValidNum(input)) {
    errorElement.text("This field requires proper number format").show();
    return false;
  }
  errorElement.hide();
  return true;
};

const performOperation = (operation) => {
  const num1 = $("#number1").val();
  const num2 = $("#number2").val();
  if (
    validateInput(num1, "number1-error") &&
    validateInput(num2, "number2-error")
  ) {
    const parsedNum1 = Number(parseFloat(num1));
    const parsedNum2 = Number(parseFloat(num2));
    let result = 0;

    switch (operation) {
      case "add":
        result = parsedNum1 + parsedNum2;
        break;
      case "subtract":
        result = parsedNum1 - parsedNum2;
        break;
      case "multiply":
        result = parsedNum1 * parsedNum2;
        break;
      case "divide":
        if (parsedNum2 === 0) {
          $("#result-error").text("Cannot divide by zero").show();
          $("#result").val("");
          return;
        } else {
          result = parsedNum1 / parsedNum2;
          if (!isFinite(result)) {
            $("#result-error").text("Result is infinite").show();
            $("#result").val("");
            return;
          }
          $("#result-error").hide();
        }
        break;
      default:
        break;
    }

    if (!isFinite(result)) {
      $("#result-error").text("Result is infinity").show();
      $("#result").val("");
    } else {
      $("#result").val(Number(result));
      $("#result-error").hide();
    }
  }
};
