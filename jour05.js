// Imports
console.log(process.argv);
var prompt = require("prompt");

// Import Internal files
// require ("table-utils.js");


//  Exo : 01
function calculateTest(num1, operator, num2) {
    if (operator == '+') {  
    result = num1 + num2; 
    }  else if (operator == '-') {  
    result = num1 - num2;  
    }  else if (operator == '*') { 
    result = num1 * num2;  
    }  else {  
    result = num1 % num2;  
    }  

    // (calculate(5, '*', 4));
    // console.log(result);
    // console.log(parseInt(process.argv[2]) * parseInt(process.argv[4]));
}

function calculate() {
    if(parseInt(process.argv[2]) * parseInt(process.argv[4])) {
        console.log(parseInt(process.argv[2]) * parseInt(process.argv[4]));
    } else {
        console.log("error !");
    }
}

// calculate();


//  Exo : 02
function multiply() {
    let chiffreSaisi = parseInt(process.argv[2]);

    for (var i = 1; i <= 10; i++){
        var resultat = chiffreSaisi * i;
        console.log(chiffreSaisi + " * " + i + " = " + resultat);
    }
}

// multiply();


//  Exo : 03
// addition();


//  Exo : 04

var mysteryNum  = (Math.floor(Math.random() * (100 - 1)) +1);
// console.log(mysteryNum);

prompt.start();  // démarre le prompt

function play() {

    function displayPrompt() {
        prompt.get({ 
            description: "Quel est le nombre mystère ?",
            validator: /^[1-9]\d*$/,
            
        }, 
        function (err, mysteryNum) { 
          if (mysteryNum < 10) { 
            console.log("C'est plus !");
          } else {
            displayPrompt(); // relance le prompt si la saisie n'est pas valide
          }
        });
      }

    //   displayPrompt();
}

play(mysteryNum);