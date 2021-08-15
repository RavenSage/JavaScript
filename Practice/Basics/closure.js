function sayHello(name, message) {
  return function () {
    console.log(name + ': ' + message);
  };
}
let ironMan = sayHello('IronMan', 'Welcome to the avengers office');

ironMan();
