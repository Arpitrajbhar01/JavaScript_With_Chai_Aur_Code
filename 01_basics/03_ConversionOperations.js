// Conversion into Number

// let score = "33"
// let score = "33abc"
// let score = undefined

// const {score} = req.body

// console.log(typeof score);
// console.log(typeof(score));


// let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// "33" => 33 --- this can be coverted easily into Number.
// "33abc" => NaN --- this will return NaN beacause of "abc" cannot be converted into Number.
// true => 1 ; false => 0
// null => 0 --- will be easiy converted into Number
// undefinned => NaN --- undefined returns NaN when coverted into Number.



// Conversion into Boolean

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false  --- Empty string returns false when converted into boolean.
// "Arpit" => true  --- Non-Empty string returns true when converted into boolean.



// Conversion into String

let Number = 33

let sNumber = String(Number)
console.log(sNumber);
console.log(typeof sNumber);

// 33 => "33" --- will be converted easily into string 
