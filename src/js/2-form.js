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

form.addEventListener('submit', handleButton);
populationDataInp();

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
});

function populationDataInp() {
  const saved = JSON.parse(localStorage.getItem(KEY)) || {};
  if (saved.message) {
    textArea.value = saved.message;
    formData.message = saved.message;
  }

  if (saved.email) {
    input.value = saved.email;
    formData.email = saved.email;
  }
}

function handleButton(event) {
  event.preventDefault();

  const MesValue = textArea.value.trim();
  const emailValue = input.value.trim();

  if (MesValue === '' || emailValue === '') {
    alert('Fill please all fields');
  } else {
    console.log({ email: emailValue, message: MesValue });
    formData.message = '';
    formData.email = '';
    localStorage.setItem(KEY, JSON.stringify(formData));
    localStorage.removeItem(KEY);
    form.reset();
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
