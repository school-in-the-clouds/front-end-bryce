function myFunction() {
  alert("Thank you for joining our family!");
}
function Function2(){
  alert("I would have loved to have added a login but unfortunately my frontend dude never finished");
}


var x = document.getElementById("getLocation");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
