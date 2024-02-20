import { updateTaskBoard, openProject } from '../DOM-modules/DOM-handler.js';
import { removeTaskfromTree } from '../to-do-modules/task-handler.js';

export default function updateUiButtons() {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => btn.addEventListener('click', deleteTask));
}

function deleteTask() {
  const indexTree = this.dataset.tree.split(',')
                                     .map(i => Number(i));
  removeTaskfromTree(indexTree);
  updateTaskBoard();
  if (indexTree.length > 1) {
    indexTree.pop();
    const parentPos = indexTree;
    openProject(parentPos);
  }
}