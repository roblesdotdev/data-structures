
function Queue() {
  this._items = {}  // use and objet to be more performant
  this._size = 0
  this._lowestKey = 0  // helps to track the first element
}

Queue.prototype.size = function() {
  return this._size - this._lowestKey
}

Queue.prototype.isEmpty = function() {
  return this.size() === 0
}

Queue.prototype.enqueue = function(element) {
  this._items[this._size] = element
  this._size++
}

Queue.prototype.dequeue = function() {
  if (this.isEmpty()) return undefined
  const res = this._items[this._lowestKey]
  this._lowestKey++
  return res
}

Queue.prototype.peek = function() {
  if (this.isEmpty()) return undefined
  return this._items[this._lowestKey]
}

Queue.prototype.clear = function() {
  this._items = {}
  this._size = 0
  this._lowestKey = 0
}

module.exports = Queue
