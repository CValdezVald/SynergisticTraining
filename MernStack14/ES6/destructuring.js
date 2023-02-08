// destructuring is used to create less variables using copy of array or json object

// a. Array destructuring
// 1. assigning values without variable init

// let firstName = ["first","second","third"];


//destructured array with an uninit value
// let[firstName, secondName, thirdName,fourthName] = ["first","second","third"];

// console.log(firstName)
// console.log(secondName)
//  console.log(fourthName)
// assigning default values

// 3. rest of the values ...(variable) means copying the rest of the array 
// has to be last element of decon array to use this

let[numb1,numb2, ...numb3] = [1,2,3,4,5,6,7,8,9,10];

console.log(numb1)
console.log(numb2)
console.log(numb3)

//4. variable swapping
let a = "aa", b ="bb";

[a,b] = [b,a];

console.log(a,b)

// b. Object destructuring

// 1. normal object destructuring
let User ={name:"name" , session: "mern" , interest:"scripting"}

let {name, session} = User;

console.log(name);


let StudentTest = {
    firstname : "Put your name",
    address : " ??",
    sessionTopics : {
        covered1 : "CoreJS",
        covered2 : "OOJS"
    }
}

//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest
let{firstname, lastName = "lastName", address, sessionTopics:{covered1,covered2,covered3 = ("ES6")}} = StudentTest;

console.log(lastName)
console.log(covered3)
