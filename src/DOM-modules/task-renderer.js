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

function drawToNode(project, targetNode, isInner = false, parents = []) {
  project.tasks.forEach((task, index) => {
    const taskHtml = createTaskHtml(task);
    if (isInner) trimInnerButton(taskHtml);

    const position = [ ...parents, index];
    writeTaskToHtml(task, taskHtml, position);
    if (task.tasks) drawToNode(task, taskHtml.taskList, true, position);
    targetNode.appendChild(taskHtml.container);
  });
}

function writeTaskToHtml(task, html, position) {
  html.container.classList.add(`priority${task.priority}`);
  html.name.textContent = task.name;
  html.description.textContent = task.description;
  if (isValid(task.dueDate)) {
    html.dueDate.textContent += formatDistanceToNow(
      task.dueDate,
      {addSuffix: true}
    );
    html.dueDate.title = task.dueDate.toLocaleString();
  } else {
    html.dueDate.textContent = null;
  }
  html.buttons.forEach(btn => btn.dataset.tree = position);
  html.dropdown.dataset.tree = position;
}

function trimInnerButton(taskHtml) {
  const btn = taskHtml.dropdown.querySelector('.dropdown-btn');
  taskHtml.dropdown.removeChild(btn);
}

function createTaskHtml(task) {
  const template = document.querySelector('#task-template');
  const html = template.content.cloneNode(true);

  const dropImages = html.querySelectorAll('.dropdown-img');
  dropImages.forEach(img => img.src = dropdownImg);
  const deleteImage = html.querySelector('.delete-img');
  deleteImage.src = deleteImg;
  const editImage = html.querySelector('.edit-img');
  editImage.src = editImg;

  const taskHtml = {
    container: html.querySelector('.task'),
    name: html.querySelector('.name'),
    description: html.querySelector('.description'),
    dueDate: html.querySelector('.due-date'),
    dropdown: html.querySelector('.collapsible'),
    buttons: html.querySelectorAll('button'),
  };

  if (task.tasks) {
    taskHtml.dropdown.appendChild(createInnerTaskList());
    taskHtml.taskList = taskHtml.dropdown.querySelector('.project-tasks');
  }
  return taskHtml;
}

function createInnerTaskList() {
  const taskList = document.createElement('div');
  taskList.classList.add('project-tasks');
  const label = document.createElement('h2');
  label.textContent = 'Tasks:';
  taskList.appendChild(label);
  return taskList;
}