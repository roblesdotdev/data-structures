
function Stack() {
  this._items = {}
  this._size = 0
}

Stack.prototype.push = function(element) {
  this._items[this._size] = element
  this._size++
}

Stack.prototype.isEmpty = function() {
  return this._size === 0
}

Stack.prototype.size = function() {
  return this._size
}

Stack.prototype.pop = function() {
  if (this.isEmpty()) return undefined   // simulates [].pop
  this._size--
  const res = this._items[this._size]
  delete this._items[this._size]
  return res
}

Stack.prototype.peek = function() {
  return this._items[this._size - 1]
}

Stack.prototype.clear = function() {
  this._items = {}
  this._size = 0
}

module.exports = Stack
