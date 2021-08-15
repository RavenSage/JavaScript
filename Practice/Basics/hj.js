/* function x(ele) {
  ele(d);
}

function y(d) {
  console.log(d);
}

x(y); */

function makeAdjectifier(adjetive) {
  return function (string) {
    console.log(adjetive + " " + string);
  };
}

// var coolifier = makeAdjectifier("Cool");
// coolifier("Conference");
makeAdjectifier("cool")("conference");
