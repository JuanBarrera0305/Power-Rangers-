// author: craig pulford
// checks artifical login list

function usernameCheck (username,password) {
    switch (username) {
        case "craig":
        case "username":
        case "samuel":
        case "juan":
        case "user":
        case "hackerman":
            checkpassword(username,password);
        default:
            alert("Username does not exist");
            break;
    }
}

function checkpassword(username,password) {
    var checkNum = usernames.indexOf(username);
    if (passwords[checkNum] === password)
        window.location.href = "menu_Folder/HomeMenu.html";
    else {
        alert("Incorrect Password")
    }
}



// make sure usernames array is the same size as passwords array

var usernames=["craig","username","samuel","juan","user","hackerman"]

var passwords=["pulford","password","fehl","barrera","name","hackers"]