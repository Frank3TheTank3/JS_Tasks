/***************/
/***Variables***/
/***************/


//The Fortune Teller

var numKids  = 1;
var partner  = 'Meghan Fox';
var geoLocation = 'Zurich';
var jobTitle = 'Terminator';

var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
console.log(future);

//The Age Calculator

/*
Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values. 
*/

var birthYear = 1990;
var futureYear = 2042;

var possibleAges = 'I will be either' + (futureYear - birthYear) + or (futureYear-1 - birthYear) in futureYear;
console.log(possibleAges);

//The Lifetime Supply Calculator

/*
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

    Store your current age into a variable.
    Store a maximum age into a variable.
    Store an estimated amount per day (as a number).
    Calculate how many you would eat total for the rest of your life.
    Output the result to the screen like so: "You will need NN to last you until the ripe old age of X". 
    */

var currentAge = 31;
var maxAge = 90;
var snackSupplyPerDay = 3;
var timeTillDeath = maxAge - currentAge;
var numberOfSnacks = timeTillDeath * snackSupplyPerDay;
var snackResult = "You will need"+ numberOfSnacks +"to last you until the ripe old age of"+maxAge;
console.log(snackResult);


//The Geometrizer

/*Calculate properties of a circle, using the definitions here.

    Store a radius into a variable.
    Calculate the circumference based on the radius, and output "The circumference is NN".
    Calculate the area based on the radius, and output "The area is NN". 

    */

var rad = 25;
var circum = rad * Math.PI;
var resultCircum = "The circumference is" +circum;
console.log(resultCircum);

//Area of a circle = π * r2

var area = Math.PI * (Math.pow(rad, 2));
var resultArea = "The area is" + area; 
console.log(resultArea);

//The Temperature Converter

/*
It's hot out! Let's make a converter based on the steps here.

    Store a celsius temperature into a variable.
    Convert it to fahrenheit and output "NN°C is NN°F".
    Now store a fahrenheit temperature into a variable.
    Convert it to celsius and output "NN°F is NN°C." 

    The temperature T in degrees Fahrenheit (°F) is equal to the temperature T in degrees Celsius (°C) times 9/5 plus 32:

T(°F) = T(°C) × 9/5 + 32 
    */

var celsius = 35;
var fahr = celsius * (9/5) + 32;
var resultFahr = celsius + "°C is " + fahr + "°F";
console.log(resultFahr);
var newFahr = 110;
var newCelsius = ((newFahr - 32)*5)/9;
var resultCelsius = newFahr + "°F  is " + newCelsius + "°C";
console.log(resulresultCelsiusArea);