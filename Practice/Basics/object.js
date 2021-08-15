let mobile = {
  Brand: "OnePlus",
  Model: "8Pro",
  year: 2020,
  getPrice: function () {
    return 45000;
  },
  print: function () {
    console.log(this.Brand + " " + this.Model);
  },
};

mobile.print();
console.log(mobile.year);
