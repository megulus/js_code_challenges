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

const reverse = (head) => {
  let newHead = head
  if (newHead !== null) {
    let curr = head
    let next = head.next
    while (next !== null) {
      const tmp = curr
      console.log('tmp ' + tmp.data)
      curr = next
      console.log('curr ' + curr.data)
      next = curr.next
      console.log('next ' + next.data)
      curr.next = tmp
      console.log('curr.next ' + curr.next.data)
    }
    newHead = curr
  }
  return newHead
}

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

// from hackerrank:
// position will always be at least 0 and less than the number of the elements in the list
const deleteNode = (head, position) => {
  if (head !== null) {
    if (position === 0) return head.next
    let pointer = 0
    let prev = head
    while ((pointer < (position - 1)) && (prev.next !== null)) {
      prev = prev.next
      pointer++
    }
    prev.next = prev.next.next
  }
  return head
}

// test code:

const testReverse = (data) => {
  const ws = process.stdout
  const sep = '\n'
  const linkedList = new SinglyLinkedList()
  for (let i = 0; i < data.length; i++) {
    const tempHead = insertNodeAtTail(linkedList.head, data[i])
    linkedList.head = tempHead
  }
  console.log('original')
  printSinglyLinkedList(linkedList.head, sep, ws)
  linkedList.head = reverse(linkedList.head)
  console.log('reversed')
  console.log('head')
  // printSinglyLinkedList(linkedList.head, sep, ws)
}

const testDeleteOrReplaceNode = (data, fn, position, nodeData = null) => {
  const ws = process.stdout
  const sep = '\n'
  const linkedList = new SinglyLinkedList()
  for (let i = 0; i < data.length; i++) {
    const tempHead = insertNodeAtTail(linkedList.head, data[i])
    linkedList.head = tempHead
  }
  printSinglyLinkedList(linkedList.head, sep, ws)
  const head = nodeData !== null ? fn(linkedList.head, nodeData, position) : fn(linkedList.head, position)
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

// console.log('tail, [4, 5, 2, 7] ')
// testInsertNode([4, 5, 2, 7], insertNodeAtTail)
// console.log('head, [383, 484, 392, 975, 321] ')
// testInsertNode([383, 484, 392, 975, 321], insertNodeAtHead)
// console.log('insert at tail, [16, 13, 7], insert at position 2, data 1')
// testDeleteOrReplaceNode([16, 13, 7], insertNodeAtPosition, 2, 1)
// console.log('insert at tail, [20, 6, 2, 19, 7, 4, 15, 9], delete at position 3')
// testDeleteOrReplaceNode([20, 6, 2, 19, 7, 4, 15, 9], deleteNode, 3, null)
console.log('reverse, [1, 2, 3, 4, 5]')
testReverse([1, 2, 3, 4, 5])