
// Get the modal
var modal = document.getElementById("myModal");

//Getting the button that opens then the modal
var openButton = document.getElementById("openButton");

//Getting the button that opens then the modal
var closeBtn = document.getElementById("closeBtn");

// When the user clicks the button, open the modal 
openButton.onclick = function () {
}
openButton.addEventListener("click", () => {
  modal.style.display = "block";
})


// Function that removes the modal i.e makes the display none

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

console.log("new");