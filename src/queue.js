const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {    
    this.elements = undefined;
  }

  enqueue(element) {
    const n = new ListNode(element);

    if (!this.elements) {
      this.elements = n;
      return;
    } 

    let t = this.elements;
    
    while(t.next) {        
      t = t.next;
    }
    
    t.next = n;
  }

  dequeue() {
    if (!this.elements) {
      return;
    }

    let t = this.elements;
    this.elements = t.next;

    return t.value;
  }

  getUnderlyingList() {
    return this.elements;
  }
}

module.exports = {
  Queue,
};
