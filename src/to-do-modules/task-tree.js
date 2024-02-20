import Task from "./task";
import Project from "./project";

let currentProject = new Project('To-do List');

function setCurrentProject(project) {
  currentProject = project
}

function getCurrentProject() {
  return currentProject;
}

function walkTree(treePos) {
  let position = currentProject;
  treePos.forEach(i => {
    position = position.tasks[i];
  });
  return position;
}

export { getCurrentProject, setCurrentProject, walkTree };