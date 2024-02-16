export default function updateTaskDropdowns() {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  dropdownBtns.forEach(linkDropdown);
}

function linkDropdown(btn) {
  const dropdown = getDropdown(btn);
  if (!dropdown) return;
  btn.addEventListener("click", toggleDropdown.bind(dropdown));
}

function getDropdown(btn) {
  const btnParent = btn.parentNode;
  if (btnParent.classList.contains("collapsible")) return btnParent;
  return btnParent.querySelector(".collapsible");
}

function toggleDropdown() {
  this.classList.toggle("open");
} 