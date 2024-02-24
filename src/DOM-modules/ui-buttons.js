import updateTaskBoard from '../DOM-modules/DOM-handler.js';
import { openProject } from '../DOM-modules/task-dropdowns.js'
import { removeTaskfromTree } from '../to-do-modules/task-tree.js';
import { showForm } from './form.js';

export default function updateUiButtons() {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => btn.addEventListener('click', deleteTask));

  const formBtns = document.querySelectorAll('.new-task-btn');
  formBtns.forEach(btn => btn.addEventListener('click', showForm));
}

function deleteTask() {
  if (!confirm("Do you really want to delete this task?")) return;
  const treePos = this.dataset.tree.split(',')
                                   .map(i => Number(i));
  removeTaskfromTree(treePos);
  updateTaskBoard();
  if (treePos.length > 1) {
    treePos.pop();
    const parentPos = treePos;
    openProject(parentPos);
  }
}