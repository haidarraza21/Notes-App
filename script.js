const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');


function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    attachEventListeners(); 
}
showNotes();


function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


function attachEventListeners() {
    notes = document.querySelectorAll(".input-box");

    notes.forEach(note => {

        note.addEventListener("keyup", updateStorage);

       
        const deleteImg = note.querySelector("img");
        if (deleteImg) {
            deleteImg.addEventListener("click", function () {
                note.remove();
                updateStorage();
            });
        }
    });
}


createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    notesContainer.appendChild(inputBox).appendChild(img);

    updateStorage();
    attachEventListeners();
});
