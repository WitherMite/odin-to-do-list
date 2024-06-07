import Task from "./task";
import Project from "./project";
import { getTreeFromStorage } from "../local-storage";

const containerProject = createContainerProject();
let currentProject = containerProject;

function createContainerProject() {
  const treeString = getTreeFromStorage();
  if (treeString) return Project.from(treeString);

  return new Project('To-do List');
}

function setCurrentProject(project) {
  if (project instanceof Project) currentProject = project;
}

function getCurrentProject() {
  return currentProject;
}

function getContainerProject() {
  return containerProject;
}

function removeTaskfromTree(taskPos) {
  const copyPos = [...taskPos];
  const taskIndex = copyPos.pop();
  const parentPos = copyPos;

  const project = getTaskFromTree(parentPos);
  return project.removeTask(taskIndex);
}

function addTaskToTree(taskValues, projectPos) {
  const project = getTaskFromTree(projectPos);
  const { index, asProj, name, description, priority, dueDate } = taskValues;
  if (asProj) {
    project.addTask(
      new Project(name, description, priority, dueDate),
      index
    );
  } else {
    project.addTask(
      new Task(name, description, priority, dueDate),
      index
    );
  }
}

function editTaskInTree(taskValues, taskPos) {
  const task = getTaskFromTree(taskPos);
  const { name, description, priority, dueDate } = taskValues;
  task.name = name;
  task.description = description;
  task.priority = priority;
  task.dueDate = dueDate;
  if (taskValues.asProj) Project.from(task);
  if (taskValues.isMove) {
    const targetPos = taskValues.targetProject
      ? taskValues.targetProject.split(',').map(i => Number(i))
      : [];
    const targetProject = getTaskFromTree(targetPos);
    targetProject.addTask(removeTaskfromTree(taskPos));
  }
}

function getTaskFromTree(taskPos) {
  let position = currentProject;
  taskPos.forEach(i => {
    position = position.tasks[i];
  });
  return position ? position : currentProject;
}

// Didn't end up needing this, but thought it was too cool to delete tbh

// function getAllProjects(project = currentProject) {
//   return project.tasks.reduce((acc, task) => {
//     if (task instanceof Project) {
//       acc = [...acc, ...getAllProjects(task)];
//     }
//     return acc;
//   }, [project]);
// }

export {
  getCurrentProject,
  setCurrentProject,
  getContainerProject,
  removeTaskfromTree,
  addTaskToTree,
  editTaskInTree,
  getTaskFromTree
};