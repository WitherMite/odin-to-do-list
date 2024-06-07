import { getContainerProject } from './to-do-modules/task-tree';

function populateStorage() {
  localStorage.setItem(
    'container-project', 
    JSON.stringify(getContainerProject())
  );
}

function getTreeFromStorage() {
  return localStorage.getItem('container-project');
}

export {
  populateStorage,
  getTreeFromStorage
}