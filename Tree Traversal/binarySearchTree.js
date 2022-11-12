class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;

    while (true) {
      if (value === curr.value) return;
      if (value < curr.value) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        } else {
          curr = curr.left;
        }
      } else if (value > curr.value) {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        } else {
          curr = curr.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let curr = this.root;
    let found = false;

    while (curr && !found) {
      if (value === curr.value) {
        found = true;
      } else if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      }
    }

    if (!found) return;

    return curr;
  }
  contains(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
