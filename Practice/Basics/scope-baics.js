/* let a = 'first';

function scopeTest() {
  console.log(a);
  a = 'changed';
}

let b = 'second';
if (a != '') {
  console.log(a);
  console.log('inside if; ' + b);
  let c = 'third';
}

scopeTest();
//console.log(c); */

/* function sayHai(name) {
  let result = 'Hi ' + name;

  console.log(result);
}
var f = 100;
let result = 'krish';

sayHai(result);
console.log(f);
 */
function x(valu) {
  var a = 100;
  function y(a) {
    console.log(a);
  }
}

// var a = 100;

x();
