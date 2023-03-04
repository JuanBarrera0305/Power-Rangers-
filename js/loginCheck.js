// author: craig pulford
// checks artifical login list

function loginCheck(username,password) {
    for (let i = 0; i < usernames.length;i++) {
        if (username === usernames[i]) {
            if (password === passwords[i]) {
                window.location.href = "ccpulfo.it.pointpark.edu/menu.html";
            } else if (i > usernames.length) 
                alert("Incorrect Password");
        } else { 
            alert("Username does not exist");
        }
    }
}

// make sure usernames array is the same size as passwords array

var usernames=["craig","username","samuel","juan","user","hackerman"]

var passwords=["pulford","password","fehl","barrera","name","hackers"]