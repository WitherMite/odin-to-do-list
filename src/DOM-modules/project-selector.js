const selectors = document.querySelectorAll('.project-selector');

export default function updateProjectSelectors() {
  clearSelectors();
  const projects = document.querySelectorAll('.tree-entry');
  projects.forEach((proj) => {
    const opt = document.createElement('option');
    opt.textContent = proj.textContent;
    opt.value = proj.dataset.tree;
    selectors.forEach(sel => sel.appendChild(opt.cloneNode(true)));
  });
}

function clearSelectors() {
  while (checkSelectorsHaveChild()) {
    selectors.forEach(sel => sel.removeChild(sel.firstChild));
  }
}

function checkSelectorsHaveChild() {
  return Array.from(selectors).some(sel => sel.firstChild);
}