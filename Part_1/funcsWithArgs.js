
/******************************/
/***Function With Arguments ***/
/******************************/

//The Fortune Teller

/*
Why pay a fortune teller when you can just program your fortune yourself?

    Write a function named tellFortune that:
        takes 4 arguments: number of children, partner's name, geographic location, job title.
        outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." 
    Call that function 3 times with 3 different values for the arguments. 
    */

function tellFortune(numChildren, partnerName, geoLocation, jobTitle)
{
    document.writeln("You will be a "+jobTitle+" in "+geoLocation+", and married to "+partnerName+" with"+ numChildren+" kids." );
}

tellFortune(2, "Diana", "England", "Dataspecialist");
tellFortune(17, "Kiara", "Irland", "Baker");
tellFortune(8, "Selma", "Germany", "Marketingexpert");


//The Puppy Age Calculator

/*
You know how old your dog is in human years, but what about dog years? Calculate it!

    Write a function named calculateDogAge that:
        takes 1 argument: your puppy's age.
        calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
        outputs the result to the screen like so: "Your doggie is NN years old in HUMAN? years!" 
    Call the function three times with different sets of values.
    Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

    */

function calculateDogAge(puppyAge)
{
    let dogAge =  puppyAge * 7;
    document.writeln("Your doggie is"+ dogAge +" years old in human years!" );

}

calculateDogAge(1);
calculateDogAge(4);
calculateDogAge(2);


//The Lifetime Supply Calculator

/*
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

    Write a function named calculateSupply that:
        takes 2 arguments: age, amount per day.
        calculates the amount consumed for rest of the life (based on a constant max age).
        outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X" 
    Call that function three times, passing in different values each time.
    Bonus: Accept floating point values for amount per day, and round the result to a round number. 
    */

    let maxAge = 90;

function calculateSupply(age, amountDaily) {

    let restOfLife = maxAge - age;
    let amountConsumed = amountDaily / restOfLife;
    document.writeln("You will need "+ amountConsumed +" to last you until the ripe old age of " + maxAge);


}

calculateSupply(5, 30);
calculateSupply(2, 500);
calculateSupply(20, 9);


//The Geometrizer

/*
Create 2 functions that calculate properties of a circle, using the definitions here.

Create a function called calcCircumfrence:

    Pass the radius to the function.
    Calculate the circumference based on the radius, and output "The circumference is NN". 

Create a function called calcArea:

    Pass the radius to the function.
    Calculate the area based on the radius, and output "The area is NN". 

    */

function calcCircumfrence(radius){
    let circumference = 2 * radius * Math.PI;
    document.writeln("The circumference is" + circumference);

}


function calcArea(radius){
    let area = radius * radius * Math.PI;
    document.writeln("The area is" + area);

}

calcCircumfrence(5);
calcArea(15);


//The Temperature Converter

/*
It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

    Store a celsius temperature into a variable.
    Convert it to fahrenheit and output "NN°C is NN°F". 

Create a function called fahrenheitToCelsius:

    Now store a fahrenheit temperature into a variable.
    Convert it to celsius and output "NN°F is NN°C." 

    */

function celsiusToFahrenheit(c){

    let f = c * (9/5) + 32;
    document.writeln(c + "°C is "+ f + "°F");


}

function fahrenheitToCelsius(fa){

    let ce = ((fa - 32)*5)/9;
    document.writeln(fa + "°F is "+ ce + "°C");


}

celsiusToFahrenheit(25);
fahrenheitToCelsius(100);


