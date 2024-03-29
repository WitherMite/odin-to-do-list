function updateTaskDropdowns() {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  dropdownBtns.forEach(linkToDropdown);
}

function linkToDropdown(btn) {
  const dropdown = getDropdown(btn);
  if (!dropdown) return;
  btn.addEventListener("click", () => {
    toggleDropdown(dropdown);
  });
}

function getDropdown(btn) {
  const btnParent = btn.parentNode;
  if (btnParent.classList.contains("collapsible")) return btnParent;
  return btnParent.querySelector(".collapsible");
}

function toggleDropdown(dropdown) {
  closeOtherDropdowns(dropdown);
  dropdown.classList.toggle("open");
}

function closeOtherDropdowns(dropdown) {
  const isOuter = 
    dropdown.parentNode.parentNode.classList.contains("task-board");
  const open = dropdown.classList.contains('open');

  if (isOuter && !open) {
    const outerDropdowns = document.querySelectorAll(
      ".task-board > .task > .collapsible"
    );
    
    outerDropdowns.forEach(dropdown => dropdown.classList.remove('open'));
  }
}

function openTask(position) {
  let dropdowns = Array.from(document.querySelectorAll(
    '.task-board > .task > .collapsible'
  ));

  while (position.length > 0) {
    const reqIndex = position.shift();

    const reqDropdown = dropdowns.find(drop => {
      const dropPos = drop.dataset.tree.split(',');
      const dropIndex = Number(dropPos.at(-1));

      return dropIndex === reqIndex;
    });
    
    dropdowns = Array.from(reqDropdown.querySelectorAll(
      '.task > .collapsible'
    ));

    toggleDropdown(reqDropdown);
  }
}

export { updateTaskDropdowns, openTask };