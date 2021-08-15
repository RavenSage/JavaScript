const animalsLand = ["Lion", "Tiger", "Cheetha", "Jaguar", "Leopard"];
const animalsWater = ["Shark", "BlueWhale", "Dolphine", "Octopus"];
const animalsAir = ["Eagle", "Vulture", "Ostriche", "Flamingo"];

//Array.concat - combaines Different Arrays
const animals = animalsLand.concat(animalsWater, animalsAir);
console.log(animals);
/*--------------------------------
Array.copyWithin - copyies the elements with in the Array MOdifies the main array */
console.log(animalsLand.copyWithin(1, 0, 3));
console.log(animalsLand);
/*--------------------------------
Array.entries - returns new array with key and value pairs where key is IndexNumber and value being the
Element*/
const dummyAnimals = animalsAir.entries();
for (let e of dummyAnimals) {
  console.log(e);
}
