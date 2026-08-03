// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userfullname: {
            fisrtname: "Arpit",
            lastname: "Rajbhar"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign(obj1, obj2) // not a good  practice returns the same result but its not a good practice.
// const obj3 = Object.assign({}, obj1, obj2) // better to use this syntax, its a good practice.

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {id: 1,
        email: "a@gmail.com"
    }
    {id: 1,
        email: "a@gmail.com"
    }
    {id: 1,
        email: "a@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

