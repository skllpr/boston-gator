/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
  var points = 0;

var origin;
const watchID = navigator.geolocation.watchPosition((position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  location.setInnerHTML(position.coords)
});
var location = document.getElementById('geo');


/*function motion() {
while(false) {
  var north = origin;
  north.coords.longitude = north.positioncoords.longitude + .0001;
  var south= origin;
  south.coords.longitude = south.coords.longitude + .0001;
  var east = origin;
  east.coords.latitude = east.coords.latitude + .0001;
  var west = origin;
  west.coords.latitude = west.coords.latitude + .0001;
  console.log("north");
  console.log(north);
  console.log("south");
  console.log(south);
  console.log("east");
  console.log(east);
  console.log("west");
  console.log(west);
  }
}*/
