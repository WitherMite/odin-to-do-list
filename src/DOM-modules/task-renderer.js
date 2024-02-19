import { formatDistanceToNow, isValid } from "date-fns";
import dropdownImg from '../assets/down-arrow.svg';
import deleteImg from '../assets/delete.svg';
import editImg from '../assets/edit.svg';
const taskBoard = document.querySelector(".task-board");
const title = document.querySelector('.title');

export default function renderTasks(project) {
  title.textContent = project.name;
  clearTaskBoard();
  drawToNode(project, taskBoard);
}

function clearTaskBoard() {
  while (taskBoard.firstChild) taskBoard.removeChild(taskBoard.firstChild);
}

function drawToNode(project, targetNode, isInner = false) {
  project.tasks.forEach(task => {
    const taskHtml = createTaskHtml(task);
    if (isInner) trimInnerButton(taskHtml);

    writeTaskToHtml(task, taskHtml);

    if (task.tasks) drawToNode(task, taskHtml.taskList, true);
    targetNode.appendChild(taskHtml.container);
  });
}

function writeTaskToHtml(task, html) {
  html.container.classList.add(`priority${task.priority}`);
  html.name.textContent = task.name;
  html.description.textContent = task.description;
  if (isValid(task.dueDate)) {
    html.dueDate.textContent += formatDistanceToNow(
      task.dueDate,
      {addSuffix: true}
    );
  } else {
    html.dueDate.textContent = null;
  }
}

function trimInnerButton(taskHtml) {
  const btn = taskHtml.dropdown.querySelector('.dropdown-btn');
  taskHtml.dropdown.removeChild(btn);
}

function createTaskHtml(task) {
  const template = document.querySelector('#task-template');
  const html = template.content.cloneNode(true);

  setAllImgSrc(html, '.dropdown-img', dropdownImg);
  setAllImgSrc(html, '.delete-img', deleteImg);
  setAllImgSrc(html, '.edit-img', editImg);

  const taskHtml = {
    container: html.querySelector('.task'),
    name: html.querySelector('.name'),
    description: html.querySelector('.description'),
    dueDate: html.querySelector('.due-date'),
    dropdown: html.querySelector('.collapsible'),
  };

  if (task.tasks) {
    taskHtml.dropdown.appendChild(createInnerTaskList());
    taskHtml.taskList = taskHtml.dropdown.querySelector('.project-tasks');
  }
  return taskHtml;
}

function setAllImgSrc(parent, selector, file) {
  const images = parent.querySelectorAll(selector);
  images.forEach(img => img.src = file);
}

function createInnerTaskList() {
  const taskList = document.createElement('div');
  taskList.classList.add('project-tasks');
  const label = document.createElement('h2');
  label.textContent = 'Tasks:';
  taskList.appendChild(label);
  return taskList;
}