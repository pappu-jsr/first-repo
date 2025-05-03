const MyHeroes=["brother","mom","dad"]
const other_heroes=["superman","batman","spiderman"]
const  myArray=new Array(1,2,3,4)
console.log(myArray);

//////   array Method

myArray.push(5)
myArray.push(6)
console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.unshift(9)

console.log(myArray);

myArray.shift()
myArray.shift()
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.includes(2));

console.log(myArray.indexOf(3));

const new_Array= myArray.join()
console.log(new_Array);
console.log(typeof new_Array);

/// slice and  splice

console.log("A",myArray)
const myArry1=myArray.slice(1,3)
console.log(myArry1);

console.log("b",myArray);
const myArry2=myArray.splice(1,3)
console.log(myArry2);
console.log("c",myArray);












