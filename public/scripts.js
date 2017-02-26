var visibleMenu = false;
function toggleMenuMobile() {
    if (!visibleMenu) document.getElementById("meny").style.display = "block";
    else document.getElementById("meny").style.display = "none";
    visibleMenu = !visibleMenu;
}

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