/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    var groupByObj = {};
    for(let i =0; i< this.length; i++) {
        let key = fn(this[i]);
        if(!groupByObj.hasOwnProperty(key)) {
            groupByObj[key] = [];
        }
       if(fn(this[i]) === key) {
              groupByObj[key].push(this[i]);
           }
    }
    return groupByObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */