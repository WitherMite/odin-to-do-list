function createTask(name, desc, priority = 4, dueDateRaw) {
  if (priority > 7) priority = 7;
  if (priority < 1) priority = 1;

  let dueDate = checkDate(dueDateRaw);
  function checkDate(rawDate) {
    if (!rawDate) return null;
    if (rawDate instanceof Date) return rawDate;
    return new Date(rawDate);
  }
  function changeDueDate(date) {
    this.dueDate = checkDate(date);
  }

  return {
    name,
    desc,
    priority,
    dueDate,
    changeDueDate
  };
}

export default createTask;