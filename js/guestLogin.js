// author: craig Pulford
// allows one to view menu or order as a guest
// This login should prompt and ask for a Name

// Potentially in future make this function have a boolean like Guest == true so later at checkout they have to enter an address or some
// piece of identifying information or it can be asked here and saved for later instead 

var guestUser

function guestLogin() {
    guestUser = prompt("What is your name?","Enter Your Name");
    if (guestUser.value === "") {
        alert("Please Enter a name!");
    } else {
        window.location.href = "/menu/MainHomeMenu.html"
    }
}
