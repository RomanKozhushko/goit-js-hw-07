import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Створюємо шаблонний рядочок!
const galleryOfImg = ({ preview, description }) => `<img src="${preview}" alt="${description}" class = "gallery__image">`;
// Створюємо акумулятор
const galleryMarkup = galleryItems.reduce((acc, img) => acc + galleryOfImg(img), "");
//Шукаємо  class = gallery
const galleryList = document.querySelector('.gallery');
//Додаємо шаблоні рядки
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);


//Делегування кліків
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onclick);

//Блокування вільної зони DIV
function onclick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.target = galleryOfImg = ({ original, description }) => `<img src="${original}" alt="${description}" class = "gallery__image">`;
    console.log(event.target.nodeName )
}



