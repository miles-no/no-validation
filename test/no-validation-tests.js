var buster = require("buster");
var validation = require('../noValidation.js');


buster.testCase("Account number validation", {
    "should not accept account numbers of less than 11 digits": function () {
        refute(validation.accountNumber('1234567891'));
    },
    "should not accept account numbers of more than 11 digits": function () {
        refute(validation.accountNumber('123456789111'));
    },
    "should accept valid account numbers": function () {
        assert(validation.accountNumber('12345678911'));
    },
    "should accept valid account numbers strings with standard format": function () {
        assert(validation.accountNumber('1234.56.78911'));
    },
   "should not accept invalid account numbers": function () {
        refute(validation.accountNumber('12345678910'));
    } 
});

buster.testCase("Organization number validation", {
    "should not accept organization numbers of less than 9 digits": function () {
        refute(validation.organizationNumber('98765432'));
    },
    "should not accept invalid organization numbers": function () {
        refute(validation.organizationNumber('987654321'));
    },
    "should accept valid organization numbers": function () {
        assert(validation.organizationNumber('987654325'));
    }
});

buster.testCase("Birth number validation", {
    "should not accept birth numbers of less than 11 digits": function () {
        refute(validation.birthNumber('2104986822'));
    },
    "should not accept invalid birth numbers": function () {
        refute(validation.birthNumber('12345678910'));
    },
    "should accept valid birth numbers": function () {
        assert(validation.birthNumber('27080679675'));
    }
});

buster.testCase("KID number validation", {
    "should not accept invalid kid numbers": function () {
        refute(validation.kidNumber('123'));
    },
    "should accept valid mod11 kid numbers": function () {
        assert(validation.kidNumber('987654325101403'));
    },
    "should accept valid luhn kid numbers": function () {
        assert(validation.kidNumber('79927398713'));
    },
    "should accept short kid numbers": function () {
        assert(validation.kidNumber(91));
    }
});
