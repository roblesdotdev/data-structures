function Stack() {
  this._items = []
}

Stack.prototype.push = function(element) {
  this._items.push(element)
}

Stack.prototype.pop = function() {
  return this._items.pop()
}

Stack.prototype.peek = function() {
  return this._items[this._items.length - 1]
}

Stack.prototype.isEmpty = function() {
  return this._items.length === 0
}

Stack.prototype.size = function() {
  return this._items.length
}

Stack.prototype.clear = function() {
  this._items = []
}

module.exports = Stack
