// var c=300;
// let b=100;
// const a=200;

if(true){
    // var c=500;
let b=800;
const a=900;
// console.log("inner: ",a);
} 

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="priyansh"
    function two(){
        const website="website"
        // console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const username="priyansh"
    if(username==="priyansh"){

        const website="learning js"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// interesting 

console.log(addone(5))
function addone(num){
    return num+1
}

// console.log(addtwo(5)) its not allowed 

const addtwo=function(num){
    return num+1
}
// console.log(addtwo(5))
