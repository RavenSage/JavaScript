/* function tryCatch() {
  try {
    let obj = undefined;
    console.log(obj.a);
    console.log(
      "If the previous line of code throws an exception you'll never see this"
    );
  } catch (error) {
    console.log('I caught an exception:' + error.message);
  } finally {
    console.log('always executed');
  }
  console.log('my code is still working');
}

tryCatch(); */

function performCalculation(obj) {
  if (!obj.hasOwnProperty('b')) {
    throw new Error('object missing b property');
  }
  return 6;
}

function performHigherLevelOperation() {
  let obj = {};
  let value = 0;
  try {
    value = performCalculation(obj);
  } catch (error) {
    console.log(error.message);
  }
  if (value == 0) {
  }
}

performHigherLevelOperation();
