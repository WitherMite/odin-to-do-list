class Task {
  #created;
  #priority;
  #dueDate;
  static from(JSON) {
    // re-create task from saved JSON object (by reassigning prototypes?)
  }
  constructor(name, desc, priority = 4, dueDateRaw) {
    this.#created = new Date();
    this.#priority = clampPriority(priority);
    this.#dueDate = checkDate(dueDateRaw);
    this.name = name;
    this.description = desc;
  }

  get creationDate() {
    return this.#created;
  }

  get dueDate() {
    return this.#dueDate;
  }
  set dueDate(date) {
    this.#dueDate = checkDate(date);
  }

  get priority() {
    return this.#priority;
  }
  set priority(num) {
    this.#priority = clampPriority(num);
  }
}

function checkDate(rawDate) {
  if (!rawDate) return null;
  if (rawDate instanceof Date) return rawDate;
  return new Date(rawDate);
}

function clampPriority(num) {
  if (num > 7) return 7;
  if (num < 1) return 1;
  return num;
}

export default Task;