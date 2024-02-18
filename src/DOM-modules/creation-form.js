const modal = document.querySelector('.new-task-modal');
const hideBtn = modal.querySelector('.close-modal-btn');
const submitBtn = modal.querySelector('.submit-btn');

function updateFormButtons() {
  const btns = document.querySelectorAll('.new-task-btn');
  btns.forEach(btn => btn.addEventListener('click', showModal));
}

function showModal() {
  modal.showModal();
  hideBtn.addEventListener('click', hideModal);
  submitBtn.addEventListener('click', submitForm);
}

function hideModal() {
  modal.close();
  hideBtn.removeEventListener('click', hideModal);
}

function submitForm(e) {
  e.preventDefault();
  // read form
  hideModal();
}

export { updateFormButtons };