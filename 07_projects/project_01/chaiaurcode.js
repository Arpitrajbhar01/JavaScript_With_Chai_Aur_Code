const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

// buttons.forEach( (button) => {
// console.log(button)
// button.addEventListener( 'click', (e) => {
// console.log(e)
// console.log(e.target);
// const color = e.target.id

// // console.log(color);
// // console.log(typeof color);

// switch (color) {
//     case "grey":
//          body.style.backgroundColor = color
//         break;

//     case "white":
//         body.style.backgroundColor = color
//         break;

//     case "blue":
//         body.style.backgroundColor = color
//         break;

//     case "yellow":
//         body.style.backgroundColor = color
//         break;

//     default:
//         break;
// }

// } )
// } )

// ------------------- using if -----------------------

buttons.forEach( (button) => {
    addEventListener('click', (e) => {
       const color = e.target.id
       if (color === "grey") {
    body.style.backgroundColor = e.target.id
}

if (color === "white") {
    body.style.backgroundColor = color
}

if (color === "blue") {
    body.style.backgroundColor = e.target.id
}

if (color === "yellow") {
    body.style.backgroundColor = e.target.id
}
    })
} )