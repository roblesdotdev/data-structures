const assert = require("assert")
const Queue = require("./queue")

const queue = new Queue() 

assert.equal(queue.isEmpty(), true)

queue.enqueue(100)

assert.equal(queue.isEmpty(), false)
assert.equal(queue.size(), 1)
assert.equal(queue.peek(), 100)

queue.enqueue(101)

assert.equal(queue.isEmpty(), false)
assert.equal(queue.size(), 2)
assert.equal(queue.peek(), 100)

assert.equal(queue.dequeue(), 100)
assert.equal(queue.size(), 1)
assert.equal(queue.peek(), 101)

queue.clear()
assert.equal(queue.isEmpty(), true)
assert.equal(queue.size(), 0)
