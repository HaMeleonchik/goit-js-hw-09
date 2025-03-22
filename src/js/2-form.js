const formData = {
  email: '',
  message: '',
};
const DataJSON = JSON.stringify(formData);
const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textArea = form.querySelector('textarea');
const button = form.querySelector('button');

input.addEventListener('input', handleInput);
textArea.addEventListener('input', handleTextarea);
form.addEventListener('submit', handleButton);
populationDataInp();

function handleTextarea(event) {
  const message = event.target.value;
  formData.message = message;
  localStorage.setItem(KEY, JSON.stringify(formData));
}
function handleInput(event) {
  const email = event.target.value;
  formData.email = email;
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function populationDataInp() {
  const saved = JSON.parse(localStorage.getItem(KEY)) || {};
  if (saved.message) {
    textArea.value = saved.message;
  }

  if (saved.email) {
    input.value = saved.email;
  }
  formData.message = saved.message;
  formData.email = saved.email;
}

function handleButton(event) {
  event.preventDefault();

  const MesValue = textArea.value
    .split(' ')
    .map(word => word.trim())
    .filter(word => word)
    .join(' ');

  const emailValue = input.value
    .split(' ')
    .map(word => word.trim())
    .filter(word => word)
    .join(' ');

  if (MesValue === '' || emailValue === '') {
    alert('Fill please all fields');
  } else {
    console.log({ email: emailValue, message: MesValue });
    formData.message = '';
    formData.email = '';
    localStorage.setItem(KEY, JSON.stringify(formData));
    localStorage.removeItem(KEY);
    event.target.reset();
  }
}
//style
input.addEventListener('focus', handleFocus);
function handleFocus() {
  input.setAttribute('placeholder', 'Type arae');
}
input.addEventListener('focusout', handleFocusout);
function handleFocusout() {
  input.setAttribute('placeholder', '');
}
