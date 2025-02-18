/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

    return function(x) {
        let res = x;
        if(functions.length === 0) {
            return x;
        }
        functions.reverse().forEach((item) => {
            res = item(res);
        })
        return res;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */