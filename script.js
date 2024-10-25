'use strict';
// define 
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".show-modal");

// Function to close the modal and overlay
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}




// make open modal
for (let i=0;i<showModal.length;i++){
    showModal[i].addEventListener
        ("click",function () {
            modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
            
        });
}

// Attach the closeModal function to both the button and overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


// handle esc button
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {

        closeModal();
    }
});



