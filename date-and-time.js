let myDate=new Date()
//console.log(myDate)
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON())
// console.log(myDate.toISOString());

//  MyCreatedDate=new Date(2023,0,17)
// console.loglet(MyCreatedDate.toDateString());

// let MyCreatedDate=new Date(2023,0,17,5,3)
// console.log(MyCreatedDate.toLocaleString());
// console.log(MyCreatedDate.toDateString());

let MyCreatedDate=new Date("01-17-2024")
// console.log(MyCreatedDate.toLocaleString());
// console.log(MyCreatedDate.toDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(MyCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.toDateString());
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.toLocaleString("default",{
    weekday:"long"
}));
// newDate.toLocaleString("default",{
//     weekday:"long"
// })











