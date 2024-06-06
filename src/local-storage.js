import { getContainerProject } from './to-do-modules/task-tree';

function populateStorage() {
  localStorage.setItem(
    'container-project', 
    JSON.stringify(getContainerProject())
  );

  console.log(localStorage.getItem('container-project'));
}

export {
  populateStorage,
}