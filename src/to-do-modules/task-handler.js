import { walkTree } from './task-tree.js';

function removeTaskfromTree(taskPos) {
  const copyPos = [...taskPos];
  const taskIndex = copyPos.pop();
  const parentPos = copyPos;

  const project = walkTree(parentPos);
  project.removeTask(taskIndex);
}

export { removeTaskfromTree};