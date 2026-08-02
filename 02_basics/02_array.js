const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const alliance_heroes = marvel_heroes.concat(dc_heroes)
// console.log(alliance_heroes);

const alliance_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(alliance_new_heroes);

const an_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const uan_array = an_array.flat(3)
console.log(uan_array);


console.log(Array.isArray("Arpit"));
console.log(Array.from("Arpit"));
console.log(Array.from({name: "Arpit"})); // returns Empty string

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
