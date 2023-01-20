

var user = {name:"test",interest:"function programming"}

var user2 = {name:"test2",interest:"Core programming"}

function GetDetails() {
    console.log(this.name)
    console.log(this.interest)
}

GetDetails();

// Apply : is used the same way call is used but, we can pass the parameters in the form of array
// Apply : is the inbuilt method used to change the context of a function at runtime, but it accepts function parameters in array format

var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"}
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"}

function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback} 
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `)

    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}
    `)
}

GetVehicleInfo.apply(BMW, ["Yes","5","4","Yes","US"])
GetVehicleInfo.apply(SomeCar, ["No","3","4","Yes","Unknown"])

//Print student information using call and apply and try to see how we get these functions executed immediatly
var stud1 = {name: "student1",lastName:"lastName1",id:"12435",age:"15"}
function StudentInfo(validId, classroom){
    if(validId){
        console.log(
            `First Name:${this.name} 
            Last Name: ${this.lastName}
            ID: ${this.id}
            Age: ${this.age}
            classroom: ${classroom}`
        )
    }else{
        console.log("invalid ID")
    }
}
//StudentInfo.apply(stud1,[true,"homeroom"])

var UserInfo ={
    nameF: "Carlos",
    age: 21,

    getUserInfo: function() {
        
        setTimeout(function () {
            console.log(
                `name: ${this.nameF}\n
                age: ${this.age}
                `)
            
        }.bind(UserInfo),1000)
    }
}
//call and apply doesnt work in this context due to the nature of callbacks not holding information more than a second
//when theres a delay to provide context use bind instead

UserInfo.getUserInfo()

//TODO create 3d array to print via for loop and enhanced for loop