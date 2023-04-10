function userInfo(username, password, email) {
    this.Username = username,
    this.Password = password,
    this.Email = email
}

var craig = new userInfo("craig", "pulford", "ccpulfo@pointpark.edu");
var samuel = new userInfo("samuel", "fehl", "ccpulfo@pointpark.edu");
var juan = new userInfo("juan", "barrera", "ccpulfo@pointpark.edu");
var user = new userInfo("craig", "pulford", "ccpulfo@pointpark.edu");
var hackerman = new userInfo("craig", "pulford", "ccpulfo@pointpark.edu");
var jeff = new userInfo("jeff", "seaman","jseaman@pointpark.edu");

// user info like samuel.Username

function validateForgotPassword() {
    let testemail = document.getElementById("email").value;
    let testnewpass = document.getElementById("newpassword").value;
    let testpassConfirm = document.getElementById("newpasswordconfirm").value;
    if (testemail === "" || testnewpass === "" || testpassConfirm === "") {
        alert("please fill out our form!");
        return false;
    }
}

function forgotpassword(email, password, passwordConfirm) {
    document.getElementById("email")
}

function createAccount() {
    var email = document.getElementById("email").value;
    var emailConfirm = document.getElementById("confirmemail").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("confirmpassword").value;
    
    if (username === "" || email === "" || password === "" || passwordConfirm === "" || emailConfirm === "") {
        console.log("failed to fill in fields")
         return alert("not all forms were filled out!");
    }
    if(email != emailConfirm) {
        console.log("emails do not match")
        return alert("emails must be the same");
    }
    if (password != passwordConfirm) {
        console.log("passwords are not matching")
        return alert("passwords do not match")
    } else {
        return window.location.replace("menu/MainHomeMenu.html")
    }
}
