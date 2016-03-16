var checkArgsType = require('../lib/check-args-type');

function expect_number_object_booleanOrNumber(i, o, b) {
    checkArgsType(arguments, 'number', 'object', ['boolean', 'number'])

    return (i + ' is number') + ', ' +
    (JSON.stringify(o) + ' is object') + ', ' +
    (b + ' is boolean or number')
}

function validCall () {
    console.log('expect_number_object_booleanOrNumber\n', expect_number_object_booleanOrNumber(123, {a: 1}, true));
}

function invalidCall_not_number () {
    console.log('expect_number_object_booleanOrNumber\n', expect_number_object_booleanOrNumber('i_am_not_a_number', {a: 1}, true));
}

validCall();

invalidCall_not_number();
