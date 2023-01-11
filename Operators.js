//Operators in JS

// &&(and) , ||(or) , !(not), < , > , =, == , ===, =>, ... 

var validVoter = true;
var voterAge = "18";

if (validVoter && voterAge == 18) { // compares values not types
    console.log("A valid voter, can vote!!")
} else{
    console.log("A InValid voter")
}


//ternary operator
//condition ? do something when condition is true ":" on condition false

validVoter && voterAge == 18 ?
console.log("A valid voter, can vote!!")
:
console.log("A InValid voter")