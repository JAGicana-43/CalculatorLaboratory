function calculateDifference(num1, num2) {
  return num1 - num2;
}

function calculateProduct(num1, num2) {
  return num1 * num2;
}

function calculateQuotient(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  } else {
    return num1 / num2;
  }
}
function calculateSquare(num) {
  return Math.pow(num, 2);
}
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}