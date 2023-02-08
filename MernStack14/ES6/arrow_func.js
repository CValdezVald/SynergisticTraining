let Student = {
    name: "name",
    stdId: "24234",
    school:"high school",

    printStudent: function(){
        console.log(`Student details:\nName: ${this.name}\nID: ${this.stdId}\nSchool: ${this.school}`)

        let that = this

        setTimeout(()=>{
            console.log("Inner context")
            console.log(`Student details:\nName: ${that.name}\nID: ${that.stdId}\nSchool: ${that.school}`)
        },2000)
    }
}

Student.printStudent();
