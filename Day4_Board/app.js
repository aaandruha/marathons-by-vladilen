const board = document.querySelector("#board");
//let inputNumber = document.querySelector('[name="numbers"]');
const colors = [
  "#deda19",
  "#42b66c",
  "#6c53d6",
  "#8da0dd",
  "#e05510",
  "#1c4103",
  "#f13ce9",
  "#781829",
  "#dd9172",
  "#d6b6d4",
  "#4f76c5",
];
let SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);
  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// inputNumber.addEventListener("change", (event) => {
//   const numberSquares = event.target.value;
//   SQUARES_NUMBER = numberSquares || 500;
// });
