import renderTasks from "./task-renderer.js";
import updateUiButtons from "./ui-buttons.js";
import { updateFormButtons } from './creation-form.js';
import { getCurrentProject } from '../to-do-modules/task-tree.js';
import { updateTaskDropdowns, toggleDropdown } from "./task-dropdowns.js";

function updateTaskBoard() {
  renderTasks(getCurrentProject());
  updateTaskDropdowns();
  updateUiButtons();
  updateFormButtons();
}

function openProject(position) {
  let dropdowns = Array.from(document.querySelectorAll(
    '.task-board > .task > .collapsible'
  ));

  while (position.length > 0) {
    const reqIndex = position.shift();

    const reqDropdown = dropdowns.find(drop => {
      const dropPos = drop.dataset.tree.split(',');
      const dropIndex = dropPos.at(-1);

      return Number(dropIndex) === reqIndex;
    });
    
    dropdowns = Array.from(reqDropdown.querySelectorAll(
      '.task > .collapsible'
    ));

    toggleDropdown(reqDropdown);
  }
}

export { updateTaskBoard, openProject };