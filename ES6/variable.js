//In JS we can declare var as variables

{
    var lexicalVar = "hello" // problem: doesnt treat {} as a boundary
    let lexicalValue = "my let var"
    const lexicalConst = "My const variable"

}

// console.log(lexicalValue) cant access outside of scope
console.log(lexicalVar)

//2. No hoisting in let and const
console.log(hoistedVar)
// console.log(hoistedConst)
var hoistedVar = "hoisted var"
let hoistedLet = "hoisted let"
const hoistedConst ="hoisted const"

// 3. declarations and assignments
//  var" redeclaring and reassignment possible whenever
var declaredVar = "some declared var"

// let declaration and assignment isnt possible to redeclare
//but can reassign
let letDeclare  = "let declared"
// let letDeclare = "let redeclared"

//const cannot be redeclared or reassigned
const constDeclare = "const declared"

//note with const objects

const User = {name : "Gia"}



// can reassigned values in const objects but not the object itself 
User.name = "new Name"
console.log(User.name)


for (var index = 0; index < 5; index++) {
    (function IIFE(params){
        setTimeout(function() {
        console.log("index: ",params)
    },1000)
})(index)
}

console.log("index: ",index)


// for (let index =0 ;index< 5 ; index++) {
    // console.log(index)
    
// }