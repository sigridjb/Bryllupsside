// Used to toggle the main menu on mobile
var visibleMenu = false;
function toggleMenuMobile() {
    if (!visibleMenu) document.getElementById("meny").style.display = "block";
    else document.getElementById("meny").style.display = "none";
    visibleMenu = !visibleMenu;
}

// Make count down great again
var countDownDate = new Date("Jul 29, 2017 14:30:00").getTime();
// Update count down every second:
var x = setInterval(function() {
    // Todays date and time:
    var now = new Date().getTime();
    // Time between today and wedding:
    var dist = countDownDate - now;
    // Separate in days, hours, minutes and seconds:
    var days = Math.floor(dist / (1000*60*60*24));
    var hours = Math.floor((dist % (1000*60*60*24)) / (1000*60*60));
    var min = Math.floor((dist % (1000*60*60)) / (1000*60));
    var sec = Math.floor((dist % (1000*60)) / 1000);

    // Display count down:
    document.getElementById("countdown").innerHTML = "Om ganske nøyaktig " + days + " dager, " + hours + " timer, " + min + " minutter og " + sec + " sekunder.";

    //If count down is finished:
    if (dist<0) {
        clearInterval(x);
        document.getEementById("countdown").innerHTML = "Nå er vi gift!";
    }
}, 1000);


// Used to toggle the content blocks
function toggleSection(id) {
    var element = document.getElementById(id).getElementsByClassName("inner")[0];
    var state = element.style.display;

    var button = document.getElementById(id).getElementsByClassName("toggle-button")[0];

    if (state === "block") {
        element.style.display = "none";
        button.getElementsByClassName("collapse")[0].className = "expand";
    } else {
        element.style.display = "block";
        button.getElementsByClassName("expand")[0].className = "collapse";
    }
}

// Initializes the map in the "directions" section
function initMap() {
    var church = { lat: 59.965662, lng: 10.672338 };
    var vangen = { lat: 59.818630, lng: 10.999399 };
    var city_center = { lat: 59.901820, lng: 10.884275 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: city_center
    });
    var marker = new google.maps.Marker({
        position: church,
        map: map
    });
    var marker = new google.maps.Marker({
        position: vangen,
        map: map
    });
}
