import updateTaskBoard from './DOM-handler.js';
import { addTaskToTree } from '../to-do-modules/task-tree.js';
import { showForm, joinDateStr } from './forms.js';

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

function sendToTaskTree() {
  const formValues = readForm();
  const projectPos = formValues.targetProject
    ? formValues.targetProject.split(',').map(i => Number(i))
    : [];
  addTaskToTree(formValues, projectPos);
}

function readForm() {
  const date = form.querySelector('.task-date').value;
  const time = form.querySelector('.task-time').value;
  return {
    dueDate: joinDateStr(date, time),
    targetProject: form.querySelector('.project-selector').value,
    name: form.querySelector('.task-name').value,
    description: form.querySelector('.task-desc').value,
    priority: form.querySelector('.task-pri').value,
    asProj: form.querySelector('.task-project').checked,
  };
}

function submitForm(e) {
  e.preventDefault();
  if (!form.reportValidity()) return;

  sendToTaskTree();

  modal.close();
  form.reset();
  updateTaskBoard();
  submitBtn.removeEventListener('click', submitForm);
  hideBtn.removeEventListener('click', hideForm);
}