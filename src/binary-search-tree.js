const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.elements = null;
  }

  root() {
    return this.elements;
  }

  addNode(n, v) {
    if (!n) {
      return new Node(v);
    }

    if (n.data === v) {
      return n;
    }

    if (v < n.data) {
      n.left = this.addNode(n.left, v);
    } else {
      n.right = this.addNode(n.right, v);
    }

    return n;
  }

  add(val) {
    this.elements = this.addNode(this.elements, val);
  }

  hasNode(n = this.elements, v) {
    if (!n) {
      return false;
    }

    if (n.data == v) {
      return true;
    }

    return v < n.data ? this.hasNode(n.left, v) : this.hasNode(n.right, v);
  }

  has(val) {
    return this.hasNode(this.elements, val);
  }

  findNode(n = this.elements, v) {
    if (!n) {
      return null;
    }

    if (n.data == v) {
      return n;
    }

    return v < n.data ? this.findNode(n.left, v) : this.findNode(n.right, v);
  }

  find(val) {
    return this.findNode(this.elements, val);
  }

  deleteNode(n, v) {
    if (!n) {
      return null;
    }

    if (v < n.data) {
      n.left = this.deleteNode(n.left, v);
      return n;
    }

    if (v > n.data) {
      n.right = this.deleteNode(n.right, v);
      return n;
    }

    // v === node.data

    if (!n.left && !n.right) {
      return null;
    }

    if (!n.left) {
      n = n.right;
      return n;
    }

    if (!n.right) {
      n = n.left;
      return n;
    }

    let maxFromLeft = n.left;
    while (maxFromLeft.right) {
      maxFromLeft = maxFromLeft.right;
    }
    n.data = maxFromLeft.data;

    n.left = this.deleteNode(n.left, maxFromLeft.data);

    return n;
  }
  remove(val) {
    this.elements = this.deleteNode(this.elements, val);
  }

  min() {
    if (!this.elements) {
      return;
    }

    let node = this.elements;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.elements) {
      return;
    }

    let node = this.elements;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
