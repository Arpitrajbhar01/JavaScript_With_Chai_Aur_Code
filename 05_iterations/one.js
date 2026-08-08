//  for

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element*2);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop value ${i}`);        
    }
    
}

let myArr = ["Spiderman", "Ironman", "Captain America"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

//  break and continue

// break

for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log("5 is Detected");
        break
    }
    console.log(`The value of i is ${i}`);
    
    
}

// continue

for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log("5 is Detected");
        continue
    }
    console.log(`The value of i is ${i}`);
    
    
}