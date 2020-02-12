/* Write a method to insert a node at the tail of a linked list,
   given a pointer to the head and the data (integer) to insert.
*/

// Hackerrank Code below:

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData
    this.next = null
  }
}

const SinglyLinkedList = class {
  constructor() {
    this.head = null
  }

}

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data))

    node = node.next

    if (node != null) {
      ws.write(sep)
    }
  }
  ws.write(sep)
}

// End Hackerrank Code

const insertNodeAtTail = (head, data) => {
  const newNode = new SinglyLinkedListNode(data)
  if (head !== null) {
    let node = head
    while (node.next !== null) {
      node = node.next
    }
    node.next = newNode
    return head
  }
  else return newNode
}

const runInsertNode = (data) => {
  const ws = process.stdout
  const sep = '\n'
  const linkedList = new SinglyLinkedList()
  for (let i = 0; i < data.length; i++) {
    const head = insertNodeAtTail(linkedList.head, data[i])
    linkedList.head = head
  }
  printSinglyLinkedList(linkedList.head, sep, ws)
}

runInsertNode([4, 5, 2, 7])


