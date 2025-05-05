const user={
    username:"priyansh",
    price:900,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="ansh",
//     price=900
//     console.log(this.username)
// }
// chai()

// const chai=function(){
//     let username="priyansh yadav"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {
    let username="priyasnh kumar"
    console.log(this.username);
    
}

// chai()

// const addTwo=(num,num1){
//     return num+num1
// }

// const addTwo= (num,num1) => (num+num1)
const addTwo= (num,num1) => ({username:"ranjna"})
// console.log(addTwo(4,5));

const Myarray=[1,2,3,4,5]

// Myarray.forEach()


