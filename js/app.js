
// calling a function that will create a cookie when the targeted button is clicked
// Cookies.set is set like an object with a key:value pair set. first parameter being the name, second being the value

function createCookie(details){
    Cookies.set(`buttonClicked`, `yes`);
}

// grabbing the button by its id and setting it into a variable, to then attach an eventListener to that will call the above function
let click = document.getElementById(`buttonClick`);
click.addEventListener(`click`, createCookie);




// creating a variable to check state of the button value. 
let cookieChecker = Cookies.get(`buttonClicked`);
    if(cookieChecker !== undefined){
        document.body.insertAdjacentHTML(`beforeend`, `<h1>You baked a cookie!</h1>`)
    }




// this code will set a variable for the new element and attach it to an eventListener that will delete the targeted element when the new element is clicked
    function deleteButtonClickedCookie(details){
    Cookies.remove(`buttonClicked`);
}

let redButton = document.getElementById(`redButton`);
redButton.addEventListener(`click`, deleteButtonClickedCookie);



// this code creates a variable for the new button and attaches an eventListner that will update(overwrite) the buttonClicked value to no, when new button is clicked
function updateCookie(details){
    Cookies.set(`buttonClicked`, `no`);
}


let updateCookieButton = document.getElementById(`updateCookie`)
updateCookieButton.addEventListener(`click`, updateCookie)