(function () {
  function handlerClick(message) {
    console.log('hello.....' + message);
  }

  let myButton = document.getElementById('myButton');
  myButton.addEventListener('click', function () {
    handlerClick('I am from life');
  });
})();
