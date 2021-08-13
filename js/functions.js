
//--- PRACTICE WITH FUNCTIONS ---

function halfNumber(num) {
    half = num/2;
    return ("Half of " + num + " is " + half);
}
halfNumber();

function squareNumber(num) {
    sqaure = num * num;
    return ("The result of squaring the number " + num + " is " + sqaure);
}
squareNumber();

function percentOf(x, y) {
    percent = ((x / y)*100);
    return ( x + " is " + percent + "% of " + y);
    // return(percent);
}
percentOf();

function findModulus(x,y) {
    mod = x % y;
    return (mod + " is the modulus of " + x + " and " + y);

}
findModulus();


// let num1, num2, num3;

// function calc(num1, num2, num3) {
//     num1 = prompt("Give me a number");
//     num2 = prompt("Give me a 2nd number");
//     num3 = prompt("Give me a 3rd number");

//     for ( i = 1; i < arguments.length; i++) {
//         sum = num1 + num2 + num3;
//     }
    
//     return ("The sum of the numbers are " + sum);

// }
// calc();