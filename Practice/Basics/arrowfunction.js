/* function sum(a, b) {
  return a + b; //Normal function with multiple parameters
}

let sum1 = (a, b) => a + b; //Arrow function with multiple parameters

function isPositive(number) {
  return number >= 0; //Normal function with single parameter
}

let isPositive1 = (number) => number >= 0; //Arrow function with single parameters

function randomNumber() {
  return Math.random; //Normal function with no parameters
}

let randomNumber = () => math.random; //Arrow function with no parameters

document.addEventListener('click', function () {
  console.log('click'); //anonymous function
});

document.addEventListener('click', (e) => console.log('click')); //anonymous arrow function
 */
// .this keyword scope is redefined compared to a normal function

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log(`ArrowFunction: ${this.name}`);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log(`Function: ${this.name}`);
    }, 100);
  }
}

let person = new Person('Sai');
person.printNameArrow();
person.printNameFunction();
