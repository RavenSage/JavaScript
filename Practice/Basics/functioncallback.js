/* function print(value) {
  console.log(value);
}

function fun(v) {
  v('Hello!');
}

fun(print);
 */

function printVariable(variable) {
  console.log(variable);
}

function funny(name, callback) {
  callback('Hello ' + name);
}

funny('Ant MAn', printVariable);

funny('Black Widow', function (variable) {
  console.log(variable);
});
