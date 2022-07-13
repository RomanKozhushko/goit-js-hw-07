import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Створюємо шаблонний рядочок!
const galleryOfImg = ({ preview }) => `<li><img src="${preview}"><class = gallery__image></li>`;
// Створюємо акумулятор
const galleryMarkup = galleryItems.reduce((acc, img) => acc + galleryOfImg(img), "");
//Шукаємо  class = gallery
const galleryList = document.querySelector(".gallery");
//Додаємо шаблоні рядки
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
