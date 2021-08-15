function handset(brand, processor) {
  this.brand = brand;
  this.processor = processor;
}

handset.get = function processor() {
  return this._processor;
};

handset.set = function processor(value) {
  return (this._processor = value);
};

handset.prototype.print = function () {
  console.log(
    `This ${this.brand} mobile comes with ${this.processor} Processor`
  );
};
var newHandset = new handset('Apple', 'A14 Bionic chip');

newHandset.print();
// console.log(handset.prototype.set);

function mobile(brand, p) {
  handset.call(this, brand);
  this.processor = p;
}

mobile.prototype.print = function () {
  console.log(
    `This ${this.brand} mobile comes with ${this.processor} Processor`
  );
};

var newMobile = new mobile('OnePlus', 'Snapdragon 888');

newMobile.print();
