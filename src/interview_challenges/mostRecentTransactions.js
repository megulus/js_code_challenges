/* 
We have a Transaction class, with properties tid and amount.
  tid: 'A'
  amount: 19.95
Additionally, we have a RecentTransactions class with the methods:
- constructor (capacity)
 this takes a parameter "capacity" - above this capacity,
 the instance of RecentTransactions needs to expunge the least recently
 used transaction. A transaction is most recently used when it is either
 saved or accessed. 
- save (transaction)
 this saves a transaction
 (also needs to update most/least recently accessed)
 if this method is called with a transaction whose tid already exists in the
 data structure, it is considered an update
- findById (tid)
 finds a transaction by tid
 (also needs to update most/least recently accessed)
 - toString
  returns a string of entire set of transactions, ordered from most to least 
  recently accessed, e.g., if the transactions from most to least recently accessed 
  are 'A', 'D', 'C', this method returns 'ADC'
NOTE: the thing I missed in the phone screen was that the best data structure 
for maintaining the access order data is a doubly-linked list
*/

import { DoublyLinkedList } from './DoublyLinkedList'

export class Transaction {
  
  constructor(tid, amount) {
    this.tid = tid
    this.amount = amount
  }

}

export class RecentTransactions {
  
  constructor(capacity) {
    this.capacity = capacity
    this.transactionsLookup = {}
    this.orderedTransactions = new DoublyLinkedList()
    this.length = 0
  }

  save = (transaction) => {
    const id = transaction.tid
    if (id in this.transactionsLookup) {
      const position = this.orderedTransactions.findElement(id)
      this.orderedTransactions.deleteAtPosition(position)
    }
    this.transactionsLookup[id] = transaction
    this.orderedTransactions.insertNodeAtHead(id)
    this.length += 1
    if (this.length > this.capacity) {
      const leastRecent = this.orderedTransactions.tail
      delete this.transactionsLookup[leastRecent]
      const tailPosition = this.orderedTransactions.length - 1
      this.orderedTransactions.deleteAtPosition(tailPosition)
    }
  }

  findById = (tid) => {
    const transaction = this.transactionsLookup[tid]
    const position = this.orderedTransactions.findElement(tid)
    this.orderedTransactions.deleteAtPosition(position)
    this.orderedTransactions.insertNodeAtHead(tid)
    return transaction
  }

  toString = () => {
    return this.orderedTransactions.toString()
  }

}