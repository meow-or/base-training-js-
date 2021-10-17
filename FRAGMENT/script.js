const pool = document.querySelector(".pool");

const fragment = document.createDocumentFragment(); // Создаём "коробочку"

for (let i = 0; i < 12; i++) {
  const newElement = document.createElement("div");
  newElement.classList.add("el");
  newElement.innerHTML = "<span>" + i + "</span>";

  fragment.appendChild(newElement); // Складываем созданные элементы в "коробочку"
}

pool.appendChild(fragment); // И только в конце отрисовываем всё из "коробочки"
