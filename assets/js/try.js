
// Get the modal
var modal = document.getElementById("myModal");
var ndmodal = document.getElementById("ndmodal");

//Getting the button that opens then the modal
var openButton = document.getElementById("openButton");

//Getting the button that opens then the modal
var closeBtn = document.getElementById("closeBtn");

// When the user clicks the button, open the modal 
openButton.onclick = function () {
}
openButton.addEventListener("click", () => {
  // modal.style.display = "block" 
  ndmodal.style.display = "block"
  // ndmodal.style.position = "fixed"
  // ndmodal.classList.remove("d-none");
  // ndmodal.classList.add("d-block");
})


// Function that removes the modal i.e makes the display none

closeBtn.addEventListener("click", () => {
  ndmodal.style.display = "none";
})

