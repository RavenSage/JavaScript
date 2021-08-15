let counter = 0;
function timeout() {
  setTimeout(function () {
    console.log("Hello" + " " + counter++);
    timeout();
  }, 3000);
}

timeout();
console.log("Welcome");
