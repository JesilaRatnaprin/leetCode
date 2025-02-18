/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let output = [];
    let divdend = parseInt((arr.length / size));
    let rem = (arr.length % size === 0 ) ? 0 : 1;
    let totSubArr = divdend + rem;
    let start = 0;
    let end = size;
    for( i=0; i < totSubArr; i++) {
        output.push(arr.slice(start, end));
        start = end;
        end = start + size
    }
    return output;
};
