const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");

box1.addEventListener("click", changeBox1);
box2.addEventListener("click", changeBox2);
box3.addEventListener("click", changeBox3);

function changeBox1() {
  box1.classList.add("circle");
}

function changeBox2() {
  box2.classList.add("circle");
  box2.classList.remove("orange");
  box2.classList.add("blue");
}
function changeBox3() {
  box3.classList.add("circle");
  box3.classList.remove("green");
  box3.classList.add("orange");
}
