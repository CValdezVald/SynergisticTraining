// 

function Behaviour(callBack,isGreater, name){
    isGreater?
    callBack(name):
    console.log("No name present")
}

function func(name) {
    console.log(name)
}

//calling function with certain parameters
// Behaviour(func, true, "name")


//callback using arithmetic

function Addition(p1,p2) {
    return p1+p2
}

function Multiply(p1,p2) {
    return p1*p2
}

function Arithmetic(callBack, p1,p2) {
    return callBack(p1,p2)
}

// console.log(Arithmetic(Addition,5,6))
// console.log(Arithmetic(Multiply,5,6))

var e = 15

function sum1(a) {
    return function sum2(b) {
        return function sum3(c) {
            return function sum4(d) {
                return a+b+c+d+e
            }
        }
    }   
}

var totalSum = sum1(2)(3)(4)// chain execution
console.log(totalSum(5))

//functionm to generate differen details of an account using callbacks
//like - account balance and account details
function User(name,pwd) {
    if (pwd) {
        if(name == "user1")
        return "account type: Business\naccount balance:2000"
    } else {
        return "account type: Personal\naccount balance:500"
    }
}


function fetchInfo(callBack,name,pwd) {
    return callBack(name,pwd)
}

console.log(fetchInfo(User,"user1",1))