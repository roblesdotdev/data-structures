const assert = require("assert")
// const Stack = require("./stack")
const Stack = require("./stack-obj")

const stack = new Stack() 

assert.equal(stack.isEmpty(), true)

stack.push(100)

assert.equal(stack.isEmpty(), false)
assert.equal(stack.size(), 1)
assert.equal(stack.peek(), 100)

stack.push(101)

assert.equal(stack.isEmpty(), false)
assert.equal(stack.size(), 2)
assert.equal(stack.peek(), 101)

assert.equal(stack.pop(), 101)
assert.equal(stack.size(), 1)
assert.equal(stack.peek(), 100)

stack.clear()
assert.equal(stack.isEmpty(), true)
assert.equal(stack.size(), 0)
