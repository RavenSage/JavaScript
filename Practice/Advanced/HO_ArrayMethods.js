const array1 = ["Ant", "Bat", "Cow", "Dog", "Eagle", "Fish"];

/*Array.forEach 
- It executes a provided function once for each array element.
ele - current element being processed in the array, 
index - Index of element in the array.
Arrow Function*/ array1.forEach((ele, index) => console.log(ele, index));
//Function Callback
function animal(element) {
  console.log(element);
}
array1.forEach(animal);


