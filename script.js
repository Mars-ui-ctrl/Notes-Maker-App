const addButton = document.querySelector(".add-btn");
const dltButton = document.querySelector(".dlt-btn");
const notes = document.querySelector(".notes-content");
const notesContainer = document.querySelector(".all-notes");
const popSound = document.querySelector(".pop-sound");
const wooshSound = document.querySelector(".woosh-sound");
const keySound = document.querySelector(".keysound");


addButton.addEventListener("click", () => {
  const newNote = notes.cloneNode(true);
  newNote.style.display = "block";


  playWooshSound(); // instead of wooshSound.play();



  const deleteBtn = newNote.querySelector(".dlt-btn");

  deleteBtn.addEventListener("click", () => {
    newNote.remove();

    wooshSound.pause();
    
    playPopSound(); // instead of popSound.play();


  });
  addTypingSoundTo(newNote);

  notesContainer.appendChild(newNote);
});

keySound.volume = 0.5;
keySound.playbackRate = 1.2;
function addTypingSoundTo(note) {
  const inputArea = note.querySelector(".input-area");

  inputArea.addEventListener("keydown", playTypingSound);
}

function playTypingSound() {
  const sound = keySound.cloneNode();  // fresh copy
  sound.volume = 0.5;
  sound.playbackRate = 1.2;
  sound.play();  // always plays from start
}
function playWooshSound() {
  const woosh = wooshSound.cloneNode();
  woosh.volume = 0.6;
  woosh.play();
}
function playPopSound() {
  const pop = popSound.cloneNode();
  pop.volume = 0.5;
  pop.play();
}
