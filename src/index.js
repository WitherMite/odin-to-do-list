import updateTaskBoard from './DOM-modules/DOM-handler.js';
require('./style.css');

// add event listeners to option buttons to sort currentProject.tasks
updateTaskBoard();
console.table(getAllProjects());

// allow user to select a project from a tree in a sidebar and/or from project card to set as current project
// limit how deep nested projects are drawn to ~3, but show indicator there are more