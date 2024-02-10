import Task from "task.js";

class Project extends Task { // projects can be tasks - should be nestable
  constructor(name, desc, priority, dueDateRaw, ...tasks) {
    super(name, desc, priority = 4, dueDateRaw);
    this.tasks = [ ...tasks];
  }

  // methods to sort tasks

  addTask(task) { // new tasks should be at top of list until resorted
    this.tasks.unshift(task); 
  }
}

export default Project;