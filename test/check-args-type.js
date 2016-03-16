var expect = require('chai').expect;
var checkArgsType = require('../lib/check-args-type');

describe('checkArgsType', function () {
    function expect_number_object_booleanOrNumber(i, o, b) {
        checkArgsType(arguments, 'number', 'object', ['boolean', 'number'])

        return (i + ' is number') + ', ' +
            (JSON.stringify(o) + ' is object') + ', ' +
            (b + ' is boolean or number')
    }

    function expect_number_object_any_function (i, o, any, fn) {
        checkArgsType(arguments, 'number', 'object', null, 'function');

        return (i + ' is number') + ', ' +
            (JSON.stringify(o) + ' is object') + ', ' +
            (any + ' can be any type') + ', ' +
            (fn + ' is function');
    }

    function expect_number_object_anyOrMissing (i, o, any) {
        checkArgsType(arguments, 'number', 'object');

        return (i + ' is number') + ', ' +
            (JSON.stringify(o) + ' is object') + ', ' +
            (any + ' can be any type or missing');
    }

    function expect_number_object_anyButNotMissing (i, o, any) {
        checkArgsType(arguments, 'number', 'object', null);

        return (i + ' is number') + ', ' +
            (JSON.stringify(o) + ' is object') + ', ' +
            (any + ' can be any type but not missing');
    }
    
    it('should not throw on valid args', function () {
        function validCall1 () {
            console.log('expect_number_object_booleanOrNumber', expect_number_object_booleanOrNumber(123, {a: 1}, true));
        }

        function validCall2 () {
            console.log('expect_number_object_booleanOrNumber', expect_number_object_booleanOrNumber(456, [], 0));
        }

        function validCall3 () {
            console.log('expect_number_object_booleanOrNumber', expect_number_object_booleanOrNumber(123, {}, true));
        }

        function validCall4 () {
            console.log('expect_number_object_booleanOrNumber', expect_number_object_booleanOrNumber(123, null, true));
        }

        function validCall5 () {
            console.log('expect_number_object_any_function', expect_number_object_any_function(987, {}, 'any_type_value', function () {}))
        }

        function validCall6 () {
            console.log('expect_number_object_anyOrMissing', expect_number_object_anyOrMissing(987, {}))
        }

        function validCall7 () {
            console.log('expect_number_object_anyButNotMissing', expect_number_object_anyButNotMissing(987, {}, undefined))
        }

        expect(validCall1).to.not.throw('is number');
        expect(validCall2).to.not.throw('is object');
        expect(validCall3).to.not.throw('boolean or number');
        expect(validCall4).to.not.throw('boolean or number');
        expect(validCall5).to.not.throw('any type');
        expect(validCall6).to.not.throw('or missing');
        
    });

    it('should immediately throw TypeError on invalid args', function () {
        function invalidCall_not_number () {
            console.log('expect_number_object_booleanOrNumber', expect_number_object_booleanOrNumber('not number', {a: 1}, true));
        }

        function invalidCall_not_object () {
            console.log('expect_number_object_booleanOrNumber', expect_number_object_booleanOrNumber(456, undefined, 0));
        }

        function invalidCall_not_booleanOrNumber () {
            console.log('expect_number_object_booleanOrNumber', expect_number_object_booleanOrNumber(123, {}, 'not_boolean_or_number'));
        }

        function invalidCall_missing_parameter () {
            console.log('expect_number_object_booleanOrNumber', expect_number_object_booleanOrNumber(123, {}));
        }

        function invalidCall_missing_parameter2 () {
            console.log('expect_number_object_anyButNotMissing', expect_number_object_anyButNotMissing(987, {}))
        }

        expect(invalidCall_not_number).to.throw(TypeError);
        expect(invalidCall_not_number).to.throw('got string');

        expect(invalidCall_not_object).to.throw(TypeError);
        expect(invalidCall_not_object).to.throw('got undefined');

        expect(invalidCall_not_booleanOrNumber).to.throw(TypeError);
        expect(invalidCall_not_booleanOrNumber).to.throw('got string');

        expect(invalidCall_missing_parameter).to.throw(TypeError);
        expect(invalidCall_missing_parameter).to.throw('missing');

        expect(invalidCall_missing_parameter2).to.throw(TypeError);
        expect(invalidCall_missing_parameter2).to.throw('missing');

    });
})