function breadthFirstSearch(start, graph) {
  const queue = [start];
  const results = [];
  const visited = {};
  let currVtx;

  visited[start] = true;

  while (queue.length) {
    currVtx = queue.shift();
    results.push(vtx);

    graph.adjList[currVtx].forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        queue.push(neighbour);
      }
    });
  }

  return results;
}
