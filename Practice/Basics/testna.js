let r = (num1, num2) => {
  if (num2 > 0) {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};

let result = r(5, 9);
console.log(result);
