import getPaymentSystemSelector from './getPaymentSystemSelector';
import validateCardNumber from './validateCardNumber';

const validateBtn = document.querySelector('.validate-button');
const inputField = document.querySelector('.card-number-input');
const messageField = document.querySelector('.error-message-container');

function refreshVidget() {
  messageField.innerHTML = '';
  const activeCard = document.querySelector('.active');
  if (activeCard) {
    activeCard.classList.remove('active');
  }
}

validateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  refreshVidget();

  const num = inputField.value;
  const messageEl = document.createElement('p');
  if (validateCardNumber(num) && num !== '') {
    const selector = getPaymentSystemSelector(num);
    const card = document.querySelector(selector);
    card.classList.add('active');
    messageEl.className = 'valid-message';
    messageEl.textContent = 'Card number VALID';
    messageField.appendChild(messageEl);
  } else {
    messageEl.className = 'error-message';
    messageEl.textContent = 'Invalid card number';
    messageField.appendChild(messageEl);
  }
});

inputField.addEventListener('input', () => {
  refreshVidget();
});
