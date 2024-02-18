import renderTasks from "./task-renderer";
import updateTaskDropdowns from "./task-dropdowns";

function updateTaskBoard(project) {
  renderTasks(project);
  updateTaskDropdowns();
}

export { updateTaskBoard };