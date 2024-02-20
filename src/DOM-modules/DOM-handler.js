import renderTasks from "./task-renderer.js";
import updateTaskDropdowns from "./task-dropdowns.js";
import updateUiButtons from "./ui-buttons.js";
import { updateFormButtons } from './creation-form.js';
import { getCurrentProject } from '../to-do-modules/task-tree.js';

function updateTaskBoard() {
  renderTasks(getCurrentProject());
  updateTaskDropdowns();
  updateUiButtons();
  updateFormButtons();
}

export { updateTaskBoard };