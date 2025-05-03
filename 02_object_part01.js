// singleton\
// Object.creat
// object literals

const mySym=Symbol("key1")

const jsUser={
    name:"priyansh",
    "full name":"priyansh yadav",
    [mySym]:"mykey",
    age:22,
    Email:"priyans123@gmail.com",
    location:"ranchi",
    isloggedIn:false,
    LastLogIn:["monday","staturday"]
}
// console.log(jsUser.Email);
// console.log(jsUser["Email"]);
// console.log(jsUser["full name"]);

console.log(jsUser[mySym]);

jsUser.Email="kumar@gmail.com"
// Object.freeze(jsUser)
// jsUser.Email="yadav@gmail.com"
// console.log(jsUser.Email);

jsUser.greeting=function(){
    console.log("hello priyansh");

}
jsUser.greeetingTwo=function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeetingTwo());







