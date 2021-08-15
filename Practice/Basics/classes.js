class Mobile {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  print() {
    console.log(`${this.make}, ${this.model}, ${this.year}`);
  }
}

/* let myMobile = new Mobile('moto', 'x4', 2018);
myMobile.print();
 */
class featuredMobile extends Mobile {
  processor() {
    console.log(`${this.model} has a highend processor`);
  }
}

let myFmobile = new featuredMobile('Apple', 'Iphone', 2021);
myFmobile.print();
myFmobile.processor();
