var cardsData = [
  {
    isAvailable: true,
    imgUrl: "device/item-1.jpg",
    text: "Селфи-палка для начинающих",
    price: 200,
    isSpecial: false,
  },
  {
    isAvailable: false,
    imgUrl: "device/item-2.jpg",
    text: "Профессиональная селфи-палка",
    price: 1500,
    isSpecial: false,
  },
  {
    isAvailable: true,
    imgUrl: "device/item-3.jpg",
    text: "Непотопляемая селфи-палка",
    price: 2500,
    isSpecial: false,
  },
  {
    isAvailable: true,
    imgUrl: "device/item-4.jpg",
    text: "Селфи-палка «Следуй за мной»",
    price: 4900,
    isSpecial: true,
    specialPrice: 100,
  },
];

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (product) {
  var listItem = makeElement("li", "product");

  var title = makeElement("h2", "product__title", product.text);
  listItem.appendChild(title);

  var picture = makeElement("img", "product__image");
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  var price = makeElement("p", "product__price", product.price);
  listItem.appendChild(price);

  var availabilityClass = "product--available";
  if (!product.isAvailable) {
    availabilityClass = "product--unavailable";
  }
  listItem.classList.add(availabilityClass);

  if (product.isSpecial) {
    listItem.classList.add("product--special");
    var specialPrice = makeElement(
      "p",
      "product__special-price",
      product.specialPrice
    );
    listItem.appendChild(specialPrice);
  }

  return listItem;
};

var cardList = document.querySelector(".products");

for (var i = 0; i < cardsData.length; i++) {
  var cardItem = createCard(cardsData[i]);

  cardList.appendChild(cardItem);
}



// var cardsData = [
//   {
//     inStock: true,
//     imgUrl: 'gllacy/choco.jpg',
//     text: 'Сливочно-кофейное с кусочками шоколада',
//     price: 310,
//     isHit: true,
//     specialOffer: 'Двойная порция сиропа бесплатно!'
//   },
//   {
//     inStock: false,
//     imgUrl: 'gllacy/lemon.jpg',
//     text: 'Сливочно-лимонное с карамельной присыпкой',
//     price: 125,
//     isHit: false
//   },
//   {
//     inStock: true,
//     imgUrl: 'gllacy/cowberry.jpg',
//     text: 'Сливочное с брусничным джемом',
//     price: 170,
//     isHit: false
//   },
//   {
//     inStock: true,
//     imgUrl: 'gllacy/cookie.jpg',
//     text: 'Сливочное с кусочками печенья',
//     price: 250,
//     isHit: false
//   },
//   {
//     inStock: true,
//     imgUrl: 'gllacy/creme-brulee.jpg',
//     text: 'Сливочное крем-брюле',
//     price: 190,
//     isHit: false
//   }
// ];

// var makeElement = function (tagName, className, text) {
//   var element = document.createElement(tagName);
//   element.classList.add(className);
//   if(text) {
//     element.textContent = text;  
//   }
//   return element;
// }

// var renderCards = function(icecream) {
//   var listItem = makeElement('li', 'good');
  
//   var title = makeElement('h2', 'good__description', icecream.text);
//   listItem.appendChild(title);
  
//   var picture = makeElement('img', 'good__image');
//   picture.src = icecream.imgUrl;
//   picture.alt = icecream.text;
//   listItem.appendChild(picture);
  
//   var price = makeElement('p', 'good__price', `${icecream.price}₽/кг`);
//   listItem.appendChild(price);
  
//   var availabilityClass = 'good--available';
//   if (!icecream.inStock) {
//     availabilityClass = 'good--unavailable';  
//   }
  
//   listItem.classList.add(availabilityClass);
  
//   var hitClass = 'good--hit';
  
//   // if(icecream.isHit) {  
//   //   listItem.classList.add(hitClass);
//   // }
    
//     if(icecream.specialOffer) {
//       var specialOff = 'good__special-offer';
      
      
//       var special = makeElement('p', 'good__special-offer', icecream.specialOffer);
      
//       listItem.classList.add(hitClass);
      
//       listItem.appendChild(special);
//     }

    
//     return listItem;
// }

// var cardList = document.querySelector('.goods');

// for (var i = 0; i < cardsData.length; i++) {
//     var cardItem = renderCards(cardsData[i]);
    
//     cardList.appendChild(cardItem);
// }


/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/
