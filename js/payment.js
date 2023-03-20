//Filename: payment.js
//This code will contain the necessary JavaScript for the payment.html page.
//Writer: Sam Fehl

//Functions
function cash() {
    alert("Cash Payment Selected, Pay in Store");
};

function card() {
    alert("Card Payment Selected, Pay Online");
    var currentSite = window.location.hostname;
    var destination = "http://" + currentSite + ":5500/html/card.html";
    window.location.href = destination;
    //window.location.href = "http://127.0.0.1:5500/html/card.html"
    var paymentMethod = false;
}

function completePayment() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var number = document.getElementById("number").value;
    var expMon = document.getElementById("expMon").value;
    var expYear = document.getElementById("expYear").value;
    var zip = document.getElementById("zip").value;
    var ccv = document.getElementById("ccv").value;

    //First Name
    if (first.indexOf("1") !== -1 || first.indexOf("2") !== -1 || first.indexOf("3") !== -1 || 
        first.indexOf("4") !== -1 || first.indexOf("5") !== -1 || first.indexOf("6") !== -1 || 
        first.indexOf("7") !== -1 || first.indexOf("8") !== -1 || first.indexOf("9") !== -1 || first.indexOf("0") !== -1) {
        alert("First name must be letters only.");
            var checkVal = false;
            return false;
            first.focus();
    }
    //Last Name
    if (last.indexOf("1") !== -1 || last.indexOf("2") !== -1 || last.indexOf("3") !== -1 || 
        last.indexOf("4") !== -1 || last.indexOf("5") !== -1 || last.indexOf("6") !== -1 || 
        last.indexOf("7") !== -1 || last.indexOf("8") !== -1 || last.indexOf("9") !== -1 || last.indexOf("0") !== -1) {
        alert("Last name must be letters only.");
            var checkVal = false;    
            return false;
            last.focus();
    }
    //Card Number
    for (var i = 0; i <= 4; i++) {
        var numberChar = parseInt(number[i]);
        if (isNaN(numberChar)) {
            alert("Card number cannot contain letters.");
            var checkVal = false;
            return false;
            number.focus();
        }
    }
    if (number.length <= 14) {
        alert("Card number is not long enough.");
        var checkVal = false;
        return false;
        number.focus();
    }
    //Expiration
    if (expMon.length <= 1 || expYear.length <= 3) {
        alert("Expiration date is not in the proper format.");
        var checkVal = false;
        return false;
        expMon.focus();
    }
    //Zip Code
    for (var i = 0; i <= 4; i++) {
        var zipChar = parseInt(zip[i]);
        if (isNaN(zipChar)) {
            alert("Zip code must be numbers only.");
            var checkVal = false;
            return false;
            zip.focus();
        }
    }
    if (zip.length <= 4) {
        alert("Zip code must be five digits.");
        var checkVal = false;
        return false;
        zip.focus(); 
    }
    //CCV
    for (var i = 0; i < ccv.length; i++) {
        var ccvChar = parseInt(ccv[i]);
        if (isNaN(ccvChar)) {
            alert("CCV must be numbers only.");
            var checkVal = false;
            return false;
            ccv.focus();
        }
    }
    if (ccv.length <= 2) {
        alert("CCV must be at least three digits.");
        var checkVal = false;
        return false;
        ccv.focus(); 
    }
    if (checkVal !== false) {                        
        document.getElementById("cardForm").hidden = true;
        document.getElementById("revealPayment").hidden = false;
        alert("Did you really just enter your credit information to a sketchy website?");
    }
};

function confirm() {
    document.write("<font size=12><b> Don't worry, we didn't save it... this time");
};
