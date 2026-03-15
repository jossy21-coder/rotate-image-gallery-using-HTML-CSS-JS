const imageContainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const img = document.getElementById("img");

let x = 0;
prevBtn.addEventListener("click", () => {
  x = x + 45;
  rotate();
});
nextBtn.addEventListener("click", () => {
  x = x - 45;
  rotate();
});
img.addEventListener("drag", () => {
  imageContainer.style.transform = `perspective(1000px) rotateY(${45}deg) rotateX(${45}deg)`;
});
function rotate() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}
