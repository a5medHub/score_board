let homescore = document.getElementById("home-score");
let guestscore = document.getElementById("guest-box");

let homeCount1 = 0;
let homeCount2 = 0;
let homeCount3 = 0;

let guestCount1 = 0;
let guestCount2 = 0;
let guestCount3 = 0;

function homeScoreButtons1() {
  homeCount1 = Number(homescore.innerText);
  homeCount1 += 1;
  homescore.innerText = homeCount1;
  //console.log(homescore);
}
function homeScoreButtons2() {
  homeCount2 = Number(homescore.innerText);
  homeCount2 += 2;
  homescore.innerText = homeCount2;
  //console.log(homescore);
}
function homeScoreButtons3() {
  homeCount3 = Number(homescore.innerText);
  homeCount3 += 3;
  homescore.innerText = homeCount3;
  //console.log(homescore);
}

function guestScoreButtons1() {
  guestCount1 = Number(document.innerText);
  guestCount1 += 1;
  guestscore.innerText = guestCount1;
}
function guestScoreButtons2() {
  guestCount2 = Number(document.innerText);
  guestCount2 += 2;
  guestscore.innerText = guestCount2;
}
function guestScoreButtons3() {
  guestCount3 = Number(document.innerText);
  guestCount3 += 3;
  guestscore.innerText = guestCount3;
}
