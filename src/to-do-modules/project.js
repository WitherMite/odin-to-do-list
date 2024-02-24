import Task from "./task.js";

class Project extends Task { // projects can be tasks - should be nestable
  static from(obj) {
    if (obj instanceof Task) {
      // turn Tasks into Projects
    } else {
      const task = Task.from(obj); // repair JSON
      if (task) Project.from(task);
    }
  }
  
  constructor(name, desc, priority, dueDateRaw, ...tasks) {
    super(name, desc, priority, dueDateRaw);
    this.tasks = tasks;
  }

  _repairNested() {
    // re-create all projects and tasks in this.tasks
  }

  // methods to sort tasks

  addTask(task) {
    if (!task instanceof Task) return;
    this.tasks.push(task); 
  }

  removeTask(index) {
    return this.tasks.splice(index, 1);
  }
}

export default Project;