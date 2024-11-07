document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

galleryItems.forEach((item, index) => {
item.addEventListener('click', () => {
modal.style.display = 'block';
modalImg.src = item.src;
currentIndex = index;
});
});

closeBtn.addEventListener('click', () => {
modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
if (e.target === modal) {
modal.style.display = 'none';
}
});

prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
modalImg.src = galleryItems[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % galleryItems.length;
modalImg.src = galleryItems[currentIndex].src;
});

let startX = 0;

modal.addEventListener('touchstart', (e) => {
startX = e.touches[0].clientX;
});

modal.addEventListener('touchend', (e) => {
const endX = e.changedTouches[0].clientX;
if (startX > endX + 50) {
// Swipe left
currentIndex = (currentIndex + 1) % galleryItems.length;
} else if (startX < endX - 50) {
// Swipe right
currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
}
modalImg.src = galleryItems[currentIndex].src;
});
});