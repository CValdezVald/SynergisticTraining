//Datatypes are used to declare different types of variables or identifiers
/*
DataTypes for JS
*/


console.log(SomeValue)// before declaration is called hoisting if present
//console.log(SomeValue1)// not defined will throw an error



var SomeValue = null // null is an object dataType

//function to check dataTypes
function findType(input){
    console.log("value:", input)
    console.log("type: "+typeof input)
}

//Symbol data type
//lets you use your own datatype
var mySym = Symbol("new value")

findType(mySym)
findType("some String")
findType(2345)
findType()
