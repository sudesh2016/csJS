class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    let currenNode = this.head,
      node = new Node(value);

    if (!currenNode) {
      this.head = node;
      this.length++;
      return;
    }

    while (currenNode.next) {
      currenNode = currenNode.next;
    }

    currenNode.next = node;
    this.length++;

  }

  addFirst(value) {
    let currentHead = this.head;
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

  }

  removePos(pos) {
    let currentNode = this.head,
      previousNode,
      start = 0;

    while (start < pos) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      start++;
    }

    previousNode.next = currentNode.next;
    currentNode = null;
    this.length--;

  }


  removeEnd() {
    let currentNode = this.head,
      previous;

    while (currentNode.next) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    console.log('my last node', currentNode);
    previous.next = null;
    this.length--;

  }

  print() {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

}

let ll = new LinkedList();
ll.add('10');
ll.add('30');
ll.add('40');
ll.add('50');
console.log('----------------')
console.log(ll.length);
console.log('----------------')
ll.print();
console.log('----------------')
ll.print();
console.log('----------------')
ll.removePos(2);
ll.print();
ll.addFirst('80');
console.log(JSON.stringify(ll))
ll.print();
