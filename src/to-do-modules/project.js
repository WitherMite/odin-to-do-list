import Task from "./task.js";

class Project extends Task { // projects can be tasks - should be nestable
  static from(obj) {
    // re-create project from saved JSON object or task with a tasks prop
    // fixedProject._repairNested();
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
    this.tasks.push(task); 
  }

  removeTask(index) {
    return this.tasks.splice(index, 1);
  }
}

export default Project;