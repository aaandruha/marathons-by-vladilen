console.log("working");
const modal = document.querySelector("#modal");
const content = document.querySelector("#content");
const backdrop = document.querySelector("#backdrop");
const progress = document.querySelector("#progress");

content.addEventListener("click", openCard);
backdrop.addEventListener("click", closeModal);

const technologies = [
  { title: "html", description: "html desctiption", type: "html", done: true },
  { title: "css", description: "css desctiption", type: "css", done: false },
  {
    title: "javascript",
    description: "javascript desctiption",
    type: "javascript",
    done: false,
  },
  { title: "Git", description: "Git desctiption", type: "git", done: true },
  {
    title: "React1",
    description: "Reactdesctiption",
    type: "react",
    done: false,
  },
];

function openCard() {
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

function init() {
  renderCards();
  renderProgress();
}

function renderCards() {
  if (technologies.length === 0) {
    content.innerHTML = '<p class="empty">Технологий пока нет.</p>';
  } else {
    content.innerHTML = technologies.map(toCard).join("");
  }
}

function renderProgress() {
  const percent = computeProgressPercent();
}

function ComputeProgressPercent() {
  return;
}

function toCard(tech) {
  let doneClass = tech.done ? "done" : "";

  return `<div class="card ${doneClass}">
  <h3>${tech.title}</h3>
</div>
`;
}

init();
