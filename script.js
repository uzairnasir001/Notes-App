let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", ()=>{
   // Create div
const note = document.createElement("div");
note.className = "note";

// Create paragraph
const para = document.createElement("p");
para.contentEditable = "true";
para.className = "input-box";

// Create image
const img = document.createElement("img");
img.src = "images/delete.png";
img.alt = "Delete";
img.className = "delete-btn";

// Append elements
note.appendChild(para);
note.appendChild(img);

// Add note to notes container
notesContainer.appendChild(note);
});

notesContainer.addEventListener("click", (e)=>{
   if(e.target.classList.contains("delete-btn")){
      e.target.parentElement.remove();
      updateStorage();
   }else if(e.target.tagName === "P"){
    note= document.querySelectorAll(".input-box");
    note.forEach(nt => {
        nt.onkeyup = function(){
            updateStorage();
        }
    });
   }
});

document.addEventListener("keydown", event =>{
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});


