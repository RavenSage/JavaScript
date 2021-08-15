function mark() {
  console.log("hai 1");
  console.log("hai 2");
  setTimeout(() => {
    console.log("hai 4"), 0;
  });
  new Promise((resolve, reject) => {
    resolve("hi promise");
  }).then((m) => console.log(m));
  setTimeout(() => {
    console.log("hai 3"), 10;
  });
  console.log("hai 5");
}
mark();

console.log("hai 6");
