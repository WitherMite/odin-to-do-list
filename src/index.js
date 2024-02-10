import createTask from "./to-do-modules/to-do";

const task = createTask(
  'test',
  "this is a test",
  4,
  "2024-02-14"
);

console.table(task);
task.changeDueDate("2025-04-25");
console.log(task.dueDate);

const taskSimple = createTask("test2", 'this is another test');
console.table(taskSimple);
taskSimple.changePriority(6);
console.table(taskSimple.priority);
taskSimple.changePriority(8);
console.table(taskSimple.priority);
taskSimple.changePriority(0);
console.table(taskSimple.priority);