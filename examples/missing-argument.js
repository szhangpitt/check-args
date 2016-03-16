var checkArgsType = require('../lib/check-args-type');

function expect_number_object_anyTypeButNotMissing(i, o, b) {
    checkArgsType(arguments, 'number', 'object', null)

    return (i + ' is number') + ', ' +
    (JSON.stringify(o) + ' is object') + ', ' +
    (b + ' is boolean or number')
}

function validCall () {
    console.log('expect_number_object_anyTypeButNotMissing\n', expect_number_object_anyTypeButNotMissing(123, {a: 1}, 'i_can_be_any_type'));
}

function invalidCall_missing_last_arg () {
    console.log('expect_number_object_anyTypeButNotMissing\n', expect_number_object_anyTypeButNotMissing(456, {a: 1}));
}

validCall();

invalidCall_missing_last_arg();
