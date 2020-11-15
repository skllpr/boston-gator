function calcDistance(lat, long) {
  if (Math.hypot(long-startLong, lat-startLat) > .000006) {
    console.log(initialAward);
    score = score + 60;
    alert(score);
    //var text = document.
    alert('moved far')
    initialAward.parentNode.removeChild(initialAward);
    var el = document.createElement('a-entity');
    let latString = 'latitude: ' + lat;
    let longString = '; longitude: ' + long + ";";
    let choordString = latString+longString;
    alert(choordString);
    el.setAttribute('gps-entity-place', 'latitude: ${lat}; longitude: ${long};');
    el.setAttribute('src', 'https://console.echoar.xyz/query?key=withered-bonus-8514&file=15cd7302-ece9-4caa-aa27-2cf3d2d2b11e.glb');
    el.setAttribute('scale', '5 5 5');
    el.setAttribute('id','remove')
    startLat = lat;
    document.querySelector('#scenery').appendChild(el);
    //alert(lat);
    alert("updated el");
    alert(el);
    startLat = long;
    //alert(long);
    console.log("moved far");
    initialAward = document.querySelector('a-entity');
  }
  console.log(Math.hypot(long-startLong, lat-startLat));
  alert(Math.hypot(long-startLong, lat-startLat))
}
var score = 0;
try {
var points = 0;
var startLat;
var startLong;
var initialAward = document.querySelector('#remove');
navigator.geolocation.getCurrentPosition((position) =>{
  startLat = position.coords.latitude;
  startLong = position.coords.longitude;
    console.log(initialAward);
});

const watchID = navigator.geolocation.watchPosition((position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  //document.getElementById("lat").innerHTML=position.coords.latitude;
  //document.getElementById("geo").innerHTML=position.coords.longitude;
  calcDistance(position.coords.latitude, position.coords.longitude);
  initialAward = document.querySelector('#remove');
    alert(initialAward);

});
}
catch (err) {
  alert(err);
}
