const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", function () {
    clearActiveClasses();
    slide.classList.add("active");
    const bgColor = slide.getAttribute("bg-color") || "#f2e6a4";
    console.log(bgColor);
    document.body.style.backgroundColor = bgColor;
  });
}

function clearActiveClasses() {
  for (const slide of slides) {
    slide.classList.remove("active");
  }
}
