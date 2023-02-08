//create an account object with details like account number, amount, getBalance as a function
 
var account  ={
    accNumber : 54321,
    amount: 0,

    getBalance : function(param){
        return {amount: this.amount}
    }
}

//using account object create new object with name loan account, add new properties loantype and loanamount, getloanDetails
var loanAccount = Object.create(account)
loanAccount.loantype ="house"
loanAccount.amount = 100000
loanAccount.getLoanDetails = function(){
    return {AccountNumber: loanAccount.accNumber, LoanType:loanAccount.loantype, loanAmount:loanAccount.amount}
}

console.log(loanAccount.getLoanDetails())
//create three different addresses of a user in three different objects, merge them into one object
var userOne ={name: "nameOne", skill:"softSkill"}
var userTwo ={lastName: "nameTwo", Techskill:"Java"}
var userThree ={middleName: "nameThree", Age: 30}

var userFour = Object.create({})
userFour = Object.assign(userFour,userOne,userTwo,userThree)

console.log(userFour)
//create a null prototype object
var objNull = Object.create(null)
console.log(objNull)