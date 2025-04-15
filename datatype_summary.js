// primitive
// 7 type : String, Number, boolean, null, undefined, symbol, BigInt

const value=33
const scoreValue=33.4

const name="priyansh"

const isloggedIn=false
const outsideTemp=null

let state;


let Id=Symbol("123")
let anotherId=Symbol("123")

console.log(Id === anotherId)

const bigNumber=123456789023435443454334543345243432542353535n

console.log( typeof bigNumber);
console.log(typeof anotherId)
console.log(typeof state)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)

//reference (non-primitive)

// array, object, funtion

let myarr=["priyansh","pawan yadav","asha"]

let myObj={
    name:"priyansh",
    age:21,
}

let myFunc=function(){
    console.log("hello world")
}

console.log( typeof myarr)
console.log(typeof myObj);
console.log(typeof myFunc)

