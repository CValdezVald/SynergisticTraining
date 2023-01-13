// Function : JS is functiona programming language and its pwower lies in the spirits of functions or variations of functions
// As mos of the essential feature are built through functions so it is termed as - first class member citizens

// keyword - name of the functuion - paranthesis - parameters= definition of the function
// function name(params) {
    //function definition 
// }
// pure function - it should alwayus return a value

// 1. Named function
function NoReturn(a , b ) {
    console.log("this is a named function "+(a+b) )
}
// NoReturn(1,2);
// NoReturn(2);

// 2. IIFE - Immediately invocable function expression
//incapsulated prived function one time execution
(function IIFEFunc(sessionName) {
    console.log("IIFE : ",sessionName)
})("MERNStack -IIFE")

// invocation
// IIFEFunc("MERNStack")

// 3. Function expressions
var funcExpression = function( a,b){
    return a+b
}
// console.log(funcExpression(1,2))

// 4. Constructor function
function MyClass(fname,lname){
    this.fname = fname,
    this.lname - lname,

    this.getFirstName = function(){
        console.log(this)
        return this.fname
    }
}

var classFunc = new MyClass("first Name", "last Name")
// console.log(classFunc.getFirstName())//

// 5. nested functions
// example for this would be passing aunthentication before moving on to the next page
function NestingFunctions(params) {
    function FuncA(params) {
        function FuncB(params) {
            
        }
    }
    
}