require('./style.css');
import Task from "./to-do-modules/task.js";
import Project from './to-do-modules/project.js';

const task = new Task(
  'test',
  "this is a test",
  4,
  "2024-02-14"
);

console.log(task.dueDate);
console.log(task.creationDate);
task.dueDate = "2025-04-25";
console.log(task.dueDate);
console.log(task.creationDate);

const taskSimple = new Task("test2", 'this is another test');
console.log(taskSimple.priority);
taskSimple.priority = 6;
console.log(taskSimple.priority);
taskSimple.priority = 8;
console.log(taskSimple.priority);
taskSimple.priority = 0;
console.log(taskSimple.priority);