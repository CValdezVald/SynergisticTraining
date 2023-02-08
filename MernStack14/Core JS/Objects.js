//Objects are building blocks in JS with predefined functions
// Objects mainly are key value pairs and can be used to create class structures

//Object creation
// new Object({}), Object.create({})

var User ={
    name: "some name",
    address: "some address",
    getUserDetails : function(){
        return{
            name: this.name,
            address: this.address
        }
    }
}

// console.log(User.getUserDetails())

//Inheritance of JS object
//1. Using new keyword : it clones base object so avoid using the same
//to have inheritance
//not inheriting its copying/cloning the parent
// var Employee = new Object(User)

// Employee.session = "MernStack"
// Employee.name = "emp name"
// Employee.address = " emp address"
// console.log(Employee.getUserDetails())

// Employee.getSession = function(){
//     return this.session
// }

// console.log(Employee.getSession())

// console.log(User.getSession())

//Correct inheritance does not copy User Object
var Employee = Object.create(User)
Employee.name = "emp name"
Employee.session = "actual object inheritance"
console.log(Employee.getUserDetails())

Employee.getSession = function(){
    return this.session
}

// console.log(Employee.getSession())

// console.log(User.getSession())
// console.log(Employee.__proto__)
// console.log(User.__proto__)

var obj1 = {name:"MyName", age:29, salary: 250}
var obj2 = {name: "yourname", address:"new city",skills:"JS"}

// var obj3 = {obj1, obj2}

// obj1.newProp = "asasdas"// not immutable for obj3 can still change
// console.log(obj3)
var obj3 = Object.create({})
// now object is immutable last object
obj3 = Object.assign(obj3,obj2 ,obj1)

console.log(obj3)