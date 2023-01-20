
var funcAsClass = function(name, age, address){

    this.name = name,
    this.age = age,
    this.address = address

    this.getUserDetails = function(isAdmin){
        return{
            name: this.name,
            age: this.age,
            address:this.address,
            session: this.session
        }
    }
}

funcAsClass.prototype.session = "core javascript";//allows extension with prototype

var funcObj = new funcAsClass("Person",25,"Earth")

console.log("User with detail is ",funcObj)

//create new constructor function with user details
var UserFunc = function(name,job,pay){
    this.name =name,
    this.job = job,
    this.pay = pay

    this.getUserDetails = function(details) {
        return{
            name: this.name,
            job:this.job,
            pay: this.pay,
            location:this.location
        }
    }
}

UserFunc.prototype.location = "US"

var userObj = new UserFunc("userOne","Dev",75000)
console.log(userObj.getUserDetails())