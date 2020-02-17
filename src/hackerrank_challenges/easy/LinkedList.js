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

const insertNodeAtHead = (head, data) => {
  const node = new SinglyLinkedListNode(data)
  if (head !== null) node.next = head
  return node
}

const insertNodeAtPosition = (head, data, position) => {
  let pointer = 0
  const newNode = new SinglyLinkedListNode(data)
  if (head !== null) {
    if (position === 0) {
      newNode.next = head
    }
    else {
      let node = head
      while (pointer < position - 1) {
        node = node.next
        pointer++
      }
      const next = node.next
      newNode.next = next
      node.next = newNode
      return head
    }
  }
  return newNode
}

// test code:

const testDeleteOrReplaceNode = (data, fn, position, nodeData = null) => {
  const ws = process.stdout
  const sep = '\n'
  const linkedList = new SinglyLinkedList()
  for (let i = 0; i < data.length; i++) {
    const tempHead = insertNodeAtTail(linkedList.head, data[i])
    linkedList.head = tempHead
  }
  const head = fn(linkedList.head, nodeData, position)
  linkedList.head = head
  printSinglyLinkedList(linkedList.head, sep, ws) 
}

const testInsertNode = (data, fn) => {
  const ws = process.stdout
  const sep = '\n'
  const linkedList = new SinglyLinkedList()
  for (let i = 0; i < data.length; i++) {
    const head = fn(linkedList.head, data[i])
    linkedList.head = head
  }
  printSinglyLinkedList(linkedList.head, sep, ws)
}

console.log('tail, [4, 5, 2, 7] ')
testInsertNode([4, 5, 2, 7], insertNodeAtTail)
console.log('head, [383, 484, 392, 975, 321] ')
testInsertNode([383, 484, 392, 975, 321], insertNodeAtHead)
console.log('insert at tail, [16, 13, 7], insert at position 2, data 1')
testDeleteOrReplaceNode([16, 13, 7], insertNodeAtPosition, 2, 1)