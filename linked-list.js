class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Inserts a new node with given data at the end of the list
  append(data) {
    let newNode = new ListNode(data);

    // If the list is empty, make the new node the head of the list
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Otherwise, traverse to the end of the list and add the new node
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Inserts a new node with given data at the start of the list
  prepend(data) {
    let newNode = new ListNode(data);

    // Make the new node point to the current head and then update the head to the new node
    newNode.next = this.head;
    this.head = newNode;
  }

  // Deletes the first occurrence of a node with the given data
  delete(data) {
    // If the list is empty, return
    if (!this.head) return;

    // If the head contains the data to be deleted, update the head to the next node
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    // Otherwise, traverse the list and remove the node with the given data
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    // If a node with the given data was found, remove it
    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Prints all nodes in the list
  print() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}

// Usage
let list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print(); // 0 -> 1 -> 2 -> 3
list.delete(2);
list.print(); // 0 -> 1 -> 3
