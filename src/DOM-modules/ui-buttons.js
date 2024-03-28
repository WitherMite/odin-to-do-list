import updateTaskBoard from '../DOM-modules/DOM-handler.js';
import showNewTaskForm from './new-task-form.js';
import showEditForm from './edit-form.js';
import { openTask } from '../DOM-modules/task-dropdowns.js'
import { removeTaskfromTree } from '../to-do-modules/task-tree.js';

export default function updateUiButtons() {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => btn.addEventListener('click', deleteTask));

  const formBtns = document.querySelectorAll('.new-task-btn');
  formBtns.forEach(btn => btn.addEventListener('click', showNewTaskForm));

  const editBtns = document.querySelectorAll('.edit-btn');
  editBtns.forEach(btn => btn.addEventListener('click', showEditForm));
}

function deleteTask() {
  if (!confirm("Do you really want to delete this task?")) return;
  const treePos = this.dataset.tree.split(',').map(i => Number(i));
  
  removeTaskfromTree(treePos);
  updateTaskBoard();
  if (treePos.length > 1) {
    treePos.pop();
    const parentPos = treePos;
    openTask(parentPos);
  }
}