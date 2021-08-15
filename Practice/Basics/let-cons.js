var a = b;

function aa() {
  return a;
}
var b = 999;
var result = aa();
console.log(result);
console.log("object :>> ", result);
