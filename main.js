const container = document.querySelector(".container")

const newGridBtn = document.querySelector("#newGridBtn");
newGridBtn.addEventListener("click", () => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  };
  let n = parseInt(prompt("Enter a whole number between 1 and 64"));
  for (let i = 1; i <= (n * n); i++) {
    if (n > 64) {
      break;
    } else {
    let singleBox = document.createElement("div");
    singleBox.classList.add("singleBox");
    singleBox.style.height = `${100 / n}%`;
    singleBox.style.width = `${100 / n}%`;
    container.appendChild(singleBox);
    }
  };
});

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

const hoverEffectBtnOn = document.querySelector("#hoverEffectBtnOn");

hoverEffectBtnOn.addEventListener("click", function hoverEffectBtnOn() {
  let hoverBoxList = document.querySelectorAll(".singleBox");
  for (const hoverBox of hoverBoxList) {
    hoverBox.addEventListener("mouseover", function randomRgbBackgroundColor() {
      hoverBox.style.backgroundColor = `rgb(${randomInteger(255)},${randomInteger(255)},${randomInteger(255)})`;
    });
  };
});

const hoverEffectBtnOff = document.querySelector("#hoverEffectBtnOff");

hoverEffectBtnOff.addEventListener("click", () => {
  let hoverBoxList = document.querySelectorAll(".singleBox");
  for (const hoverBox of hoverBoxList) {
    hoverBox.style.backgroundColor = "white";
    hoverBox.addEventListener("mouseover", function whiteBackgroundColor() {
      hoverBox.style.backgroundColor = "white";
    });
  };
});