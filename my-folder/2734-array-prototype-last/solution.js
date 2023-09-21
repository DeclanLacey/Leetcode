Array.prototype.last = function() {
    let lastElement = this.pop()
    if(lastElement === undefined) {
        return -1
    }else {
        return lastElement
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
