import { getAllProjects } from "../to-do-modules/task-tree";
import Project from "./project";
import Task from "./task";
let projectList = [];

function getProjectList() {
  projectList = getAllProjects();
  return [ ...projectList];
}

function addTaskToProject(taskValues, index) {
  const project = projectList[index];
  const { asProj, name, description, priority, dueDate } = taskValues;
  if (asProj) {
    project.addTask(new Project(name, description, priority, dueDate));
  } else {
    project.addTask(new Task(name, description, priority, dueDate));
  }
}

export {
  getProjectList,
  addTaskToProject,
};