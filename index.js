const romanCharacter = document.getElementById("roman-character");
const hangulCharacter = document.getElementById("hangul-character");
const hanjaCharacter = document.getElementById("hanja-character");
const allCharacters = [romanCharacter, hangulCharacter, hanjaCharacter];

const timers = [];

function pauseAll() {
  allCharacters.forEach((character) => {
    character.style.animationPlayState = "paused";
  });
  timers.forEach((timer) => clearTimeout(timer));
}

function resumeAll() {
  allCharacters.forEach((character) => {
    timers.push(
      setTimeout(() => {
        character.style.animationPlayState = "running";
      }, 333)
    );
  });
}

allCharacters.forEach((character) => {
  character.addEventListener("mouseover", () => pauseAll());
  character.addEventListener("mouseleave", () => resumeAll());
});
