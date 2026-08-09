const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item)=> {
//     console.log(item);
// } )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
} )

const myCoding = [
    
    {
        languageName: "JavaSccript",
        languageFileName: "js"
    },

    {
        languageName: "Python",
        languageFileName: "py"
    },

    {
        languageName: "Ruby",
        languageFileName: "rb"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
    
} )