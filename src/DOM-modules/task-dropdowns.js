export default function updateTaskDropdowns() {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  dropdownBtns.forEach(linkToDropdown);
}

function linkToDropdown(btn) {
  const dropdown = getDropdown(btn);
  if (!dropdown) return;
  btn.addEventListener("click", toggleOpen.bind(dropdown));
}

function getDropdown(btn) {
  const btnParent = btn.parentNode;
  if (btnParent.classList.contains("collapsible")) return btnParent;
  return btnParent.querySelector(".collapsible");
}

function toggleOpen() {
  closeOtherDropdowns(this);
  this.classList.toggle("open");
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