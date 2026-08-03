// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Arpit",
    "full name": "Arpit Rajbhar",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "rajbhararpit398@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof mySym);

// jsUser.email = "Arpit@gpt.com"
// Object.freeze(jsUser)
// jsUser.email = "Arpit@chatgpt.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS user");
}

jsUser.greetingTwo = function () {
    console.log(`Hello ${this.name}`);
}

jsUser.greetingTwo = function () {
    console.log(`Hello ${jsUser.name}`);
}


// console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
