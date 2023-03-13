//Filename: payment.js
//This code will contain the necessary JavaScript for the payment.html page.
//Writer: Sam Fehl

//Global Variables


//Functions
function cash() {
    document.getElementById("cardForm").hidden = true;
    document.getElementById("revealPayment").hidden = true;
    var paymentMethod = true;
    alert("Cash Payment Selected, Pay in Store");
};

function card() {
    alert("Card Payment Selected, Pay Online");
    document.getElementById("cardForm").hidden = false;
    document.getElementById("revealPayment").hidden = false;
    var paymentMethod = false;
};

//Constructor
function CardPay(first, last, number, exp, zip, ccv) {
    this.first = first,
    this.last = last,
    this.number = number,
    this.exp = exp,
    this.zip = zip,
    this.ccv = ccv
};

function completePayment() {
    var payInfo = new CardPay(document.getElementById('first'), document.getElementById('last'), document.getElementById('number'), 
                            document.getElementById('exp'), document.getElementById('zip'), document.getElementById('ccv'));

    document.getElementById("cardForm").hidden = true;
    alert("Did you really just enter your credit information to a sketchy website?");
    document.getElementById("revealPayment").hidden = false;
};

function confirm() {
    document.write("<font size=12><b> Don't worry, we didn't save it... this time");
};