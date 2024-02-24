import renderTasks from "./task-renderer.js";
import renderTree from "./tree-renderer.js";
import updateUiButtons from "./ui-buttons.js";
import { getCurrentProject } from '../to-do-modules/task-tree.js';
import { updateTaskDropdowns, toggleDropdown } from "./task-dropdowns.js";

function updateTaskBoard() {
  const project = getCurrentProject();
  renderTasks(project);
  renderTree(project);
  updateTaskDropdowns();
  updateUiButtons();
}

function openProject(position) {
  let dropdowns = Array.from(document.querySelectorAll(
    '.task-board > .task > .collapsible'
  ));

  while (position.length > 0) {
    const reqIndex = position.shift();

    const reqDropdown = dropdowns.find(drop => {
      const dropPos = drop.dataset.tree.split(',');
      const dropIndex = Number(dropPos.at(-1));

      return dropIndex === reqIndex;
    });
    
    dropdowns = Array.from(reqDropdown.querySelectorAll(
      '.task > .collapsible'
    ));

    toggleDropdown(reqDropdown);
  }
}

export { updateTaskBoard, openProject };