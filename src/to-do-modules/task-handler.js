import { walkTree } from './task-tree.js';

function removeTaskfromProject(taskTree) {
  const taskIndex = Number(taskTree.pop());
  const parentTree = taskTree.map(i => Number(i));

  const project = walkTree(parentTree);
  project.removeTask(taskIndex);
}

export { removeTaskfromProject };