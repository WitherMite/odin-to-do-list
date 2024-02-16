import Project from './to-do-modules/project.js';
import updateTaskDropdowns from './DOM-modules/task-ui.js';
// require('./style.css'); remove when building to webpack

// move parts into separate modules, just planning
updateTaskDropdowns();
const taskBoard = new Project('Task Board');
// fill taskBoard with saved JSON tasks
let currentProject = taskBoard;
console.log(currentProject);
// add event listeners to option buttons
// draw to DOM when currentProject.tasks is changed
// allow user to select a project from a tree in a sidebar and/or from project card to set as current project
// limit how deep nested projects are drawn to ~3, but show indicator there are more