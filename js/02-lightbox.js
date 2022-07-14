import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Створюємо шаблонний рядочок!
const galleryOfImg = ({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
  <img
  class="gallery__image"
  data-source="${original}" 
  src="${preview}" 
  alt="${description}" />
</a>`

// Створюємо акумулятор
const galleryMarkup = galleryItems.reduce((acc, img) => acc + galleryOfImg(img), "");
//Шукаємо  class = gallery
const galleryList = document.querySelector('.gallery');
//Додаємо шаблоні рядки
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
//Делегування кліків
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onclick);

function onclick(event) {
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();
    const onclick = new SimpleLightbox(".gallery a", {
        // captionType : "alt",
        captionsData: "alt",
        // docClose: false,
        // close : false,
        captionDelay: 250,
        animationSpeed: 200,
        maxZoom: 5,
    })
};

//     event.preventDefault();
//     const onclick = new SimpleLightbox(".gallery a", {
//         // captionType : "alt",
//         captionsData: "alt",
//         // docClose: false,
//         // close : false,
//         captionDelay: 250,
//         animationSpeed: 200,
//         maxZoom: 5,
