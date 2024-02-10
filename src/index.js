import createTask from "./to-do-modules/to-do";

const task = createTask(
  'test',
  "this is a test",
  4,
  "2024-02-14"
);

console.table(task);

task.changeDueDate("2025-04-25");

console.table(task);