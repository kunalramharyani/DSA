export class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter((vtx) => vtx !== v2);
    this.adjList[v2] = this.adjList[v2].filter((vtx) => vtx !== v1);
  }

  removeVertex(vertex) {
    this.adjList[vertex].forEach((adj) => this.removeEdge(adj, vertex));
    delete this.adjList[vertex];
  }
}
