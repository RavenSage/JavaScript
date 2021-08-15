/* function promise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(`You waited ${time} milliseconds`);
      reject("Error occured");
    }, time);
  }, time);
}


promise (250).then (() => {
  console.log("1")
  promise(300)
}).then (()=> {
  console.log("2")
})

async function wait() {
  try {
    console.log("before Error");
    const m = await promise(300);
    console.log("after Error");
    console.log("1");
    console.log(m);
    const m1 = await promise(250);
    console.log("2");
    console.log(m1);
    const m2 = await promise(200);
    console.log("3");
    console.log(m2);
  } catch (error) {
    console.log("Hear");
    console.error(error);
  }
}

wait();
 */

function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), delay);
  });
}

function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Error occured"), delay);
  });
}

async function one() {
  try {
    value1 = await getValueWithDelay(5, 3000);
    console.log(value1);
    value2 = await getValueWithDelay(6, 300);
    console.log(value2);
    value4 = await getValueWithDelayError(5, 3000);
    console.log(value4);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("End of The Application");
  }
}

one();
