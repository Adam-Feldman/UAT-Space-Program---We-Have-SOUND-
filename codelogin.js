
function checkCreds() {
  alert("Checking credentials");


  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var badgeNumber = document.getElementById("badgeNumber").value;
  var name = firstName + " " + lastName;

  if (name.length >= 20) {
    // if the name has 20 or more characters.
    document.getElementById("loginStatus").innerHTML = "UserName has invalid number of characters!";

  }
  // if the badge has anything other than 3 numbers 
  else if (badgeNumber > 1000 || badgeNumber < 99) {
    document.getElementById("loginStatus").innerHTML = "Incorrect badge number!";

  }
  //All credentials are good, access granted
  else {
    alert("Access Granted, Welcome " + name + "!");
    location.replace("table.html");
  }
}
function on() {
  document.getElementById("on").disabled = true;
  document.getElementById("off").disabled = false;
  document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
  document.getElementById("data").rows["longitude"].innerHTML = "Start pushed...";
}

function stop() {
  document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";
  document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
  document.getElementById("on").disabled = false;
  document.getElementById("off").disabled = true;
}






function playStation() {
  mySound = new sound("us-lab-background.mp3");
  mySound.play();
}

function playRhead() {
  mySound = new sound("08 Separator.mp3");
  mySound.play();
}

function playWho() {
  mySound = new sound("Eminence Front.mp3");
  mySound.play();
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.play = function() {
      this.sound.play();}
  }