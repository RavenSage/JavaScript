localStorage.setItem("Name", "Krishnasai");
localStorage.setItem("Age", "25");

sessionStorage.setItem("Name", "Kagura");
sessionStorage.setItem("Age", "22");

console.log(localStorage.getItem("Name"));

const date = new Date(9999, 0, 1).toUTCString();
const pastDate = new Date(1999, 0.1).toUTCString();
document.cookie = ` name=sai; expires = ${date}`;
document.cookie = `age=25; expires=${date}`;
console.log(document.cookie);
//to remove a cookie
/* document.cookie = `name=; expires=${pastDate}`;
console.log(document.cookie); */
