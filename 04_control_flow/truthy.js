const userEmail = [] //"Ar@gmail.com"  

if (userEmail) {
    console.log("Got user Email");
} else{
    console.log("Don't have user Email");
    
}

// falsy values 

// false , 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 

// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // it will return 5
// val1 = null ?? 10 // it will return 10
// val1 = undefined ?? 15 // it will return 15
// val1 = null ?? 10 ?? 20 // it will return 10 ,first value will be assigned after null.




// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

