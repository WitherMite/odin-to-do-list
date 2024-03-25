import hideBtnImg from '../assets/close.svg';
import updateTaskBoard from './DOM-handler.js';
import updateProjectSelector from "./project-selector.js";
import { set } from 'date-fns';
import { addTaskToTree } from '../to-do-modules/task-tree.js';

const modal = document.querySelector('.new-task-modal');
const form = modal.querySelector('form');
const hideBtn = modal.querySelector('.close-modal-btn');
const submitBtn = modal.querySelector('.submit-btn');

hideBtn.querySelector('img').src = hideBtnImg;

function showForm() {
  updateProjectSelector();
  modal.showModal();
  hideBtn.addEventListener('click', hideForm);
  submitBtn.addEventListener('click', submitForm);
}

function hideForm() {
  modal.close();
  hideBtn.removeEventListener('click', hideForm);
}

function submitForm(e) {
  e.preventDefault();
  if (!form.reportValidity()) return;

  const formValues = readForm();
  const projectPos = formValues.targetProject
    ? formValues.targetProject.split(',').map(i => Number(i))
    : [];
  addTaskToTree(formValues, projectPos);

  hideForm();
  form.reset();
  updateTaskBoard();
  submitBtn.removeEventListener('click', submitForm);
}

function readForm() {
  const date = form.querySelector('#date-due').value;
  const time = form.querySelector('#time-due').value;
  return {
    dueDate: joinDateStr(date, time),
    targetProject: form.querySelector('#project-select').value,
    name: form.querySelector('#name').value,
    description: form.querySelector('#desc').value,
    priority: form.querySelector('#pri').value,
    asProj: form.querySelector('#project-option').checked,
  };
}

function joinDateStr(date, time) {
  if (date) return date + (time ? 'T' + time : '');
  if (time) {
    const [hours, minutes] = time.split(':');
    return set(new Date(), {
      hours,
      minutes,
    });
  }
  return '';
}

export { showForm };