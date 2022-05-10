/***************/
/***For-Loops***/
/***************/


//The even/odd reporter

/*
Write a for loop that will iterate from 0 to 20. For each iteration, 
it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even"). 
*/

for (let index = 0; index < 20; index++) {
    if (index% 2 == 0)
    {
        console.log(index + "is even");
    }
    else
    {
        console.log(index + "is odd");

    }
    
}

//Multiplication Tables

/*
Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, 
it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total). 

*/

for (let index = 0; index < 10; index++) {
    console.log(index * 9);
}

//The Grade Assigner

/*
Check the results of your assignGrade function from the conditionals exercise by logging every value from 
60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, 
you got an A.", etc., logging each grade point in the range. 
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


for (let index = 0; index < array.length; index++) {
    assignGrade(index);
    
}