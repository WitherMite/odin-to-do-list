import renderTasks from "./task-renderer.js";
import renderTree from "./tree-renderer.js";
import updateUiButtons from "./ui-buttons.js";
import { getCurrentProject } from '../to-do-modules/task-tree.js';
import { updateTaskDropdowns } from "./task-dropdowns.js";
import { populateStorage } from "../local-storage.js";

export default function updateTaskBoard() {
  const project = getCurrentProject();
  renderTasks(project);
  renderTree(project);
  updateTaskDropdowns();
  updateUiButtons();
  populateStorage();
}