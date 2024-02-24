import { toDate } from 'date-fns'

class Task {
  static from(JSON) {
    // re-create task from saved JSON object (by reassigning prototypes?)
  }
  
  constructor(name, desc, priority = 4, dueDateRaw) {
    this._created = new Date();
    this._priority = clampPriority(priority);
    this._dueDate = toDate(dueDateRaw);
    this.name = name;
    this.description = desc;
    this.completed = false;
  }

  get creationDate() {
    return this._created;
  }

  get dueDate() {
    return this._dueDate;
  }
  set dueDate(date) {
    this._dueDate = toDate(date);
  }

  get priority() {
    return this._priority;
  }
  set priority(num) {
    this._priority = clampPriority(num);
  }
}

function clampPriority(x) {
  const num = Number(x);
  if (num > 7) return 7;
  if (num < 1) return 1;
  return num;
}

export default Task;