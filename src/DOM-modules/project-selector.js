const select = document.querySelector('#project-select');

export default function updateProjectSelector() {
  clearSelector();
  const projects = document.querySelectorAll('.tree-entry');
  projects.forEach((proj) => {
    const opt = document.createElement('option');
    opt.textContent = proj.textContent;
    opt.value = proj.dataset.tree;
    select.appendChild(opt);
  });
}

function clearSelector() {
  while (select.firstChild) select.removeChild(select.firstChild);
}