console.log("linked");

const githubButton = document.getElementById("github-button");
const linkedInButton = document.getElementById("linkedin-button");
const mailToButton = document.getElementById("mailto-button");

githubButton.addEventListener("click", () => {
  window.open("https://github.com/krduffy");
});

linkedInButton.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/kieran-duffy-b9a445228/");
});

mailToButton.addEventListener("click", () => {
  const myEmail = "iwillfillinlater";
  window.open(`mailto:${myEmail}`);
});
