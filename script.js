const job = document.querySelector(".job");
const text1 = "Web Developer";
const text2 = "Quality Assurance";
job.textContent = text1;

function myJob() {
  if (job.textContent === "Web Developer") {
    return (job.textContent = text2);
  }

  return (job.textContent = text1);
}

setInterval(() => {
  myJob();
}, 5000);

let firstIndex = 0;
function slideAuto() {
  setTimeout(slideAuto, 2000);
  const img = document.querySelectorAll(".about-p");
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  firstIndex++;
  if (firstIndex > img.length) {
    firstIndex = 1;
  }
  img[firstIndex - 1].style.display = "inline-block";
}
slideAuto();

const fade = document.querySelector(".fade-in");
const fadeLeft = document.querySelector(".about-picture");
const fadeRight = document.querySelector(".about-me");
const windowInHeight = (window.innerHeight / 5) * 4;
const rect = fade.getBoundingClientRect().top;

console.log(windowInHeight);

window.addEventListener("scroll", () => {
  console.log(rect);
  if (rect > windowInHeight) {
    fade.style.opacity = 1;
    fadeLeft.style.transform = "translateX(0)";
    fadeRight.style.transform = "translateX(0)";
  } else if (rect < windowInHeight) {
    fade.style.opacity = 1;
    fadeLeft.style.transform = "translateX(0)";
    fadeRight.style.transform = "translateX(0)";
  } else {
    fade.style.opacity = 0;
  }
});
