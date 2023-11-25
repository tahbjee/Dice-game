var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImg = "dice" + randomNumber1 + ".png";

var imgRandom = "images/" + diceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imgRandom);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImg2 = "dice" + randomNumber2 + ".png";

var imgRandom2 = "images/" + diceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imgRandom2);

//if player one wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "👑 Player 1 wins! ";
}
//if player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 👑";
}
// draw
else {
  document.querySelector("h1").innerHTML = "Draw!💀";
}
