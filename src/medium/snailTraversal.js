/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    let result =[];
    let inc = 1;
    if(rowsCount*colsCount !== this.length) {
        return [];
    }
    for(let r=0; r < rowsCount; r++) {
       let rowArr = [];
       for(let i=r; i< this.length; i = i+(rowsCount*2 - inc)) {
          if(rowArr.length == 0) {
              rowArr.push(this[i]);
          }
          if( i > r) {
             rowArr.push(this[i]);
             (rowArr.length < colsCount) && rowArr.push(this[i+inc]);
             i= i+inc;
          }
       }
       result.push(rowArr);
       inc = inc+2;
    }
    return result; 
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */