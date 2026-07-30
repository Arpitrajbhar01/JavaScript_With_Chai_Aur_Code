// Primitive

// 7 Types : String , Number , Boolean , null , Undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.5

const isLOggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)
 
const bigNumber = 345675453454345564n
// const bigNumber = 345675453454345564
console.log(typeof bigNumber);

// Reference (Non Primitive)

// Array, Objects, Functions

// Array

const heroes = ["shaktimaan", "naagraj", "doga"]

let myObj = {
    name: "Arpit",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
    
}