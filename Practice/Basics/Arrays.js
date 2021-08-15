const arr = [1, 2, 3, 4, "Hello"]; //Arrays in js can contain both numbers and Strings
arr.push("Morning");
arr.push(["What", "The", "Hell", "And", "Heaven"]);
console.log(arr[6][2]);

const alpha = ["Ant", "Bat", "Cat", "Dog", "Eagle"];
console.log(alpha[2]);
//Creating an Array inside an Array

const doubleArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];
console.log(doubleArr[0][3]);
console.log(doubleArr[1][2]);
console.log(doubleArr[2][0]);
console.log(doubleArr.length);
