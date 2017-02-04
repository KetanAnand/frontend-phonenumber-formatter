
/**
 * Created by ketan on 04/02/2017.
 */

function formatPhoneNumber(inputPhoneNumber) {
    var response, strippedPhoneNumber,formattedPhoneNumber ;
    try {
        validatePhoneNumberLength(inputPhoneNumber,5,30);
        strippedPhoneNumber = inputPhoneNumber.replace(/[^0-9]/g, '');
        // Adds a dash after every 3 numbers for phone numbers which do not end with a single digit after grouping numbers in 3s.
        if (strippedPhoneNumber.length % 3 !==1) {
            formattedPhoneNumber = strippedPhoneNumber.replace(/(.{3})(?!$)/g, "$1-");
        }
        else {
            // For phone numbers which end with a single digit after grouping numbers in 3s.
            var firstPartPhoneNumber = strippedPhoneNumber.substr(0, strippedPhoneNumber.length-4);
            var secondPartPhoneNumber = strippedPhoneNumber.substr(strippedPhoneNumber.length-4,strippedPhoneNumber.length);
            formattedPhoneNumber = firstPartPhoneNumber.replace(/(.{3})/g, "$1-")+secondPartPhoneNumber.replace(/(.{2})(?!$)/g, "$1-");
        }
        return formattedPhoneNumber;
    }
    catch(err) {
        return err;
    }

    function validatePhoneNumberLength(inputPhoneNumber, minimumLength,maximumLength) {
        if (inputPhoneNumber.length < minimumLength) throw "is too short. Has to be atleast 5 digits.";
        if (inputPhoneNumber.length > maximumLength) throw "is too long. Has to be atmost 30 digits.";
    }
}