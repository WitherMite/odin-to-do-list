import updateTaskBoard from './DOM-handler.js';
import { showForm, sendToTaskTree } from './forms.js';

const modal = document.querySelector('.new-task-modal');
const form = modal.querySelector('form');
const submitBtn = modal.querySelector('.submit-btn');
const hideBtn = modal.querySelector('.close-modal-btn');

export default function showNewTaskForm() {
  submitBtn.addEventListener('click', submitForm);
  hideBtn.addEventListener('click', hideForm);
  showForm(modal);
}

function hideForm() {
  modal.close()
}

function submitForm(e) {
  e.preventDefault();
  if (!form.reportValidity()) return;

  sendToTaskTree(form);

  modal.close();
  form.reset();
  updateTaskBoard();
  submitBtn.removeEventListener('click', submitForm);
  hideBtn.removeEventListener('click', hideForm);
}