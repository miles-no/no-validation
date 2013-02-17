module.exports = (function(){
    var _mod11OfNumberWithControlDigit = function (input) {
        var controlNumber = 2,
            sumForMod = 0,
            i;

        for (i = input.length - 2; i >= 0; --i) {
            sumForMod += input.charAt(i) * controlNumber;
            if (++controlNumber > 7)
                controlNumber = 2;
        }
        var result = (11 - sumForMod % 11);

        return result === 11 ? 0 : result;
    };

    var accountNumber = function (accountNumber) {
        if (!accountNumber) {
            return false;
        }
        accountNumber = accountNumber.toString().replace(/\./g, '');
        if (accountNumber.length !== 11) {
            return false;
        }
        return parseInt(accountNumber.charAt(accountNumber.length - 1), 10) 
                === _mod11OfNumberWithControlDigit(accountNumber);
    };

    var organizationNumber = function(orgNumber){
        orgNumber += '';
        if (!orgNumber || orgNumber.length !== 9) {
            return false;
        }
        return parseInt(orgNumber.charAt(orgNumber.length - 1), 10) 
            === _mod11OfNumberWithControlDigit(orgNumber);
    };

    var birthNumber = function(birthNumber){
        birthNumber = birthNumber.toString();
        if(!birthNumber || birthNumber.length !== 11){
            return false;
        }
        
        var _sum = function(birthNumber, factors){
            var sum = 0;
            for(i = 0, l = factors.length; i < l; ++i){
                sum += parseInt(birthNumber.charAt(i),10) * factors[i];
            }
            return sum;
        };

        var checksum1 = 11 - (_sum(birthNumber, [3, 7, 6, 1, 8, 9, 4, 5, 2]) % 11);
        var checksum2 = 11 - (_sum(birthNumber, [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]) % 11);
        return checksum1 === parseInt(birthNumber.charAt(9), 10) 
                && checksum2 === parseInt(birthNumber.charAt(10), 10);
    };

    var kidNumber = function(kidNumber){
        var kidNumber = kidNumber.toString();
        var controlDigit = kidNumber.charAt(kidNumber.length - 1);
        return parseInt(controlDigit, 10) === _mod11OfNumberWithControlDigit(kidNumber)
                || parseInt(controlDigit, 10) === _luhnValue(kidNumber);
    };

    var _luhnValue = function(number){
        var sum = 0, dbl = 0;
        for(var i = number.length-2; i >= 0; i-=2){
            dbl = (parseInt(number.charAt(i), 10) * 2).toString();
            sum += parseInt(dbl.charAt(0), 10) + parseInt(dbl.charAt(1) || 0, 10);
        }
        for(var i = number.length -3; i >= 0; i-=2){
            sum += parseInt(number.charAt(i), 10);
        }
        sum = sum.toString();
        return 10 - parseInt(sum.charAt(sum.length -1), 10);
    }

    return {
        accountNumber: accountNumber,
        organizationNumber: organizationNumber,
        birthNumber: birthNumber,
        kidNumber: kidNumber
    };
})();