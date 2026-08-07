// Immediately Invoked Function Expression (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);   
})();

( (name) => {
    // UnNamde IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("Arpit")