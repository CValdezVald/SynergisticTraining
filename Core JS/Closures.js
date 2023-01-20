//OOP fundamentals
// 1. Inheritance- constructor functuion is es5 and then classes iun es6, prototype is the only way
// 2. Encapsulation - data hiding can be done through closures withg the help of access modifiers
// 3. Polymorphism - Overriding(it suppors in function as well in classes) and Overloading
// 4. abstraction - not required in js since we define the object before creation

//Closures: a phenomenom when we have two nested functions and the parent function returns the child function

function Account(acctNo, acctName){
    var balance = "3000"
    var accType = "Credit"
    var pwdEncrypted = "!43gd5"

    var childFunc = function (isAdmin, hasPwd) {
        var returnObj = {
            balance,
            accType,
            acctName,
            acctNo
        }
        if (hasPwd) {
            return returnObj
        }else{
            return "Please input password"
        }
    }

    return childFunc

}

var childObj = Account("123456","Pavani")(true,1)//chain execution
console.log(childObj)


//TODOfgh
//create a closure for Student function with encapsulating some set of data