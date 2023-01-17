let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let images = document.querySelectorAll("#carousel img");
let currentImage = 0;

function autoSlideShow() {
    images[currentImage].classList.remove("active");
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    images[currentImage].classList.add("active");
}


setInterval(autoSlideShow, 4000);

prevBtn.addEventListener("click", function () {
  images[currentImage].classList.remove("active");
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  images[currentImage].classList.add("active");
});

nextBtn.addEventListener("click", function () {
  images[currentImage].classList.remove("active");
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  images[currentImage].classList.add("active");
});





