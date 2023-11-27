const container = document.querySelector(".container")
let n = parseInt(prompt("Enter a whole number between 1 and 32"));

for (let i = 1; i <= (n * n); i++) {
  if (n > 32) {
    break;
  } else {
  let singleBox = document.createElement("div");
  singleBox.classList.add("singleBox");
  singleBox.style.height = `${100 / n}%`;
  singleBox.style.width = `${100 / n}%`;
  container.appendChild(singleBox);
  }
};

let hoverBoxList = document.querySelectorAll(".singleBox");
for (const hoverBox of hoverBoxList) {
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "blue";
  });
};