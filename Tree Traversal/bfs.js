function breadthFirstSearch(bTree) {
  let visited = [];
  let queue = [];
  let node = bTree.root;
  queue.push(node.value);
  while (queue.length) {
    node = queue.shift();
    visited.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return visited;
}