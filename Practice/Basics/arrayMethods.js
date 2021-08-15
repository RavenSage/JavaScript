const beta = ["Honey", "Bear", "Bees", "Flowers"];
const roll = [2, 4, 6, 8, 10, 12];

//forEach Method
beta.forEach((sweet, index) => {
  // used to iterate through the elements of an array
  console.log(sweet + " " + index);
});

//Map Method
const roller = roll.map((num) => {
  //Map always returns a brand new array
  return num + 2;
});
console.log(roller);

//Filter Method
const roller1 = roll.filter((num) => {
  //Filter also returns a new array
  return num >= 3;
});
console.log(roller1);

//Find Method
const n = roll.find((num) => {
  /*Find is also used to iterate through the elements of an array. 
  And when the given condition is satisfied.
   It returns the value and stops the iteration and exits the function. */
  return num > 2;
});
console.log(n);

//Some method
const no = roll.some((num) => {
  /* Sum method returns a boolean value. 
  If the given Condition is satisfied by atleast one of the elements of the array.
  It returns True*/
  return num > 9;
});
console.log(no);

//Every Method
const ev = roll.every((num) => {
  /* Every method returns a boolean value. 
  If the given Condition is satisfied by every elements of the array.
  It returns True or even a single element doesn't satisfy the condition if returns false*/
  return num <= 10;
});
console.log(ev);

const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 1 },
  { price: 6 },
];

//Reduce Method
const re = roll.reduce((sum, element) => {
  return sum + element;
}, 0);
 console.log(re);

const it = items.reduce((sum, element) => {
  return sum + element.price;
}, 0);
  console.log(it);

/*Include Method - Checks Weather the given parameter is present in the taken array or not.
 If present it returns true or else it returns false.*/
const inc = roll.includes(6);
console.log(inc);

