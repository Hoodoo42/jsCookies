
// calling a function that will create a cookie when the targeted button is clicked
function createCookie(details){
    // Cookies.set is set like an object with a key:value pair set. first parameter being the name, second being the value
    Cookies.set(`buttonClicked`, `yes`);
}

// grabbing the button by its id and setting it into a variable, to then attach an eventListener to that will call the above function
let click = document.getElementById(`buttonClick`);
click.addEventListener(`click`, createCookie);