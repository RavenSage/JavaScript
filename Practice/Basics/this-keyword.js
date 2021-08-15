/* function first() {
  return this;
}

console.log(first() === global);
console.log(first() === undefined); */

/* function second() {
  'use strict';

  return this;
}

console.log(second() === global);
console.log(second() === undefined);
 */

/* let myObject = { value: 'My object' };

global.value = 'Global object';

function third(name) {
  return this.value + ' ' + name;
}

console.log(third());

//console.log(third.call(myObject));
console.log(third.call(myObject, 'sai'));
// console.log(third.apply(myObject)); */

/* function fifth() {
  console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
  firstName: 'Krishna Sai',
  lastName: 'RamiReddy',
  print: fifth,
};

let customer2 = {
  firstName: 'Sai',
  lastName: 'Reddy',
  print: fifth,
};

customer2.print();
customer1.print(); */

