//const tinder=new object()    // this for singleton method
const tinder={}     // this for literals method

tinder.id="123ab"
tinder.Email="priyansh@gamil,com"
tinder.name="priyansh yadav"
tinder.isloggedIn=false

// console.log(tinder);

const regularuser={
    Email:"anshyadav@gmail.com",
    fullName:{
         UserName:{
            firstName:"Ansh yadav",
            Email:"ansh123yadav@gmaol.com"
        }   
    }
}

// console.log(regularuser.fullName.UserName.Email);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3={...obj1,...obj2}
// console.log(obj3);

const user=[
    {
        id:1 ,
        Email:"p@gmail.com"
    },
    {
        id:2,
        Email:"pa@gmail.com"
    },
    {
        id:3 ,
        Email:"priyansh@gmail.com"
    },
    {
        id:4,
        Email:"p@gmail.com"
    }

]
// console.log(user[2].Email); // to acces object fron array

// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty("isloggedIn"));

/////// **** object destructure  *******

const course={
    courseName : "java script",
    price : "free",
    courseInstructor : "hitesh"

}
//  console.log(course.courseInstructor);

const {courseInstructor : Instructor}=course  ///// object destructure
console.log(Instructor);

//  {
//             "name": "hitesh",
//             "coursename": "js in hindi",
//             "price": "free"
//  }
//// work as json
 [

    {},
    {},
    {}

 ]

