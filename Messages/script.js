const author = document.getElementById('author');

const password = document.getElementById('password');

const message = document.getElementById('message');

const sendButton = document.getElementById('send');

const form = document.querySelector('.form');

const messages = [];

function renderMessage() {
messages.forEach((item) => {

  const text = ` <div class="sms">
  <h3>${item.author}</h3>
  <p>${item.message}</p>
  <p>${item.date}</p>
</div>`

form.innerHTML +=(text);
});
}

function reset(inputMessage, inputAuthor, inputPassword) {
  inputMessage.value = '';
  inputAuthor.value = '';
  inputPassword.value = '';
}

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  const sendMessage = message.value;
  const sendAuthor = author.value;

  if(message.value == false || author.value == false) {
    alert('Заполните все поля')
    return false
  }

  if(password.value.length > 3){

  const newMessage = {
    author: sendAuthor,
    message: sendMessage,
    date: new Date().toDateString()
  }

  messages.push(newMessage);

  renderMessage();
  reset(message, author, password);
} else {
  alert("Пароль должен быть не меньше 4 символов")
}})