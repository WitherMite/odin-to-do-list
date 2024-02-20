import Project from './to-do-modules/project.js';
import Task from './to-do-modules/task.js';
import { updateTaskBoard } from './DOM-modules/DOM-handler.js';
import { getCurrentProject } from './to-do-modules/task-tree.js';
require('./style.css');

// move parts into separate modules, just planning
// fill taskBoard with saved JSON tasks
console.log(getCurrentProject());
getCurrentProject().addTask(new Task('1', 'ddddddd', 3, "02-28"));
getCurrentProject().addTask(new Project('2', 'ddddddd', 1, "2025-01-12",
  new Task('3', 'ddddddd', 5, "2025-01-12"),
  new Task('3', 'ddddddd', 5, "2025-01-12"),
));
getCurrentProject().addTask(new Task('3', 'ddddddd', 5, "2025-01-12"));
getCurrentProject().addTask(new Task('4', 'ddddddd', 7, "2025-01-12"));
getCurrentProject().addTask(new Project('5', 'ddddddd', 9, "2025-01-12",
  new Task('3', 'ddddddd', 5, ""),
  new Task('3', 'ddddddd', 5, "2025-01-12"),
  new Task('3', 'ddddddd', 5, "2025-01-12"),
  new Project('5', 'ddddddd', 9, "2025-01-12",
    new Task('3', 'ddddddd', 5, "2025-01-12"),
    new Task('3', 'ddddddd', 5, "2025-01-12"),
    new Task('3', 'ddddddd', 5, "2025-01-12"),
  ),
));
getCurrentProject().addTask(new Task('6', 'ddddddd', 0, "2025-01-12"));
getCurrentProject().addTask(new Task('7', 'ddddddd', 4, "2025-01-12"));
// add event listeners to option buttons to sort getCurrentProject().tasks
// draw to DOM when getCurrentProject() is changed
updateTaskBoard();
// user create tasks
// user edit tasks
// user delete tasks

// allow user to select a project from a tree in a sidebar and/or from project card to set as current project
// limit how deep nested projects are drawn to ~3, but show indicator there are more