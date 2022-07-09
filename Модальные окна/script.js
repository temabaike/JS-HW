const openBtn = document.querySelector(".btn");
const container = document.querySelector(".container");
const closeBtn = document.querySelector(".closebtn")
const closeOverlay = document.querySelector(".overlay");

const closeModal = () => {
  container.style.display = "none";
}

openBtn.addEventListener("click", function() {
  container.style.display = "block";
});

closeBtn.addEventListener("click", closeModal);

closeOverlay.addEventListener("click", closeModal);

window.addEventListener("keydown", function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});
