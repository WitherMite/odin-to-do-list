const tree = document.querySelector('.project-tree');

export default function renderTree(project) {
  clearTree();
  drawToNode(project, tree);
}

function clearTree() {
  while (tree.firstChild) tree.removeChild(tree.firstChild);
}

function drawToNode(project, targetNode, position = []) {
  if (!project.tasks) return;
  const treeHtml = createTreeHtml(project);
  treeHtml.span.dataset.tree = position;
  targetNode.appendChild(treeHtml.li);

  const ul = document.createElement('ul');
  project.tasks.forEach((proj, index) => {
    const childPos = [ ...position, index];
    drawToNode(proj, ul, childPos);
  });

  treeHtml.li.appendChild(ul);
}

function createTreeHtml(project) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.classList.add('tree-entry');
  span.textContent = project.name;

  li.appendChild(span);
  return {
    li,
    span
  }
}