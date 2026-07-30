const name = "Arpit"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);


const gameName = new String("Devil-coc")
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('e'));

let NewString = gameName.substring(0,4)
console.log(NewString);

let anotherString = gameName.slice(-8,-7)
console.log(anotherString);

let newStringOne = "   Arpit     "
console.log(newStringOne);
console.log(newStringOne.trim());

let url = "https://Arpit.com/arpit%20Rajbhar"
console.log(url.replace('%20', '-'));


console.log(url.includes('arpit'));

console.log(gameName.split("-"));
