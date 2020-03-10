const strictEqual = (value1, value2) => {
  let value1type = typeof value1
  let value2type = typeof value2
  if (value1type == value2type && value1 == value2) {
    return true
  }
  else {
    return false
  }

}

module.exports = strictEqual