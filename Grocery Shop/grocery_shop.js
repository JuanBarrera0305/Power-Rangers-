//Grocery Store Functions
function saveUser() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address1 = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipCode = document.getElementById("zipCode").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validation
    if (!firstName) {
      console.error("First name is required");
    }
    if (!lastName) {
      console.error("Last name is required");
    }
    if (!address1) {
      console.error("Address 1 is required");
    }
    if (!city) {
      console.error("City is required");
    }
    if (!state) {
      console.error("State is required");
    }
    if (!zipCode.match(/^\d{5}$/)) {
      console.error("Zip code must be 5 digits");
    }
    if (!username) {
      console.error("Username is required");
    }
    if (!password) {
      console.error("Password is required");
    }

// Save to local storage
if (!firstName || !lastName || !address1 || !city || !state || !zipCode.match(/^\d{5}$/) || !username || !password) {
return;
}
    localStorage.setItem(
      "user",
      JSON.stringify({
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zipCode,
        username,
        password,
      })
    );

    alert("User created successfully");
  } 

function authenticateUser() {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const username = document.getElementById("authUsername").value;
    const password = document.getElementById("authPassword").value;

    if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
        alert("Invalid username or password");
        return;
    }

    alert("Authentication successful");
    location.href='gr_create_acct.html'
}



//Order Type and Summary
function startup() {
    document.getElementById("deliveryItems").style.display = "none";
    document.getElementById("pickupItems").style.display = "none";
    document.getElementById("summary").style.display = "none";
}

//Order Selection
function delivery() {
    document.getElementById("pickupItems").style.display = "none";
    document.getElementById("deliveryItems").style.display = "";
    document.getElementById("deliverySelect").style.display = "none";
    document.getElementById("pickupSelect").style.display = "none";
}

function pickup() {
    document.getElementById("deliveryItems").style.display = "none";
    document.getElementById("pickupItems").style.display = "";
    document.getElementById("deliverySelect").style.display = "none";
    document.getElementById("pickupSelect").style.display = "none";
}

//Order Placement
function deliverySubmit() {
    alert("Delivery order placed!");
    method = "Delivery";
    document.getElementById("deliveryItems").style.display = "none";
    document.getElementById("pickupItems").style.display = "none";
    document.getElementById("summary").style.display = "";
    document.getElementById("deliveryTotal").style.display = "";
    document.getElementById("pickupTotal").style.display = "none";
}

function pickupSubmit() {
    alert("Pickup order placed!");
    method = "Pickup";
    document.getElementById("deliveryItems").style.display = "none";
    document.getElementById("pickupItems").style.display = "none";
    document.getElementById("summary").style.display = "";
    document.getElementById("deliveryTotal").style.display = "none";
    document.getElementById("pickupTotal").style.display = "";
}

//Order Summary
function summary() {
    //alert("test");
}

//Order Total
const prices = ["placeholder", 1.99,1.99,0.99,0.99,0.99,1.99,0.99,1.99,0.99,1.99,0.99,0.99,1.99,2.99,2.99,1.99];

function deliveryCalc() {
    var subtotal = 0;
    for (let i = 1; i < 13; i++ ) {
        if  (document.getElementById("item" + [i]).checked === true) {
            subtotal = subtotal + prices[i];
        }
    }
    var deliveryTotal = (subtotal * 1.07) + 9.99;
    alert("The cost is $" + deliveryTotal.toFixed(2));
}

function pickupCalc() {
    var subtotal = 0;
    for (let i = 1; i < 13; i++ ) {
        if  (document.getElementById("item" + [i]).checked === true) {
            subtotal = subtotal + prices[i];
        }
    }
    var pickupTotal = (subtotal * 1.07);
    alert("The cost is $" + pickupTotal.toFixed(2));;
}

//Order Time
function timeCalc() {
    var today = new Date();
    var currentTime = today.getHours() + ":" + today.getMinutes();

    if (method === "Delivery") {
        var orderTime = today.getHours() + ":" + (today.getMinutes() + 30);
    }
    if (method === "Pickup") {
        var orderTime = today.getHours() + ":" + (today.getMinutes() + 15);
    }
    alert("Your order will be ready at " + orderTime);
}