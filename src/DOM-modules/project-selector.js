import { getProjectList } from "../to-do-modules/project-list";
const select = document.querySelector('#project-select');

function updateProjectSelector() {
  clearSelector();
  const projects = getProjectList();
  projects.forEach((proj, index) => {
    const opt = document.createElement('option');
    opt.textContent = proj.name;
    opt.value = index;
    select.appendChild(opt);
  });
}

function clearSelector() {
  while (select.firstChild) select.removeChild(select.firstChild);
}

export {
  updateProjectSelector,
};