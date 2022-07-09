const openBtn = document.querySelector(".btn");
const container = document.querySelector(".container");
const closeBtn = document.querySelector(".closebtn")
const closeOverlay = document.querySelector(".overlay");

const toggleModal = (showModal) => {
  if (showModal) {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}

openBtn.addEventListener("click", function() {
  toggleModal(true)
});

closeBtn.addEventListener("click", function() {
  toggleModal(false)
});

closeOverlay.addEventListener("click", function() {
  toggleModal(false)
});

window.addEventListener("keydown", function(e) {
  if(e.keyCode === 27) {
    toggleModal(false) 
  }
});