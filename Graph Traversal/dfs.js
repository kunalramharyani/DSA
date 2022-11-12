function depthFirstSearch(start, graph) {
  let stack = [start];
  let results = [];
  let visited = {};
  let currVtx;

  visited[start] = true;

  while (stack.length) {
    currVtx = stack.pop();
    results.push(vtx);

    graph.adjList[currVtx].forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        stack.push(neighbour);
      }
    });
  }

  return results;
}
