import updateTaskBoard from './DOM-handler.js';
import { format, isValid } from 'date-fns';
import { getTaskFromTree } from '../to-do-modules/task-tree.js';
import { showForm, joinDateStr } from './forms.js';

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
  form.querySelector('#move-task').checked = false;
  moveTaskBtn.addEventListener('click', toggleMoveTask);
  showForm(modal);
  selectParentOpt(taskPos);
}

function writeTaskToForm(position) {
  const task = getTaskFromTree(position);

  form.querySelector('.task-name').value = task.name;
  form.querySelector('.task-desc').value = task.description;
  form.querySelector('.task-pri').value = task.priority;
  form.querySelector('.task-project').checked = !!task.tasks;

  const date = isValid(task.dueDate) 
    ? format(task.dueDate, 'yyyy-MM-dd') 
    : '';
  const time = isValid(task.dueDate)
    ? format(task.dueDate, 'HH:mm')
    : '';
  form.querySelector('.task-date').value = date;
  form.querySelector('.task-time').value = time;
}

function selectParentOpt(position) {
  const copyPos = [...position];
  copyPos.pop();
  const parentPos = copyPos.join(',');
  const options = form.querySelectorAll('option');

  options.forEach(opt => {
    console.log(opt.value);
    if (opt.value === parentPos) opt.setAttribute('selected', '');
  });
}

function hideForm() {
  modal.close();
}

function toggleMoveTask() {
  moveTaskSel.classList.toggle('hidden');
}

// function sendToTaskTree() {
//   const formValues = readForm(form);
//   const taskPos = formValues.position;
//   editTaskInTree(formValues, taskPos);
// }

// function readForm() {
//   const date = form.querySelector('.task-date').value;
//   const time = form.querySelector('.task-time').value;
//   return {
//     dueDate: joinDateStr(date, time),
//     targetProject: form.querySelector('.project-selector').value,
//     name: form.querySelector('.task-name').value,
//     description: form.querySelector('.task-desc').value,
//     priority: form.querySelector('.task-pri').value,
//     asProj: form.querySelector('.task-project').checked,
//     isMove: form.querySelector('#move-task').checked
//   };
// }

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