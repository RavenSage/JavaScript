//Select all the Elements we need
const form = document.querySelector("#new-items");
const list = document.querySelector("#list");
const input = document.querySelector("#input-item");

//Add EventListener to add task when clicked submit and add a new element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //create a new item
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("task-list");
  //Adding item to the list
  list.appendChild(item);
  //clearing input
  input.value = "";
  //Setting EventListener to delete the task when clicked
  item.addEventListener("click", () => {
    // item.removeChild(item);
    item.remove();
  });
});
