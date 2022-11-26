var RandomizedSet = function () {
  this.valuesMap = {};
  this.valuesIndexMap = {};
  this.length = null;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.valuesMap[val] === undefined) {
    this.length = this.length === null ? 0 : this.length + 1;
    this.valuesMap[val] = this.length;
    this.valuesIndexMap[this.length] = val;
    return true;
  }

  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.valuesMap[val] != undefined) {
    const index = this.valuesMap[val];

    if (index === this.length) {
      delete this.valuesMap[val];
      delete this.valuesIndexMap[index];
    } else {
      const latIndexVal = this.valuesIndexMap[this.length];
      this.valuesIndexMap[index] = latIndexVal;
      this.valuesMap[latIndexVal] = index;

      delete this.valuesMap[val];
      delete this.valuesIndexMap[this.length];
    }

    this.length--;

    return true;
  }

  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  if (this.length === 0) {
    return this.valuesIndexMap[0];
  }

  return this.valuesIndexMap[Math.floor(Math.random() * (this.length + 1))];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
