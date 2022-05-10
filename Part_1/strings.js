
/*************/
/***Strings***/
/*************/

//DrEvil

/*
Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', 
except it will add '(pinky)' at the end if the amount is 1 million. 
For example:

*/

function DrEvil(dollars) {

    if (dollars > 1000000) {
        return amount + " dollars (pinky)";
    }
    else {
        return amount + " dollars";

    }

}

//MixUp

/*
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings 
(separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings 
are at least 2 characters long. For example: 
*/

function mixUp(string1, string2) {
    return string2.slice(0, 2) + string1.slice(2) + " " + string1.slice(0, 2) + string2.slice(2);

}


//FixStart

/*

Create a function called fixStart. It should take a single argument, a string, and return a version where 
all occurences of its first character have been replaced with '*', except for the first character itself. 
You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(passedString) {
    var c = passedString.charAt(0);
    return c + passedString.slice(1).replace(new RegExp(c, 'g'), '*');
}

//Verbing

/*

Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
*/

function verbind(givenString) {

    if (givenString.length >= 3) {
        if (givenString.slice(-3) == "ing") { return givenString + "ing" }
        else { return givenString + "ly" };
    }

}

//Not Bad

/*
    Create a function called notBad that takes a single argument, a string.
    It should find the first appearance of the substring 'not' and 'bad'.
    If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' 
    substring with 'good' and return the result.
    If it doesn't find 'not' and 'bad' in the right sequence (or at all),
     just return the original sentence. 

    */

function notBad(givenString) {
    var notIndex = givenString.indexOf('not');

    var badIndex = givenString.indexOf('bad');

    if (notIndex == -1 || badIndex == -1 || badIndex < notIndex) 
    return givenString;
    
    return givenString.slice(0, notIndex) + 'good' + givenString.slice(badIndex + 3);
}