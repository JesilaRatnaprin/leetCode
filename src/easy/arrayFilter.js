/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let output = [];
    arr.forEach((item, index=0) => {
       if(fn(item, index)) {
        return output.push(item)
       }
    });
    return output
};