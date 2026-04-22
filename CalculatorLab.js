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
console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));