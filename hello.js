let a = 10;
let b = 20;
let res = a + b;
console.log(res);

function calculator(a, b, operation) {
  if (operation == "+") {
    return a + b;
  }
  if (operation == "-") {
    return a - b;
  }
  if (operation == "*") {
    return a * b;
  }
  if (operation == "/") {
    return b !== 0 ? a / b : "error";
  }
}

console.log(calculator(10, 15, "+"));
console.log(calculator(45, 40, "-"));
console.log(calculator(4, 9, "*"));
console.log(calculator(10, 0, "/"));

function calc(a, b, sign) {
  let result;
  if (sign == "+") result = a + b;
  return result;
}
//log 1
console.log(calc(2, 4, "+"));

//log2
console.log(calc(5, 7, "+"));
