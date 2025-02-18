/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let output = [];
    const recrusiveFn = function (sub, depth) {

        for (let j = 0; j < sub.length; j++) {
            if (Array.isArray(sub[j]) && depth < n) {
                recrusiveFn(sub[j], depth + 1)
            } else {
                output.push(sub[j]);
            }
        }  
    }
    recrusiveFn(arr, 0);
    return output;
};