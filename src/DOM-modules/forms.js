import hideBtnImg from '../assets/close.svg';
import updateProjectSelectors from "./project-selector.js";
import { addTaskToTree } from '../to-do-modules/task-tree.js';
import { set } from 'date-fns';

const hideBtn = document.querySelectorAll('.close-modal-btn');
hideBtn.forEach(btn => btn.querySelector('img').src = hideBtnImg);

function showForm(modal) {
  updateProjectSelectors();
  modal.showModal();
}

function sendToTaskTree(form) {
  const formValues = readForm(form);
  const projectPos = formValues.targetProject
    ? formValues.targetProject.split(',').map(i => Number(i))
    : [];
  addTaskToTree(formValues, projectPos);
}

function readForm(form) {
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

export { showForm, sendToTaskTree };