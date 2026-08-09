const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(`key of the object is ${key} and the value of the key is ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java"]

for (const key in programming) {
    console.log(programming[key]);
}

// Map is not iterable

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in map) {
//    console.log(key);
// }