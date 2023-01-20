//Each file in JS is termed as module


// object literals
    var FirstUser = {
        fName: "first User",
        lName: "firt  User Last",
        getuserDetail: function(params){
            return {Name : this.fName +" " + this.lName}
        }
    }
    
    var SecondUser = {
        fName: "Second User",
        lName: "Second User Last",
        getUserLastName: function(params){
            return {Name: this.lName}
        }
    }

    var ThirdUser ={
        fName: "Carlos",
        lName: "Valdez",
        getUserInfo: function(params){
            return{Info: this.fName+" "+this.lName}
        }
    }


    // module.expoorts ={
        // FirstUser : FirstUser
    // }

    //short hand method of exporting objects
    module.exports = {FirstUser, SecondUser, ThirdUser}