// task 1

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");


nameInput.addEventListener('input', (event) => {
    const inputValue = event.currentTarget.value;

    if (inputValue === '') {
      nameOutput.textContent = 'незнайомець';
    } else {
      nameOutput.textContent = inputValue;
    }
  });


//   task 2


const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const desiredLength = parseInt(validationInput.getAttribute('data-length'));
  const inputLength = validationInput.value.length;

  if (inputLength === desiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
