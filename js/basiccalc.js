// import * as calc from '../module/calculator';

// function start() {

//     let x = number(prompt("Give me a number"));
//     let y = number(prompt("Give me a second number"));
//     let z = prompt("What operation do you want to perform? (add, subtract, multiply or divide)");

//     switch (z) {
//         case 'add':
//         alert(calc.add(x, y));
//         break;
//         case 'subtract':
//         alert(calc.sub(x, y));
//         break;
//         case 'multiply':
//         alert(calc.mult(x, y));
//         break;
//         case 'divide':
//         alert(calc.divd(x, y));
//         break;
//         default:
//         alert("Please choose one (add, subtract, multiply or divide)");
//         start();
//     }
// }
// start();

import * as calc from './modules/calculator.js';

function start() {
    
    while (true) {
        let x = Number(prompt('Give me a number'));
        let y = Number(prompt('Give me a number'));
        
        let operation = prompt('What operation would you like to perform?(add, subtract, multiply, divide)'); 
  
        
        if (operation === 'add') {
            alert(calc.add(x,y));
        } else if (operation === 'subtract') {
            alert(calc.subtract(x,y));
        } else if (operation === 'multiply') {
            alert(calc.multiply(x,y));
        } else if (operation === 'divide') {
            alert(calc.divide(x,y));
        } else {
            alert( 'Please choose one add, subtract, multiply or divide');
            start();
        }
        
    }    
}
start();

