import Task from "./task.js";

class Project extends Task { // projects can be tasks - should be nestable
  static from(obj) {
    if (obj instanceof Task) {
      Object.setPrototypeOf(obj, Project.prototype);
      obj._repairNested();
      return obj;
    }
    const task = Task.from(obj);
    if (task) return Project.from(task);
  }
  
  constructor(name, desc, priority, dueDateRaw, ...tasks) {
    super(name, desc, priority, dueDateRaw);
    this.tasks = tasks;
  }

  _repairNested() {
    this.tasks.forEach(task => {
      if (task.tasks && !(task instanceof Project)) {
        Project.from(task);
      } else if (!(task instanceof Task)) {
        Task.from(task);
      }
    })
  }

  // methods to sort tasks

  addTask(task, position = null) {
    if (!task instanceof Task) return;
    if (position) {
      this.tasks.splice(position, 0, task);
    } else {
      this.tasks.push(task);
    } 
  }

  removeTask(index) {
    return this.tasks.splice(index, 1);
  }
}

export default Project;