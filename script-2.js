const radioButtons = document.querySelectorAll('input');

function changeBackgroundColor(event) {
  document.body.style.backgroundColor = event.currentTarget.value;
}

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', changeBackgroundColor);
});