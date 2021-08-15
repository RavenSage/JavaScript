const link = document.querySelector(".link");

link.addEventListener("mouseover", (e) => {
  e.preventDefault();
  console.log("Link clicked");
});

window.addEventListener("resize", (e) => console.log("resize"));
