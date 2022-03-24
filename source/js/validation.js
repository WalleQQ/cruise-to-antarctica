const sendContactsForm = document.querySelector('form');
const nameInput = sendContactsForm.querySelector('input[type=text]');
const telInput = sendContactsForm.querySelector('input[type=tel]');
const emailInput = sendContactsForm.querySelector('input[type=email]');

nameInput.addEventListener('input', () => {
  const value = nameInput.value;
  const nameRegExp = /^[a-zA-Zа-яА-Я]+/g;
  if (nameRegExp.test(value) === false) {
    nameInput.setCustomValidity('Введите имя русскими или английскими буквами');
  } else {
    nameInput.setCustomValidity('');
  }
});

telInput.addEventListener('input', () => {
  const value = telInput.value;
  const telRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  if (telRegExp.test(value) === false) {
    telInput.setCustomValidity('Введите номера телефона');
  } else {
    telInput.setCustomValidity('');
  }
  telInput.reportValidity();
});

emailInput.addEventListener('input', () => {
  const value = emailInput.value;
  const mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (mailRegExp.test(value) === false) {
    emailInput.setCustomValidity('Введите корректный email');
  } else {
    emailInput.setCustomValidity('');
  }
  emailInput.reportValidity();
});

sendContactsForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  fetch('https://echo.htmlacademy.ru/', {
    method: 'POST',
  })
    .then((response) => {
      if (response.ok) {
        alert('Форма успешно отправлена');
      } else {
        alert('Произошла ошибка отправки');
      }
    })
    .catch(() => {
      alert('Произошла ошибка отправки');
    });
  evt.target.reset();
});
