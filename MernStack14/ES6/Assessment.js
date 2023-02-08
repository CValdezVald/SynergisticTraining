// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil
// e. 

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]


//1.
let findEvil = (...heroes)=>{
    console.log("all heroes who arent evil:\n")
    for( let value of heroes){
        if(value.isEvil == false)
        console.log(value.name+ " ")
    }
}


findEvil(...heroes)

//unique family names
let uniqueFamName = heroes.reduce((preval, currval)=>{

    preval[currval.family] = preval[currval.family]? preval[currval.family] :1

    return preval
},new Set())

console.log(uniqueFamName)
//adding sir to each hero name
let printSir = heroes.map((item)=>{
    return {"Sir": item.name}
}).filter(p=>p!=undefined)

console.log(printSir)

//who in marvel who isnt evil
let marvelNotEvil = heroes.filter((person)=> person.isEvil ===false && person.family ==="Marvel").filter(p=>p!="")

console.log(marvelNotEvil)

//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let exMap = new Map()

exMap.set("key","key value")
console.log(exMap.get("key"))

exMap.delete("key")
console.log(exMap.get("key"))
exMap.set("key2","anothere string value")
console.log(exMap.entries())


let testSt = new Set(["name","jon","bob"])

console.log(testSt.add("Carlos"))
testSt.delete("name")
console.log(testSt.entries())
console.log(testSt.add("name"))

//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
    let es6Promise = new Promise((resolved,rejected)=>{

    })
//4. Using the promise object at #3 create an async and await feature

//5. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example
function numMul(...n){
    let total = 0;

    total = n.reduce((preval,currval)=>{
        
        return preval+currval
    },0)

    return total
}
let arr = [1,2,3,4,5,6,7]
console.log(numMul(...arr))
// 6. Print the last name through destructuring and add a contact number:9119119110 as well
// const person = {
//     userDetails :{
//         first: "FirstName",
//         last: "LastName"
//     }
// }



//7. Give me an example of const data manipulation

//8. What is the difference between for-of and for-in show with examples
// for in loop used on objects
let user = {name:"Carlos",task:"coding",age: 25}

for(const items in user){
    console.log(items)
}
//for of loop used for strings and arrays
for(let numb of arr){
    console.log(numb)
}
//9. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded

//10. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first to fails, give me an example of cocurrent promises
//   with which we can achieve such scenarios