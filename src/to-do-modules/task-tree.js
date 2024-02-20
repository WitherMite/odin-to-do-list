import Task from "./task";
import Project from "./project";

let currentProject = new Project('To-do List');

function setCurrentProject(project) {
  currentProject = project
}

function getCurrentProject() {
  return currentProject;
}

function walkTree(tree) {
  let position = currentProject;
  console.log(position);
  tree.forEach(i => {
    position = position.tasks[i];
    console.log(position);
  });
  return position;
}

export { getCurrentProject, setCurrentProject, walkTree };