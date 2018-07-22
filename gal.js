const imgCount = 100; // How many random demo images to get

const gridE = document.getElementById('images'); // The grid element
const modalE = document.getElementById('modal'); // The modal element
const modalImg = document.getElementById('modal-image'); // The modal image div
const coverE = document.getElementById('cover'); // Page cover element

// Init lazyloader
const loz = lozad();

let screenshots = []; // Array of image URLs
let toAdd = ''; // String of HTML housing images

// Add demo images to screenshot array
for (let i = 0; i < imgCount; i++) {
  screenshots.push(`https://picsum.photos/${randInt(250,1000)}/${randInt(250,1000)}/?random`);
}

// Add every image to the HTML string
for (let p of screenshots) {
  toAdd += `<div class="img lozad" data-background-image="${p}" onclick="openModal('${p}')"></div>\n`;
}

// Add the images HTML and start lazy loading
gridE.innerHTML = toAdd;
loz.observe();

function openModal(imageURL) {
  modalE.classList.add('shown');
  coverE.classList.add('shown');
  modalE.classList.remove('hidden');
  coverE.classList.remove('hidden');
  modalImg.style.backgroundImage = `url('${imageURL}')`;
}

function closeModal() {
  modalE.classList.add('hidden');
  coverE.classList.add('hidden');
  modalE.classList.remove('shown');
  coverE.classList.remove('shown');
}

function randInt(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}
