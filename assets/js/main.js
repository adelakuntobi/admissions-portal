
// Get the modal
var modal = document.getElementById("myModal");

//Getting the button that opens then the modal
var openButton = document.getElementById("openButton");

//Getting the button that opens then the modal
var closeBtn = document.getElementById("closeBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByTagName('span')[0];

//On click of the close icon, the modal dissappears
span.addEventListener('click',displayModal);
// When the user clicks the button, open the modal 
openButton.onclick = function() {
  modal.style.display = "block";
}

// Function that removes the modal i.e makes the display none
function displayModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}