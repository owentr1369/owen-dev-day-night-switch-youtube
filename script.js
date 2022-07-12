const body = document.querySelector("body");
const cb1 = document.getElementById("cb1");

cb1.addEventListener("click", () => {
  body.classList.toggle("day-background");
});
