/* const promise = new Promise((resolve, reject) => {
  const sum = 7 + 4
  if (sum === 11) {
    resolve("Success")
  } else {
    reject("Error")
  }
})

promise.then(m => {
  console.log(m)
}).catch(m => { console.error(m)}) */

/* promiseTimeout(300)
  .then(() => {
    console.log("1");
    return promiseTimeout(250);
  })
  .then(() => {
    console.log("2");
    return promiseTimeout(350);
  })
  .then(() => {
    console.log("3");
  });

function promiseTimeout(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
} */
/* 
const button = document.querySelector("button");

function promise(el, method) {
  return new Promise((resolve, reject) => {
    el.addEventListener(method, resolve);
  });
}

promise(button, "click").then((e) => {
  console.log("Clicked the button");
  console.log(e.type);
}); */

/* Promise.all([
  Promise.resolve(1),
  Promise.reject("Error on 2"),
  Promise.resolve(3),
])
  .then((m) => {
    console.log(m);
  })
  .catch((error) => {
    console.error(error);
  }); */

Promise.any([
  Promise.resolve(1),
  Promise.reject("Error on 2"),
  Promise.resolve(3),
])
  .then((m) => {
    console.log(m);
  })
  .catch((error) => {
    console.error(error);
  });

/* Promise.allSettled([
  Promise.resolve(1),
  Promise.reject("Error on 2"),
  Promise.resolve(3),
])
  .then((m) => {
    console.log(m);
  })
  .catch((error) => {
    console.error(error);
  });

  Promise.race([
    Promise.resolve(1),
    Promise.reject("Error on 2"),
    Promise.resolve(3),
  ])
    .then((m) => {
      console.log(m);
    })
    .catch((error) => {
      console.error(error);
    }); */
