/*function one() {
    return 'one ';
}
let value = one();
console.log(value);*/

/*function two() {
  console.log("hello");
  return function () {
    console.log("two");
  };
}

let myFunction = two();
 myFunction();
console.log(two());*/

function three() {
  return function () {
    return "three";
  };
}

// let fun = three();
// console.log(fun());

console.log(three()());
