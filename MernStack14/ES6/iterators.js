let personslist = [
    {id:1, name: "john",savedby: "Captain America"},
    {id:2, name: "alice",savedby: "Ironman"},
    {id:3, name: "roger",savedby: "Captain America"},
    {id:4, name: "adam",savedby: "Ironman"},
    {id:5, name: "alex",savedby: "Spiderman"},
    {id:6, name: "robin",savedby: "Thor"},
];

let personSvdByIronmane = personslist.filter((person)=> person.savedby ==="Ironman")

console.log(personSvdByIronmane)

let personSvdByTwo = personslist.map((person)=> person.savedby ==="Captain America"? person.name: "").filter(p=>p!="")

console.log(personSvdByTwo)


let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag

let containsJS = persons.filter((person)=> person.tags ==="javascript")
console.log(containsJS)
//2. List the same on person using java and put programmer after their name, change the name key to Developer
let javaProgam = persons.map((item)=>{
    if(item.tags ==="java"){
        return {"Developer": "Programmer "+item.name}
    }
}).filter(p=>p!=undefined)
console.log(javaProgam)
//3. If we have anyone with tag python  
//some checks to see if value you are looking for exists
let hasPython = persons.some((person)=>person.tags ==="python")

console.log(hasPython)

//reduce function to count each value in list
let uniqueTags = persons.reduce((preVal,currVal)=>{

    preVal[currVal.tags] =preVal[currVal.tags]? preVal[currVal.tags]+1 :1

    return preVal
},new Set())

console.log(uniqueTags)