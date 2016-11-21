class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  add(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  addFirst(value) {
    let node = new Node(value);

    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }

  remove(data) {
    let currentHead = this.head;

    while (currentHead.next) {
      if (data === currentHead.value) {
        break;
      } else {
        currentHead = currentHead.next;
      }
    }

    if (!currentHead.previous) {
      currentHead.next.previous = null;
      this.head = currentHead.next;
    } else if (!currentHead.next) {
      currentHead.previous.next = null;
      this.tail = currentHead.previous;
    } else {
      currentHead.previous.next = currentHead.next;
      currentHead.next.previous = currentHead.previous;
    }

  }

  print() {
    let currentHead = this.head;
    while (currentHead.next) {
      console.log(currentHead.value);
      currentHead = currentHead.next;
    }
    console.log(currentHead.value);
  }

}


let dl = new DoublyLinkedList();
dl.add('20');
dl.add('30');
dl.add('50');
dl.addFirst('400');
dl.print();
dl.remove('50');
console.log('---------');
dl.print();
