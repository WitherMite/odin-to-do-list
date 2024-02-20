import { updateTaskBoard } from '../DOM-modules/DOM-handler.js';
import { removeTaskfromProject } from '../to-do-modules/task-handler.js';

export default function updateUiButtons() {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => btn.addEventListener('click', deleteTask));
}

function deleteTask() {
  const indexTree = this.dataset.tree.split(',');
  removeTaskfromProject(indexTree);
  updateTaskBoard();
}