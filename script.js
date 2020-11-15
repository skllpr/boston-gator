function setVisibility(state) {
  try {
    initialAward.setAttribute('visibility', state);
    initialAward.setAttribute('position', {x: 1, y: 2, z: 3});
  }
  catch(err) {
    console.log(err);
  } 
}


function calcDistance(latitude, longitude) {
  let deltaLong = startLong - longitude;
  let deltaLat = startLat - latitude;
  let distance = Math.hypot(deltaLong, deltaLat);
  
  if (distance > 0.0002) {  
    setVisibility('true');
    score+=50;
    alert(score);
    
    startLat = latitude;
    startLong = longitude;

  } else if (distance > 0.0001) {
    setVisibility('false');
    alert('Walk Further!');
  }

  
  return distance;
}



var score = 0;
var startLat;
var startLong;
//var initialAward = document.querySelector('#remove');
var initialAward = document.querySelector('#award');
navigator.geolocation.getCurrentPosition((position) =>{
  startLat = position.coords.latitude;
  startLong = position.coords.longitude;
  initialAward.visibility= "false";
});


const watchID = navigator.geolocation.watchPosition((position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  //document.getElementById("lat").innerHTML=position.coords.latitude;
  //document.getElementById("geo").innerHTML=position.coords.longitude;
  let distance = calcDistance(position.coords.latitude, position.coords.longitude);
  var initialAward = document.querySelector('#award');
  //alert(distance);
  //alert(initialAward);

});
