function SayMyName() {

    console.log("p");
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
   
}

// SayMyName()

function addTwoNumber(Number1,Number2){
    let sum=Number1+Number2
    return sum
    // return Number1+Number2
}
const result=addTwoNumber(5,7)
// console.log(result);

function logInUserMessage(UserName="sam"){
    if(!UserName){
        console.log("PLEASE ENTER A NAME")
        return
    }

    return `${UserName} just logged in`
    
}

// console.log(logInUserMessage("priyansh"));

function CalculateCartValue(val1,val2,...num){
    return num
}
// console.log(CalculateCartValue(200,400,500,1000))

const user={
    username:"priyansh",
    age:22
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
    
}

// handleObject(user)
// handleObject({
//     username:"ansh",
//     age:24
// })

const myArray=[200,300,400,500]

function secondValueofArray(getArray){
    return getArray[1]
}
// console.log(secondValueofArray(myArray));
console.log(secondValueofArray([100,900,1000,600,400]));
