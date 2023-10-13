const openModalButton = document.querySelector('[data-action="open-modal"]');
const closeModalButton = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.backdrop');

function openModal() {
  document.body.classList.add('show-modal');
}

function closeModal() {
  document.body.classList.remove('show-modal');
}

openModalButton.addEventListener('click', openModal);

closeModalButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', (event) => {
  if (event.currentTarget === backdrop) {
    closeModal();
  }
});