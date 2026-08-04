function sayMyName(){
    
    console.log("A");
    console.log("r");
    console.log("p");
    console.log("i");
    console.log("t");

}

// sayMyName()

function addTwoNumbers(number1, number2) { // here number1 and number2 is parameter
    console.log(number1 + number2);
    const sum = number1 + number2
    return (sum)
}

// addTwoNumbers(10,12) // Here 10 and 12 is arguments
let result = addTwoNumbers(10,12)
// console.log(result)

function loginUserMessage(username = "Sam") {
    if (username === undefined) { // !username | username === undefined both are the same things
        
        console.log("Please Enter the UserName :");
        return 
    }
    else{
        return `${username} just logged in`
    }
}

// let printMsg = loginUserMessage("Arpit")
// console.log(printMsg);

console.log(loginUserMessage("Arpit"));
