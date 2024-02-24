import Task from "./task";
import Project from "./project";

const containerProject = new Project('To-do List');
let currentProject = containerProject;

function setCurrentProject(project) {
  currentProject = project
}

function getCurrentProject() {
  return currentProject;
}

function removeTaskfromTree(taskPos) {
  const copyPos = [...taskPos];
  const taskIndex = copyPos.pop();
  const parentPos = copyPos;

  const project = getTaskFromTree(parentPos);
  project.removeTask(taskIndex);
}

function addTaskToTree(taskValues, projectPos) {
  const project = getTaskFromTree(projectPos);
  const { asProj, name, description, priority, dueDate } = taskValues;
  if (asProj) {
    project.addTask(new Project(name, description, priority, dueDate));
  } else {
    project.addTask(new Task(name, description, priority, dueDate));
  }
}

function getTaskFromTree(taskPos) {
  let position = currentProject;
  taskPos.forEach(i => {
    position = position.tasks[i];
  });
  return position ? position : currentProject;
}

function getAllProjects(project = currentProject) {
  return project.tasks.reduce((acc, task) => {
    if (task instanceof Project) {
      acc = [...acc, ...getAllProjects(task)];
    }
    return acc;
  }, [project]);
}

export {
  getCurrentProject,
  setCurrentProject,
  removeTaskfromTree,
  addTaskToTree,
  getAllProjects
};