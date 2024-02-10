function createTask(name, desc, priority = 4, dueDateRaw) {
  let _dueDate = checkDate(dueDateRaw);
  let _pri = clampPriority(priority);

  function clampPriority(num) {
    if (num > 7) return 7;
    if (num < 1) return 1;
    return num;
  }

  return {
    name,
    desc,
    get dueDate() {
      return _dueDate
    },
    get priority() {
      return _pri;
    },
    set dueDate(date) {
      _dueDate = checkDate(date);
    },
    set priority(num) {
      _pri = clampPriority(num);
    },
  };
}

function checkDate(rawDate) {
  if (!rawDate) return null;
  if (rawDate instanceof Date) return rawDate;
  return new Date(rawDate);
}

export default createTask;