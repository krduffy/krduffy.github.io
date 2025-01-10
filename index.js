const romanCharacter = document.getElementById("roman-character");
const hangulCharacter = document.getElementById("hangul-character");
const hanjaCharacter = document.getElementById("hanja-character");
const allCharacters = [romanCharacter, hangulCharacter, hanjaCharacter];

function pauseAll() {
  allCharacters.forEach((character) => {
    character.style.animationPlayState = "paused";
  });
}

function resumeAll() {
  allCharacters.forEach((character) => {
    character.style.animationPlayState = "running";
  });
}

allCharacters.forEach((character) => {
  character.addEventListener("mouseover", () => pauseAll());
  character.addEventListener("mouseleave", () => resumeAll());
});
