/* const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent.addEventListener('click', (e) => {
  console.log('grandparent Bubble');
});*/

grandparent.addEventListener(
  "click",
  (e) => {
    console.log("grandparent capture");
  },
  { capture: true }
);

/* parent.addEventListener(
  'click',
  (e) => {
    // e.stopPropagation();
    console.log('parent Bubble');
  }
  // { once: true }
); */

/* parent.addEventListener(
  'click',
  (e) => {
    // e.stopPropagation();
    console.log('parent capture');
  },
  { capture: true }
);
 */
/* child.addEventListener('click', (e) => {
  console.log('child Bubble');
});
 */
/* child.addEventListener(
  'click',
  (e) => {
    // e.stopPropagation();
    console.log('child capture');
  },
  { capture: true }
); */

/* document.addEventListener('click', (e) => {
  console.log('document Bubble');
});

document.addEventListener(
  'click',
  (e) => {
    console.log('document capture');
  },
  { capture: true }
);
 */

const divs = document.querySelector("div");

addGlobalEventListener("click", "div", (e) => {
  console.log("hai");
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);
