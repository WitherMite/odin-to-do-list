import Project from './to-do-modules/project.js'
require('./style.css');

// move parts into separate modules, just planning

const taskBoard = new Project('Task Board');
// fill taskBoard with saved JSON tasks
let currentProject = taskBoard;
console.log(currentProject);
// add event listeners to option buttons
// draw to DOM when currentProject.tasks is changed
// allow user to select a project from a tree in a sidebar and/or from project card to set as current project

