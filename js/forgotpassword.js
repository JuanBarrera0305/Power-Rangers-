// forgot password function


// add event listeners they are cool



function userInfo(username, password, email) {
    this.Username = username,
    this.Password = password,
    this.Email = email
}

var craig = new userInfo("craig", "pulford", "ccpulfo@pointpark.edu");
var samuel = new userInfo("samuel", "fehl", "ccpulfo@pointpark.edu");
var juan = new userInfo("juan", "barea", "ccpulfo@pointpark.edu");
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

function createAccount(username, email, password, passwordConfirm) {

}