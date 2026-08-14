const clock = document.getElementById("clock")


setInterval(function(){
    let date = new Date().toLocaleTimeString();

    // console.log(date.toLocaleTimeString());
    
    clock.innerHTML = date
    // clock.innerHTML = date.toLocaleTimeString()

}, 1000)