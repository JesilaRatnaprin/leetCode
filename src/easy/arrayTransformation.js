/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let output = [];
    arr.forEach((item, index) => {
        output.push(fn(item, index))
    });
    return output;
};