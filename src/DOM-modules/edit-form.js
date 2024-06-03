import updateTaskBoard from './DOM-handler.js';
import { showForm, sendToTaskTree } from './forms.js';

const modal = document.querySelector('.edit-task-modal');
const form = modal.querySelector('form');
const submitBtn = modal.querySelector('.submit-btn');
const hideBtn = modal.querySelector('.close-modal-btn');
const moveTaskBtn = modal.querySelector('#move-task');
const moveTaskSel = modal.querySelector('.edit-sel');

export default function showEditForm() {
  const taskPos = this.dataset.tree.split(',').map(i => Number(i));
  writeTaskToForm(taskPos);
  submitBtn.addEventListener('click', submitForm);
  hideBtn.addEventListener('click', hideForm);
  moveTaskSel.classList.add('hidden');
  moveTaskBtn.addEventListener('click', toggleMoveTask);
  showForm(modal);
}

function writeTaskToForm(position) {

}

function hideForm() {
  modal.close();
}

function toggleMoveTask() {
  moveTaskSel.classList.toggle('hidden');
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