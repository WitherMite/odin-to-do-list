import renderTasks from "./task-renderer.js";
import updateTaskDropdowns from "./task-dropdowns.js";
import { updateFormButtons } from './creation-form.js';

function updateTaskBoard(project) {
  renderTasks(project);
  updateTaskDropdowns();
  updateFormButtons();
}

export { updateTaskBoard };