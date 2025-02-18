/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    let output = obj;
    if(output == null || classFunction == null) {
        return false;
    }
    while(output.__proto__ !== null) {
        console.log('output._proto_', output.__proto__)
        if(output.__proto__ === classFunction.prototype) {
            return true;
        } else {
            output = output.__proto__;
        }
    }
    return false; 
};