console.log("test main.js")

//This is the reference to the DOM:
domBuilder.appendInputForm();
let saveBtn = document.querySelector(".lego__save");
//console.log(saveBtn);     Testing functionality
//MAKE SURE THE BUTTON WORKS ON THE DOM BEFORE YOU TRY TO GET A REFERENCE TO IT.

//This is the reference to the Button:
saveBtn.addEventListener("click", eventListeners.handleFormSubmission);