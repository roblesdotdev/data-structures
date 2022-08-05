// const Stack = require('./stack')
const Stack = require('./stack-obj')

let stack;

describe("Stack ds", () => {
  beforeEach(() => {
    stack = new Stack()
  })
  it("Should create an empty stack", () => {
    expect(stack.isEmpty()).toBe(true)
    expect(stack.size()).toBe(0)
  })

  it("Should add a new item", () => {
    stack.push(100)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.size()).toBe(1)
  })

  it("Should peek the top item", () => {
    stack.push(100)
    expect(stack.peek()).toBe(100)
  })

  it("Should pop the top item", () => {
    stack.push(100)
    stack.push(101)
    expect(stack.pop()).toBe(101)
    expect(stack.size()).toBe(1)
  })

  it("Should clear the stack", () => {
    stack.push(1000)
    stack.push(2000)
    stack.clear()
    expect(stack.isEmpty()).toBe(true)
    expect(stack.size()).toBe(0)
  })
})
