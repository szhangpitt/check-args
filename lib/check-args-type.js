/**
 * check args type in a function, use as `checkArgsType(arguments, 'number', null, ['boolean', 'string'])`
 * first parameter is always `arguments`
 * second and on parameters are typeof values, if it's null, it means we don't care; if it's array, that arg can be any one of the array.
 * @return {true|TypeError} [description]
 */

function checkArgsType () {
    var args = Array.prototype.slice.call(arguments[0], 0);
    var types = Array.prototype.slice.call(arguments, 1);

    var expectedType;
    var argType;
    
    for (var i = 0; i < types.length; i = i + 1) {
        expectedType = types[i];
        argType = typeof args[i];

        if (expectedType === null && i <= args.length - 1) {
            continue;
        } else if (i > args.length - 1) {
            throw new TypeError('Expected ' + expectedTypeToString(expectedType) + ' missing parameter at position ' + i);
        } else if (Array.isArray(expectedType) && expectedType.indexOf(argType) === -1) {
            throw new TypeError('Expected ' + expectedTypeToString(expectedType) + ' got ' + argType + ' at position ' + i);
        } else if (typeof expectedType === 'string' && argType !== expectedType) {
            throw new TypeError('Expected ' + expectedTypeToString(expectedType) + ' got ' + argType + ' at position ' + i);
        }
    }

    return true;
}

function expectedTypeToString (expectedType) {

    if (Array.isArray(expectedType)) {
        return expectedType.join(' or ');
    } else if (expectedType === null) {
        return 'any type'
    }

    return expectedType;
}

module.exports = checkArgsType;
