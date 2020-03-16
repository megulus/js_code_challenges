export class DoublyLinkedListNode {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

export class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  insertNodeAtHead = (data) => {
    const newNode = new DoublyLinkedListNode(data)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    }
    else {
      const tmp = this.head
      this.head = newNode
      tmp.prev = this.head
      this.head.next = tmp      
    }
    this.length += 1
  } 

  // returns first index containing data, -1 if not found
  findElement = (data) => {
    if (this.head === null) return -1
    let node = this.head
    let count = 0
    while (node !== null) {
      if (node.data === data) return count
      node = node.next
      count += 1
    }
    return -1
  }

  deleteAtPosition = (position) => {
    let node = this.head
    let count = 0
    if (position === 0) {
      const next = node.next
      if (next !== null) this.head = next
    }
    else {
      while (count < position && node !== null) {
        count += 1
        node = node.next
      }
      const prev = node.prev
      const next = node.next
      prev.next = next
      if (next) next.prev = prev  
    }
    this.length -= 1
  }

  toString = () => {
    let str = ''
    let node = this.head
    while (node !== null) {
      str += node.data
      node = node.next
    }
    return str
  }
  
  printDoublyLinkedList = () => {
    const ws = process.stdout
    let node = this.head
    while (node !== null) {
      ws.write(String(node.data))
      node = node.next
      if (node !== null) ws.write('\n')
    }
    ws.write('\n')
  }

}

// const dll = new DoublyLinkedList()
// dll.insertNodeAtHead(1)
// console.log('insert 1:')
// dll.toString()
// dll.insertNodeAtHead(2)
// dll.insertNodeAtHead(3)
// console.log('insert 2 at head, then insert 3 at head:')
// dll.toString()
// console.log('find 2: ' + dll.findElement(2))
// dll.insertNodeAtHead(4)
// console.log('find 2, after inserting 4 at head: ' + dll.findElement(2))
// console.log('find 5: ' + dll.findElement(5))
// dll.deleteAtPosition(2)
// console.log('delete at postion 2: ')
// dll.toString()
