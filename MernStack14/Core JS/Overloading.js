//Overloading: act of having multiple functions with the same name with different parameters
//doesnt exist in JS only overwriting so last function created will be used in hoisting
Calculate(5)

function Calculate() {
    console.log("No params")
}

Calculate()

function Calculate(a){
    console.log("One Param", a)
}

Calculate(5,6)

function Calculate(a,b) {
   
    console.log("Two param "+a + b)
}

Calculate(10)