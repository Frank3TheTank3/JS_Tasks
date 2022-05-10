/************************/
/***If/Else Statements***/
/************************/

//What number's bigger?

/*
    Write a function named greaterNum that:
        takes 2 arguments, both numbers.
        returns whichever number is the greater (higher) number. 
    Call that function 2 times with different number pairs, 
    and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10."). 
    */


function greaterNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
    }
}

greaterNum(25, 75);

greaterNum(54, 12);

//The World Translator

/*
    Write a function named helloWorld that:
        takes 1 argument, a language code (e.g. "es", "de", "en")
        returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English. 
    Call that function for each of the supported languages and log the result to make sure it works. 

    */

function helloWorld(langCode) {

    switch (langCode) {
        case "es":
            console.log("Hola mundo");
            break;
        case "de":
            console.log("Hallo Welt");
            break;
        case "en":
            console.log("Hello World");
            break;
        default:
            console.log("Hello World");
    }

}

//The Grade Assigner

/*
    Write a function named assignGrade that:
        takes 1 argument, a number score.
        returns a grade for the score, either "A", "B", "C", "D", or "F". 
    Call that function for a few different scores and log the result to make sure it works. 
    */

function assignGrade(numScore) {

    switch (numScore) {
        case numScore > 41:
            return "A";
            break;
        case numScore < 40:
            return "B";
            break;
        case numScore < 30:
            return "C";
            break;
        case numScore < 20:
            return "D";
            break;
        case numScore < 10:
            return "F";
            break;
        default:
            console.log("Not yet graded");
    }


}

assignGrade(75);
assignGrade(38);
assignGrade(22);


//The Pluralizer

/*
    Write a function named pluralize that:
        takes 2 arguments, a noun and a number.
        returns the number and pluralized form, like "5 cats" or "1 dog". 
    Call that function for a few different scores and log the result to make sure it works.
    Bonus: Make it handle a few collective nouns like "sheep" and "geese". 
    */

function pluralize(noun, number) {

    if (number > 1) {
        if (noun == sheep) {
            return number + " sheep";
        }
        else if (noun == goose) { 
            return number + " geese";
        }
        else {
            return number + " " + noun + "s";
        }
    }



}

pluralize("head", 2);
pluralize("goose", 5);