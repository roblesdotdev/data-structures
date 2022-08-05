const Queue = require('./queue')

let queue;

describe("Queue ds", () => {
  beforeEach(() => {
    queue = new Queue()
  })
  it("Should create an empty stack", () => {
    expect(queue.isEmpty()).toBe(true)
    expect(queue.size()).toBe(0)
  })

  it("Should add a new item", () => {
    queue.enqueue(100)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.size()).toBe(1)
  })

  it("Should peek the top item", () => {
    queue.enqueue(100)
    expect(queue.peek()).toBe(100)
  })

  it("Should pop the top item", () => {
    queue.enqueue(100)
    queue.enqueue(101)
    expect(queue.dequeue()).toBe(100)
    expect(queue.size()).toBe(1)
  })

  it("Should clear the stack", () => {
    queue.enqueue(1000)
    queue.enqueue(2000)
    queue.clear()
    expect(queue.isEmpty()).toBe(true)
    expect(queue.size()).toBe(0)
  })
})
