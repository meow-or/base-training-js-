var messageTemplate = document.querySelector("#message-template").content;
var newMessageTemplate = messageTemplate.querySelector(".chat-message");

var messageContainer = document.querySelector(".chat-content");
var newMessageForm = document.querySelector(".chat-form");
var newMessageInput = newMessageForm.querySelector(".chat-form-input");

newMessageForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var messageText = newMessageInput.value;
  var message = newMessageTemplate.cloneNode(true);
  var messageTextContainer = message.querySelector(".chat-message-text");
  var deleteMessageBtn = message.querySelector(".chat-message-button");
  messageTextContainer.textContent = messageText;

  deleteMessageBtn.addEventListener("click", () => {
    message.remove();
  });

  messageContainer.appendChild(message);

  newMessageInput.value = "";
});

/* 

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/
