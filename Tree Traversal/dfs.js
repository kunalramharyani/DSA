function depthFirstSearchPreOrder(bTree) {
  let visited = [];
  let current = bTree.root;
  function traverse(node) {
    visited.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(current);
  return visited;
}

function depthFirstSearchPostOrder(bTree) {
  let visited = [];
  let current = bTree.root;
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.value);
  }
  traverse(current);
  return visited;
}

function depthFirstSearchInOrder(bTree) {
  let visited = [];
  let current = bTree.root;
  function traverse(node) {
    if (node.left) traverse(node.left);
    visited.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(current);
  return visited;
}
