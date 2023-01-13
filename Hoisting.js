//Hoisting: JS compiuler reads all variables and functions pulls them on top of the file or function
//assigns them repsective default valies, that way we can access the variable before declaration
// makes JS a compiled language

// 1. creates the snapshot on top of the file an function
// 2. variables: undefined
// 3. functions: function definition

// console.log(identifier);

var identifier = "some Value"

// console.log(identifier)

// console.log(printName())// gets hoisted with function definition

function printName(){
    console.log("the Name")// function definition
       // function definition
}

// console.log(printName())

// console.log(funcExpression())//throws an exception due to the nature of it being a var not a function
console.log(funcExpression)// this will print undefined 
var funcExpression = function(){
    console.log("Function expression Hoisted!!")
}

console.log(funcExpression())//
var globalVar = "global value"


// Hoisting using global variables
//will check within its scope before checking outside its scope
function Scope() {

    console.log(globalVar)// undefined hoisted
    // var globalVar = "no longer global"
    var localVar="local var"

    console.log(globalVar)// prints value within the scope
}

Scope()