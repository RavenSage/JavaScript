class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`I am ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, owner) {
    super(name); //super refers to the parent class
    this.owner = owner;
  }
  speak() {
    console.log("Bark");
  }
}

const dog = new Dog("Leo", "Sai");
console.log(dog.speak());

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Janitor extends Person {
  constructor(name, mops) {
    super(name);
    this.mops = mops;
  }
  printMops() {
    console.log(`${this.name} has done ${this.mops} mops`);
  }
}

const person = new Janitor("Tony", 12);
console.log(person.printMops());
