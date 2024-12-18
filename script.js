const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = items.length - 1;  // Loop to the last slide
  } else if (index >= items.length) {
    currentIndex = 0;  // Loop to the first slide
  }

  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex--;
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  showSlide(currentIndex);
});
