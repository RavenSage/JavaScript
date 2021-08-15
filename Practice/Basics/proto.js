let handset = {
  brand: "Samsung",
  model: "note 10",
  processor: "Snapdragon 888",
};

let newHandset = Object.create(handset);

console.log(
  `This ${newHandset.brand} brand mobile of model ${newHandset.model} comes with ${newHandset.processor} chip processor`
);

newHandset.brand = "Apple";
newHandset.model = "Iphone 12pro";
newHandset.processor = "A14 Bionic chip";

console.log(
  `This ${newHandset.brand} brand mobile of model ${newHandset.model} comes with ${newHandset.processor} chip processor`
);

// console.log(Object.getPrototypeOf(handset));
