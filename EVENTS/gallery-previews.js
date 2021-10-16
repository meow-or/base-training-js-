var pictures = [
  "gallery-tomato/tomato-red-large.jpg",
  "gallery-tomato/tomato-yellow-large.jpg",
  "gallery-tomato/tomato-strange-large.jpg",
];

var previews = document.querySelectorAll(".gallery__picture-preview");

var fullPhoto = document.querySelector(".full-picture");

var clickPictureHandler = function (preview, picture) {
  preview.addEventListener("click", function () {
    fullPhoto.src = picture;
  });
};

for (var i = 0; i < pictures.length; i++) {
  clickPictureHandler(previews[i], pictures[i]);
}

/* Техническое задание

Мяу! Нужно оживить галерею с фотографиями товаров.

В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').

После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же, как и в миниатюре, только большего размера.

Пути к полноразмерным фотографиям находятся в массиве pictures. Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.

*/
