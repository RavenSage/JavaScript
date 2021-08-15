const alpha = ["A", "B", "C", "D", "E", "F"];
const num = ["1", "2", "3", "4", "5", "6"];

// const a = alpha[1]; //pulling out elements of an array using index numbers
// const b = alpha[2];

const [a, b, ...rem] = alpha; //Destructuring by using spread operator

/* console.log(a);
console.log(b);
console.log(rem); */

const newArray0 = alpha.concat(num); //using Array method
const newArray = [...alpha, ...num]; //concat two different arrays using spread operator

/* console.log(newArray0);
console.log(newArray);
 */

//Destructuring functions

let sumAndMultiply = (a, b) => {
  return [a + b, a * b, a / b];
};

const [sum, multiply, division = "no division"] = sumAndMultiply(4, 6);

/* console.log(sum);
console.log(multiply);
console.log(division);
 */
//Destructuring objects and using spread operator

const employeeOne = {
  name: "Danny Rand",
  age: 35,
  superPowers: "Iron Fist",
  teams: {
    first: "Immortal Weapons",
    second: "New Avengers",
  },
};

const employeeTwo = {
  name: "Matthew Murdock",
  age: 39,
  // superPowers: 'Daredevil',
  teams: {
    first: "Marvel Knights",
    second: "New Avengers",
  },
};

// const employeeThree = { ...employeeOne, ...employeeTwo };

// const { name: firstName, age, superPowers = 'none' } = employeeTwo;
const { name: firstName, ...rest } = employeeTwo;
// const {
//   name: firstName,
//   teams: { second },
// } = employeeTwo;

// console.log(firstName);
// console.log(age);
// console.log(superPowers);
// console.log(rest);
// console.log(second);
// console.log(employeeThree);

/* let printEmployee = ({ name, superPowers }) => {
  console.log(`name is ${name} amd his superpowers is ${superPowers}`);
}; */

// printEmployee(employeeOne);

function nameToFirstAndLast(name) {
  //return name.split(" ");
  const [firstName, lastName] = name.split(" ");
  return {
    firstname: firstNames,
    lastName: lastNames,
  };
}

const [firstNames, lastNames] = nameToFirstAndLast("KrishnaSai Reddy");
console.log(firstNames);
console.log(lastNames);
