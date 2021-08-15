//Selecting the required elements
const modal = document.querySelector("#modal");
const openButton = document.querySelector("#open-modal-btn");
const closeButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

//Add EventListener for openButton  to add the class "open" to the modal
openButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

//Add EventListener for closeButton to remove the class from the modal
closeButton.addEventListener("click", closeModal);

//Add EventListener to the overlay that removes the class "open" from model and the overlay
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.remove("open");
  overlay.remove("open");
}
