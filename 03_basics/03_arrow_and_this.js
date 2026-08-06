const user = {
    username: "Arpit",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} welcome to website`);
        // console.log(this); 
        
        // this keyword in JavaScript

        // this refers to the object that is currently calling/executing the function. Its value is decided at call time, based on how the function was invoked — not where it was written

        // this refers to the object that is currently "executing" or "calling" the function. Its value depends on how the function is called, not where it's defined.
        
    }
}

// user.welcomeMessage();
// user.username = "appu"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username = "Arpit"
//     console.log(this.username);
    
// }

// chai()

// const chai = function chai (){
//     let username = "Arpit"
//     console.log(this.username);
    
// }

// const chai = ()=>{
//     let username = "Arpit"
//     console.log(this.username);
    
// }


// chai()

const addTwo = (num1, num2) =>{
    return num1 + num2
}

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

// const addTwo = (num1, num2) =>  ({username: "Arpit"})

console.log(addTwo(4, 3));

const myArr = [2, 5, 8, 9, 4, 6]

myArr.forEach()

// Arrow functions

// A shorter syntax for writing functions in ES6, introduced to simplify function expressions

// Arrow functions are shorter, and they don't have their own this, arguments, or new — they borrow this from where they're defined, not where they're called.